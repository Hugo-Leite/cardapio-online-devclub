const list = document.querySelector("ul");
const showAll = document.querySelector(".show-all");
const discount = document.querySelector(".show-discount");
const sumAll = document.querySelector(".sum-All");
const filterProducts = document.querySelector(".filter-products");

function formatPrice(price) {
    const formatado = price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

    return formatado;
}

function showProducts(array) {
    let myLi = "";

    array.forEach((product) => {
        myLi += `
        <li>
            <img src=${product.src} alt="${product.name}" />
            <p>${product.name}</p>
            <p class="item-price">${formatPrice(product.price)}</p>
        </li> 
        `;
    });

    list.innerHTML = myLi;
}

function mapDiscount() {
    const newPrice = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,
    }));

    showProducts(newPrice);
}

function sum() {
    const sum = menuOptions.reduce((acc, curr) => {
        return acc + curr.price;
    }, 0);

    list.innerHTML = `
        <li>
            <p>A soma de todos os itens do menur é: <br> ${formatPrice(sum)}</p>
        </li> 
    `;
}

function filter() {
    const newArray = menuOptions.filter((products) => {
        if (products.vegan) {
            return true;
        } else {
            return false;
        }
    });

    showProducts(newArray);
}

showAll.addEventListener("click", () => showProducts(menuOptions));
discount.addEventListener("click", mapDiscount);
sumAll.addEventListener("click", sum);
filterProducts.addEventListener("click", filter);
