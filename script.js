const products = [
  { id: 1, name: "T-Shirt", price: 20, image: "https://via.placeholder.com/200" },
  { id: 2, name: "Shoes", price: 50, image: "https://via.placeholder.com/200" },
  { id: 3, name: "Hat", price: 15, image: "https://via.placeholder.com/200" },
];

let cartCount = 0;

function addToCart(productId) {
  cartCount++;
  document.getElementById("cart-count").textContent = cartCount;
  alert("Added to cart!");
}

function displayProducts() {
  const productList = document.getElementById("product-list");

  products.forEach(product => {
    const productEl = document.createElement("div");
    productEl.className = "product";

    productEl.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;

    productList.appendChild(productEl);
  });
}

document.addEventListener("DOMContentLoaded", displayProducts);
