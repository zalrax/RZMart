
const products = Array.from({length: 20}).map((_, i) => ({
    id: i+1,
    name: `Tas Wanita Elegan ${i+1}`,
    price: 20000 + (i * 1500),
    stock: 10 + i,
    rating: (4 + (i % 2)).toFixed(1),
    image: `https://via.placeholder.com/300x200?text=Tas+${i+1}`,
    category: i % 2 === 0 ? "Tas Selempang" : "Tas Ransel"
}));

const cart = [];

function renderProducts() {
    const container = document.getElementById("product-list");
    container.innerHTML = "";
    products.forEach(p => {
        container.innerHTML += `
        <div class="product">
            <img src="${p.image}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p class="price">Rp${p.price.toLocaleString("id-ID")}</p>
            <p>Stok: ${p.stock} | Rating: ${p.rating}⭐</p>
            <button onclick="addToCart(${p.id})">+ Keranjang</button>
        </div>`;
    });
}

function addToCart(id) {
    const prod = products.find(p => p.id === id);
    cart.push(prod);
    document.getElementById("cart-count").innerText = cart.length;
    alert(`Ditambahkan: ${prod.name}`);
}

// Auto render produk
renderProducts();

function sendOrder(e) {
  e.preventDefault();
  const name = document.getElementById("buyer-name").value;
  const wa = document.getElementById("buyer-wa").value;
  const address = document.getElementById("buyer-address").value;
  const location = document.getElementById("buyer-location").value;
  const payment = document.getElementById("buyer-payment").value;

  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  let shipping = 10000; // Simulasi ongkir flat 10rb
  if (location.toLowerCase().includes("jakarta")) shipping = 8000;
  if (location.toLowerCase().includes("papua")) shipping = 20000;

  const total = subtotal + shipping;

  let message = `*RZMart - Checkout Pesanan*\n\n`;
  message += `*Nama:* ${name}\n`;
  message += `*No WA:* ${wa}\n`;
  message += `*Alamat:* ${address}\n`;
  message += `*Lokasi:* ${location}\n`;
  message += `*Pembayaran:* ${payment}\n\n`;
  message += `*Daftar Belanja:*\n`;

  cart.forEach((item, i) => {
    message += `${i+1}. ${item.name} - Rp${item.price.toLocaleString("id-ID")}\n`;
  });

  message += `\n*Subtotal:* Rp${subtotal.toLocaleString("id-ID")}`;
  message += `\n*Ongkir:* Rp${shipping.toLocaleString("id-ID")}`;
  message += `\n*Total:* Rp${total.toLocaleString("id-ID")}`;

  const waURL = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
  window.open(waURL, "_blank");
}
