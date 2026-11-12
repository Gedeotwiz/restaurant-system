const dishes = [
    {
        category: "From the grill",
        name: "Brochettes z’Inyama",
        description: "Char-grilled beef skewers, spiced onions and fresh pili pili.",
        price: "RWF 8,000",
        tag: "Guest favourite",
        icon: "🔥",
    },
    {
        category: "From the grill",
        name: "Brochettes z’Ifi",
        description: "Lake fish grilled over charcoal with lemon and garden herbs.",
        price: "RWF 9,500",
        tag: "Lake catch",
        icon: "🐟",
    },
    {
        category: "Rwandan classics",
        name: "Isombe",
        description: "Slow-cooked cassava leaves with peanut, served with steaming rice.",
        price: "RWF 6,500",
        tag: "Plant-based",
        icon: "🌿",
    },
    {
        category: "Rwandan classics",
        name: "Ibihaza n’Ibishyimbo",
        description: "Tender pumpkin and beans simmered together in a homestyle sauce.",
        price: "RWF 6,000",
        tag: "Comfort food",
        icon: "🎃",
    },
    {
        category: "Rwandan classics",
        name: "Agatogo k’Ibitoki",
        description: "Green banana stew with tomato, onion and your choice of beef or beans.",
        price: "RWF 7,500",
        tag: "Made to share",
        icon: "🍌",
    },
    {
        category: "Rwandan classics",
        name: "Ubugali n’Isosi",
        description: "Soft cassava ugali with a rich, slow-simmered tomato and greens sauce.",
        price: "RWF 5,500",
        tag: "Traditional",
        icon: "🍲",
    },
    {
        category: "Sides & sips",
        name: "Ibijumba byokeje",
        description: "Golden roasted sweet potatoes with a pinch of sea salt.",
        price: "RWF 3,000",
        tag: "Side",
        icon: "🍠",
    },
    {
        category: "Sides & sips",
        name: "Ikivuguto",
        description: "Cool, gently tangy fermented milk, served chilled.",
        price: "RWF 2,500",
        tag: "Local favourite",
        icon: "🥛",
    },
];

function Menu() {
    const menu = document.createElement("main");
    menu.classList.add("menu-page");

    const categories = ["All dishes", ...new Set(dishes.map(dish => dish.category))];

    menu.innerHTML = `
        <section class="menu-hero">
            <div class="menu-intro">
                <p class="eyebrow"><span></span> FROM OUR KITCHEN, WITH LOVE</p>
                <h1>A taste of <em>Rwanda.</em></h1>
                <p class="menu-lead">Rooted in the flavours we grew up with. Gather around for charcoal-grilled favourites, slow-cooked classics and something refreshing.</p>
                <div class="menu-note"><span>✳</span> Fresh ingredients · Local flavours · Made daily</div>
            </div>
            <div class="menu-hero-art" aria-hidden="true">
                <div class="menu-art-ring"></div>
                <div class="menu-art-plate"><span>🍲</span></div>
                <span class="art-spark art-spark-one">✳</span>
                <span class="art-spark art-spark-two">✦</span>
                <span class="art-caption">Made for<br>sharing</span>
            </div>
        </section>

        <section class="menu-listing" aria-labelledby="menu-heading">
            <div class="menu-section-heading">
                <div>
                    <p class="eyebrow">A LITTLE SOMETHING FOR EVERYONE</p>
                    <h2 id="menu-heading">The menu</h2>
                </div>
                <p>All prices are in Rwandan francs (RWF).</p>
            </div>
            <div class="menu-filters" aria-label="Menu categories">
                ${categories.map((category, index) => `<button class="menu-filter${index === 0 ? " active" : ""}" type="button" data-category="${category}" aria-pressed="${index === 0}">${category}</button>`).join("")}
            </div>
            <div class="dish-grid">
                ${dishes.map(dish => `
                    <article class="dish-card" data-dish-category="${dish.category}">
                        <div class="dish-topline"><span class="dish-icon" aria-hidden="true">${dish.icon}</span><span class="dish-tag">${dish.tag}</span></div>
                        <p class="dish-category">${dish.category}</p>
                        <div class="dish-title-row"><h3>${dish.name}</h3><span class="dish-price">${dish.price}</span></div>
                        <p class="dish-description">${dish.description}</p>
                    </article>
                `).join("")}
            </div>
            <p class="menu-footer-note">Have an allergy or a question about a dish? <a href="#contacts">Talk to our team</a> and we’ll be happy to help.</p>
        </section>
    `;

    const filters = menu.querySelectorAll(".menu-filter");
    const cards = menu.querySelectorAll(".dish-card");
    filters.forEach(filter => {
        filter.addEventListener("click", () => {
            const selected = filter.dataset.category;
            filters.forEach(button => {
                const isActive = button === filter;
                button.classList.toggle("active", isActive);
                button.setAttribute("aria-pressed", String(isActive));
            });
            cards.forEach(card => {
                card.hidden = selected !== "All dishes" && card.dataset.dishCategory !== selected;
            });
        });
    });

    return menu;
}

export default Menu;
