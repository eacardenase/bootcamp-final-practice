const catalogURL =
    "https://run.mocky.io/v3/e2e2ae89-2a80-4284-8c0a-a06e65be8f4b";

// const catalogURL =
//     "https://run.mocky.io/v3/57d6b92f-b02a-445f-9fe4-000d397e04f4";

const getElement = (selection) => {
    const element = document.querySelector(selection);
    if (element) return element;
    throw new Error(
        `Please check "${selection}" selector, no such element exist`
    );
};

const getStorageItem = (name) => {
    const storageItem = localStorage.getItem(name);

    if (storageItem) {
        return JSON.parse(storageItem);
    } else {
        return [];
    }
};

const setStorageItem = (name, item) => {
    localStorage.setItem(name, JSON.stringify(item));
};

function fetchCatalogData(serviceEndpoint) {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", serviceEndpoint);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (this.readyState !== 4) return;
        if (this.status === 200) {
            try {
                const responseData = JSON.parse(this.responseText);

                setStorageItem("catalog", responseData);
            } catch (error) {
                console.log(error);
            }
        } else {
            console.log({
                status: this.status,
                text: this.statusText,
            });
        }
    };
}

function showScrollButton(button) {
    const scrollHeight = window.scrollY;
    if (scrollHeight > 200) {
        button.classList.add("show-link");
    } else {
        button.classList.remove("show-link");
    }
}

export {
    catalogURL,
    getElement,
    getStorageItem,
    setStorageItem,
    fetchCatalogData,
    showScrollButton,
};
