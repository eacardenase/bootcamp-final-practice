import {
    getElement,
    getStorageItem,
    catalogURL,
    fetchCatalogData,
    showScrollButton,
} from "./helpers/utils.js";

import {
    displayProducts,
    displayHeaderElements,
    displayColorsFilter,
} from "./view/display.js";

import { filterByCategory, filterByColor } from "./filters/filters.js";

fetchCatalogData(catalogURL);
let catalog = getStorageItem("catalog");
let [_, { productos }] = catalog;

const headerContainer = getElement(".header__nav-list");
const productList = getElement(".product-list");
const colorsList = getElement(".filters__list-colors");
const topLink = getElement(".top-link");

displayHeaderElements(catalog, headerContainer);
displayProducts(productos, productList);
displayColorsFilter(productos, colorsList);

window.addEventListener("scroll", function () {
    showScrollButton(topLink);
});

headerContainer.addEventListener("click", function (event) {
    filterByCategory(event, productos, productList);
});
colorsList.addEventListener("click", function (event) {
    filterByColor(event, productos, productList);
});
