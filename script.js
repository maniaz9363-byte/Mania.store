// لیست ۱۵ محصول پوشاک
const products = [
    { id: 1, name: "شال گردن ", price: 750000, img: "images/15.jpg", desc: "بسیار گرم" },
    { id: 2, name: "کت خز ", price: 6000000, img: "images/1.jpg", desc: "مناسب با ترند سال و" },
    { id: 3, name: "پالتو زنانه ", price: 7000000, img: "images/2.jpg", desc: "گرم و با دوام " },
    { id: 4, name: "کت و شلوار ", price: 7000000, img: "images/3.jpg", desc: "مناسب هر فصل " },
    { id: 5, name: "کت و دامن ", price: 5000000, img: "images/4.jpg", desc: "پارچه درجه یک" },
    { id: 6, name: "کت چرمی ", price: 6000000, img: "images/5.jpg", desc: "چرم طبیعی ت" },
    { id: 7, name: "تیشرت سفید مردانه ", price: 1500000, img: "images/6.jpg", desc: "کاملا نخی " },
    { id: 8, name: "شلوار جین ", price: 4000000, img: "images/7.jpg", desc: "سنگشور شده " },
    { id: 9, name: "کفش ورزشی ", price: 8000000, img: "images/8.jpg", desc: "بسیار راحت " },
    { id: 10, name: "سوییشرت مردانه ", price: 2000000, img: "images/9.jpg", desc: "سبک و راحت " },
    { id: 11, name: "جلیقه ", price: 3000000, img: "images/10.jpg", desc: "دارای جیب " },
    { id: 12, name: "دستکش چرمی ", price: 1000000, img: "images/11.jpg", desc: "چرمی و خزدار " },
    { id: 13, name: "عینک افتابی ", price: 12000000, img: "images/12.jpg", desc: "پلاریزه ومحاقظ (uv) " },
    { id: 14, name: "عطر ", price: 15000000, img: "images/13.jpg", desc: "باپخش بوی بالا " },
    { id: 15, name: "کیف زنانه", price: 5500000, img: "images/14.jpg", desc: "جادار با بند بلند " },
];
// تابع نمایش سبد خرید با قابلیت حذف و تایید نهایی
function openCart() {
    if (cart.length === 0) {
        alert("سبد خرید شما فعلاً خالی است!");
        return;
    }

    let message = "لیست خرید شما:\n\n";
    let total = 0;

    cart.forEach((item, index) => {
        message += `${index + 1}. ${item.name} - ${item.price.toLocaleString()} تومان\n`;
        total += item.price;
    });

    message += `\n-------------------\nمجموع کل: ${total.toLocaleString()} تومان`;
    message += `\n\n✅ برای 'تایید نهایی' روی OK کلیک کنید.\n❌ برای 'حذف آخرین کالای اضافه شده' روی Cancel کلیک کنید.`;

    // نمایش پنجره تایید نهایی
    const result = confirm(message);

    if (result) {
        alert("سفارش شما با موفقیت تایید شد! ممنون از خرید شما.");
        cart = []; // خالی کردن سبد بعد از خرید
        document.getElementById('cart-count').innerText = "0";
    } else {
        // حذف آخرین کالا در صورت زدن دکمه Cancel
        if (cart.length > 0) {
            const removed = cart.pop();
            alert(`محصول "${removed.name}" از سبد حذف شد.`);
            document.getElementById('cart-count').innerText = cart.length;
        }
    }
}

let cart = [];
// نمایش محصولات در صفحه
const productGrid = document.getElementById('product-grid');
function renderProducts() {
    products.forEach(p => {
        productGrid.innerHTML += `
            <div class="product-card" onclick="openDetails(${p.id})">
                <img src="${p.img}" alt="${p.name}" style="width:100%">
                <h3>${p.name}</h3>
                <p>قیمت: ${p.price.toLocaleString()} تومان</p>
                <button onclick="addToCart(event, ${p.id})">افزودن به سبد</button>
            </div>
        `;
    });
}

function addToCart(event, id) {
    event.stopPropagation(); // برای اینکه وقتی دکمه را می‌زنیم، جزئیات باز نشود
    const product = products.find(p => p.id === id);
    cart.push(product);
    document.getElementById('cart-count').innerText = cart.length;
}

// برای شروع کار
renderProducts();
// نمایش سبد خرید
function openCart() {
    let cartContent = "لیست خرید شما:\n";
    let total = 0;
    cart.forEach((item, index) => {
        cartContent += `${index + 1}. ${item.name} - ${item.price.toLocaleString()} تومان\n`;
        total += item.price;
    });
    alert(cartContent + "\nمجموع کل: " + total.toLocaleString() + " تومان");
}

// نمایش جزئیات محصول
function openDetails(id) {
    const p = products.find(item => item.id === id);
    alert(`نام محصول: ${p.name}\nتوضیحات: ${p.desc}\nقیمت: ${p.price.toLocaleString()} تومان`);
}
// این کد را به انتهای فایل script.js، بعد از تمام کدهای قبلی اضافه کن

function openCart() {
    if (cart.length === 0) {
        alert("سبد خرید شما خالی است!");
        return;
    }

    let message = "🛒 لیست خرید شما:\n\n";
    let total = 0;

    cart.forEach((item, index) => {
        message += `${index + 1}. ${item.name} - ${item.price.toLocaleString()} تومان\n`;
        total += item.price;
    });

    message += `\n-------------------\n💰 مجموع کل: ${total.toLocaleString()} تومان`;
    message += `\n\n✅ برای 'تایید نهایی' روی OK کلیک کنید.\n❌ برای 'حذف آخرین کالا' روی Cancel کلیک کنید.`;

    const result = confirm(message);

    if (result) {
        alert("🎉 سفارش شما تایید شد! ممنون از خرید شما.");
        cart = []; 
        document.getElementById('cart-count').innerText = "0";
    } else {
        if (cart.length > 0) {
            const removed = cart.pop();
            alert(`🗑 محصول "${removed.name}" از سبد حذف شد.`);
            document.getElementById('cart-count').innerText = cart.length;
        }
    }
}
