function Menu() {
    const menu = document.createElement("div");

    menu.classList.add("menu-page");

    menu.innerHTML = `
        <h1>Hello to menu page</h1>
    `;

    return menu;
}

export default Menu;