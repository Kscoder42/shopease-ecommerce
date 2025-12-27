const products = [
  {
    id: 1,
    name: "Laptop",
    price: 50000,
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
  },
  {
    id: 2,
    name: "Smartphone",
    price: 20000,
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
  },
  {
    id: 3,
    name: "Headphones",
    price: 3000,
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 8000,
    img: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b"
  },
  {
    id: 5,
    name: "Keyboard",
    price: 1500,
    img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3"
  },
  {
    id: 6,
    name: "Mouse",
    price: 800,
    img: "https://images.unsplash.com/photo-1527814050087-3793815479db"
  }
];

let cart = [];

const productsDiv = document.getElementById("products");
const cartItems = document.getElementById("cartItems");
const totalEl = document.getElementById("total");

/* RENDER PRODUCTS */
function renderProducts(list = products) {
  productsDiv.innerHTML = "";
  list.forEach(p => {
    productsDiv.innerHTML += `
      <div class="product">
        <img src="${p.img}">
        <h4>${p.name}</h4>
        <p>₹${p.price}</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    `;
  });
}

/* CART */
function addToCart(id) {
  const item = products.find(p => p.id === id);
  cart.push(item);
  renderCart();
}

function renderCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    cartItems.innerHTML += `
      <li>
        ${item.name}
        <button onclick="removeItem(${index})">x</button>
      </li>
    `;
  });

  totalEl.textContent = `Total: ₹${total}`;
}

function removeItem(index) {
  cart.splice(index, 1);
  renderCart();
}

/* SEARCH */
document.getElementById("search").addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  renderProducts(
    products.filter(p => p.name.toLowerCase().includes(value))
  );
});

/* CAROUSEL */
const banners = [
  "https://images.unsplash.com/photo-1515169067865-5387ec356754",
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
];

let i = 0;
setInterval(() => {
  document.getElementById("banner").src = banners[i++ % banners.length];
}, 3000);

/* INIT */
renderProducts();
