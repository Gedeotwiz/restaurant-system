import "./style.css"
import homePage from "./pages/home"
import Menu from "./pages/menu"

const routes={
    "/":homePage,
    "/menu":Menu
}

function navigate(path){
    const page = routes[path]

    const content = document.querySelector("#content")

    if(!page){
        content.innerHTML="<h1>404 - Page Not Found</h1>";
        return;
    }
    content.innerHTML=""

    content.appendChild(page())
}

document.addEventListener("click",(e)=>{
    const link = e.target.closest("[data-link]");

    if(link){
        e.preventDefault()
        const path = link.getAttribute("href")
        history.pushState({},"",path)
        navigate(path)
    }
})

window.addEventListener("popstate", () => {
    navigate(window.location.pathname);
});

navigate(window.location.pathname);
