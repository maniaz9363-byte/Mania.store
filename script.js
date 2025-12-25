const products = [
    { id: 1, name: "شال گردن", price: 750000, image: "images/p15.jpg", description: "بسیار گرم" },
    { id: 2, name: "کت خز", price: 6000000, image: "images/p1.jpg", description: "مناسب با ترند سال" },
    { id: 3, name: "پالتو زنانه", price: 7000000, image: "images/p2.jpg", description: "گرم و با دوام" },
    { id: 4, name: "کت و شلوار", price: 7000000, image: "images/p3.jpg", description: "مناسب هر فصل" },
    { id: 5, name: "کت و دامن", price: 5000000, image: "images/p4.jpg", description: "پارچه درجه یک" },
    { id: 6, name: "کت چرمی", price: 6000000, image: "images/p5.jpg", description: "چرم طبیعی" },
    { id: 7, name: "تیشرت سفید مردانه", price: 1500000, image: "images/p6.jpg", description: "کاملا نخی" },
    { id: 8, name: "شلوار جین", price: 4000000, image: "images/p7.jpg", description: "سنگشور شده" },
    { id: 9, name: "کفش ورزشی", price: 8000000, image: "images/p8.jpg", description: "بسیار راحت" },
    { id: 10, name: "سوییشرت مردانه", price: 2000000, image: "images/p9.jpg", description: "سبک و راحت" },
    { id: 11, name: "جلیقه", price: 3000000, image: "images/p10.jpg", description: "دارای جیب" },
    { id: 12, name: "دستکش چرمی", price: 1000000, image: "images/p11.jpg", description: "چرمی و خزدار" },
    { id: 13, name: "عینک آفتابی", price: 1200000, image: "images/p12.jpg", description: "پلاریزه و محافظ (uv)" },
    { id: 14, name: "عطر", price: 15000000, image: "images/p13.jpg", description: "با پخش بوی بالا" },
    { id: 15, name: "کیف زنانه", price: 5500000, image: "images/p14.jpg", description: "جادار با بند بلند" }
];
let cart = [];

const productsDiv = document.getElementById("products");
const cartCount = document.getElementById("cart-count");
const cartModal = document.getElementById("cart-modal");
const cartItems = document.getElementById("cart-items");
const totalPrice = document.getElementById("total-price");

const productModal = document.getElementById("product-modal");
const detailName = document.getElementById("detail-name");
const detailImage = document.getElementById("detail-image");
const detailDesc = document.getElementById("detail-desc");
const detailPrice = document.getElementById("detail-price");

products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
        <img src="${product.image}">
        <h3>${product.name}</h3>
        <p>${product.price} تومان</p>
        <button onclick="showProduct(${product.id})">
            مشاهده جزئیات
        </button>
    `;
    productsDiv.appendChild(div);
});
function showProduct(id) {
    const product = products.find(p => p.id === id);

    detailName.innerText = product.name;
    detailImage.src = product.image;
    detailDesc.innerText = product.description;
    detailPrice.innerText = product.price;

    document.getElementById("add-btn").onclick = function () {
        addToCart(id);
    };

    productModal.classList.remove("hidden");
}

function closeProduct() {
    productModal.classList.add("hidden");
}
function addToCart(id) {
    const product = products.find(p => p.id === id);
    const item = cart.find(i => i.id === id);

    if (item) {
        item.qty++;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    updateCart();

    // سبد خرید باز شود
    cartModal.classList.remove("hidden");
}

function updateCart() {
    cartItems.innerHTML = "";
    let total = 0;
    let count = 0;

    cart.forEach(item => {
        total += item.price * item.qty;
        count += item.qty;

        cartItems.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}">
                <div>
                    <h4>${item.name}</h4>
                    <p>${item.qty} × ${item.price}</p>
                    <button onclick="removeItem(${item.id})">حذف</button>
                </div>
            </div>
        `;
    });

    cartCount.innerText = count;
    totalPrice.innerText = total;
}

function removeItem(id) {
    cart = cart.filter(i => i.id !== id);
    updateCart();
}

document.getElementById("cart-icon").onclick = () => {
    cartModal.classList.remove("hidden");
};

function closeCart() {
    cartModal.classList.add("hidden");
}
function confirmOrder() {
    if (cart.length === 0) {
        alert("سبد خرید خالی است");
        return;
    }

    alert("✅ سفارش شما با موفقیت ثبت شد");

    // خالی کردن سبد
    cart = [];
    updateCart();
    cartModal.classList.add("hidden")
}
