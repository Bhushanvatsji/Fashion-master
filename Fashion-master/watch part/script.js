// Product Data
const products = [
  {
    name: "SmartWatch X10",
    price: 199,
    image: "images/watch1.png",
    rating: 4.5
  },
  {
    name: "SmartWatch Pro Max",
    price: 249,
    image: "images/watch2.png",
    rating: 4.7
  },
  {
    name: "SmartWatch Lite",
    price: 149,
    image: "images/watch3.png",
    rating: 4.2
  },
  {
    name: "SmartWatch Sport Edition",
    price: 179,
    image: "images/watch4.png",
    rating: 4.6
  },
  {
    name: "SmartWatch Ultra Titanium",
    price: 299,
    image: "images/watch5.png",
    rating: 4.9
  }
];

let cartCount = 0;
const productGrid = document.getElementById("product-grid");

// Display Products
products.forEach((product) => {
  const card = document.createElement("div");
  card.classList.add("product-card");
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" class="product-img">
    <div class="product-info">
      <h3>${product.name}</h3>
      <p class="price">$${product.price}</p>
      <p class="rating">⭐ ${product.rating}</p>
      <button class="add-btn">Add to Cart</button>
    </div>
  `;

  // Add to cart button
  card.querySelector(".add-btn").addEventListener("click", () => {
    cartCount++;
    document.getElementById("cart-count").textContent = cartCount;
    alert(`${product.name} added to cart!`);
  });

  productGrid.appendChild(card);
});
