function displayHeaderElements(catalog, container) {
    let [{ category: categories }] = catalog;

    categories = categories
        .map((category) => {
            return `
        <li class="header__nav-item">
            <a href="#" class="header__nav-item-link"
                >${category}</a
            >
        </li>
        `;
        })
        .join("");

    container.innerHTML = categories;
}

function displayProducts(listOfProducts, container) {
    container.innerHTML = listOfProducts
        .map((producto) => {
            return `
        <li class="product-item">
        <a href="#" class="product-item__name"
        >${producto.name.toUpperCase()}</a
        >
        <p>CATEGORY: ${producto.category.toUpperCase()}</p>
        <span class="product-color" style="background-color: ${
            producto.color
        };"></span>
        </li>
        `;
        })
        .join("");
}

function displayColorsFilter(productos, container) {
    const colors = [...new Set(productos.map((producto) => producto.color))];

    container.innerHTML = colors
        .map((color) => {
            return `
        <li>
        <a>
        <span class="product-color-filter" data-color="${color}" style="background-color: ${color};"></span>
        </a>
        </li>
        `;
        })
        .join("");
}

export { displayProducts, displayHeaderElements, displayColorsFilter };
