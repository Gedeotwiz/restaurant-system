import "./style.css";
import homePage from "./pages/home";
import Menu from "./pages/menu";

const BASE_PATH = process.env.NODE_ENV === "production"
    ? "/restaurant-system"
    : "";

const routes = {
    "/": homePage,
    "/menu": Menu,
};

function getRoutePath() {
    let path = window.location.pathname;

    if (BASE_PATH && path.startsWith(BASE_PATH)) {
        path = path.slice(BASE_PATH.length);
    }

    return path || "/";
}

function createRouteLink(path) {
    return `${BASE_PATH}${path === "/" ? "/" : path}`;
}

function setActiveLink(path) {
    const links = document.querySelectorAll("[data-link]");

    links.forEach(link => {
        link.classList.remove("active");

        const linkPath = link.getAttribute("href");

        if (linkPath === createRouteLink(path)) {
            link.classList.add("active");
        }
    });
}

function navigate(path) {
    const page = routes[path];
    const content = document.querySelector("#content");

    if (!page) {
        content.innerHTML = "<h1>404 - Page Not Found</h1>";
        return;
    }

    content.innerHTML = "";
    content.appendChild(page());

    setActiveLink(path);
}

document.addEventListener("click", (e) => {
    const link = e.target.closest("[data-link]");

    if (link) {
        e.preventDefault();

        const url = new URL(link.href);
        const path = getRoutePathFromUrl(url.pathname);

        history.pushState({}, "", url.pathname);

        navigate(path);
    }
});

function getRoutePathFromUrl(pathname) {
    if (BASE_PATH && pathname.startsWith(BASE_PATH)) {
        pathname = pathname.slice(BASE_PATH.length);
    }

    return pathname || "/";
}
window.addEventListener("popstate", () => {
    navigate(getRoutePath());
});
navigate(getRoutePath());