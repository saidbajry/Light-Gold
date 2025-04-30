document.querySelectorAll(".product-image").forEach((image) => {
  image.addEventListener("click", () => {
    const details = image.nextElementSibling;
    details.classList.toggle("show");
  });
});

let currentIndex = 0;

function showImage(index) {
  const images = document.querySelectorAll(".gallery-image");
  images.forEach((img, i) => {
    img.style.display = i === index ? "block" : "none";
  });
}

document.querySelector(".next").addEventListener("click", () => {
  currentIndex =
    (currentIndex + 1) % document.querySelectorAll(".gallery-image").length;
  showImage(currentIndex);
});

document.querySelector(".prev").addEventListener("click", () => {
  currentIndex =
    (currentIndex - 1 + document.querySelectorAll(".gallery-image").length) %
    document.querySelectorAll(".gallery-image").length;
  showImage(currentIndex);
});
document.getElementById("search-input").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const products = document.querySelectorAll(".product");

  products.forEach((product) => {
    const title = product
      .querySelector(".product-title")
      .textContent.toLowerCase();
    product.style.display = title.includes(query) ? "block" : "none";
  });
});

const cart = [];
const cartList = document.getElementById("cart-items");
const checkoutBtn = document.getElementById("checkout-button");

// Ambil semua tombol beli (dengan class .buy-button)
document.querySelectorAll(".buy-button").forEach((button) => {
  button.addEventListener("click", () => {
    const name = button.getAttribute("data-product");
    const price = parseInt(button.getAttribute("data-price"));
    cart.push({ name, price });
    updateCart();
  });
});

function updateCart() {
  cartList.innerHTML = "";
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - Rp ${item.price.toLocaleString("id-ID")}`;
    cartList.appendChild(li);
  });
}

checkoutBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Keranjang kosong.");
    return;
  }
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  alert(`Total belanja Anda: Rp ${total.toLocaleString("id-ID")}`);
  cart.length = 0;
  updateCart();
});
