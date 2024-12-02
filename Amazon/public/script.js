async function fetchProducts() {
    const response = await fetch('/api/products');
    const products = await response.json();
    const productList = document.getElementById('product-list');

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>$${product.price}</p>
        `;
        productList.appendChild(productDiv);
    });
}

fetchProducts();