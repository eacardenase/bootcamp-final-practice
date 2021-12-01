import { displayProducts } from "../view/display.js";

function filterByCategory(event, productos, container) {
    const target = event.target;

    if (target.classList.contains("header__nav-item-link")) {
        const categoryToFilter = target.textContent;

        const filteredCatalog = productos.filter((producto) => {
            const { category } = producto;

            if (category === categoryToFilter) {
                return producto;
            }
        });

        displayProducts(filteredCatalog, container);
    }
}

function filterByColor(event, productos, container) {
    const target = event.target;

    if (target.classList.contains("product-color-filter")) {
        const colorToFilter = target.dataset.color;

        const filteredCatalog = productos.filter((producto) => {
            const { color } = producto;

            if (color === colorToFilter) {
                return producto;
            }
        });

        displayProducts(filteredCatalog, container);
    }
}

function filterPro() {}

export { filterByCategory, filterByColor };
