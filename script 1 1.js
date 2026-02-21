const menuItems = [
    {
        id: 1,
        name: "Cheese Burger",
        price: 120,
        img: "https://images.unsplash.com/photo-1550547660-d9450f859349"
    },
    {
        id: 2,
        name: "Pepperoni Pizza",
        price: 250,
        img: "https://tse2.mm.bing.net/th/id/OIP.Xq75T5BrGs5qCmlUpdCixgHaEK?pid=ImgDet&w=202&h=114&c=7&o=7&rm=3"
    },
    {
        id: 3,
        name: "Creamy Pasta",
        price: 180,
        img: "https://images.unsplash.com/photo-1525755662778-989d0524087e"
    },
    {
        id: 4,
        name: "Chicken Biryani",
        price: 220,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRANnMyPxd4yi2amdmsEMa39CtoZKrTWKAAAw&s"
    }
];

let cart = [];

const menuDiv = document.getElementById("menu");
const cartDiv = document.getElementById("cart");
const cartItems = document.getElementById("cart-items");
const totalSpan = document.getElementById("total");
const cartCount = document.getElementById("cart-count");

menuItems.forEach(item => {
    menuDiv.innerHTML += `
        <div class="col-md-3">
            <div class="card food-card">
                <img src="${item.img}" alt="${item.name}">
                <div class="card-body text-center">
                    <h5>${item.name}</h5>
                    <p class="price">₹${item.price}</p>
                    <button class="btn btn-primary w-100" onclick="addToCart(${item.id})">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `;
});

function addToCart(id) {
    const item = menuItems.find(i => i.id === id);
    cart.push(item);
    updateCart();
}

function updateCart() {
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        cartItems.innerHTML += `
            <li class="list-group-item d-flex justify-content-between">
                ${item.name}
                <span>
                    ₹${item.price}
                    <button class="btn btn-sm btn-danger ms-2" onclick="removeItem(${index})">✕</button>
                </span>
            </li>
        `;
    });

    totalSpan.textContent = total;
    cartCount.textContent = cart.length;
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

function toggleCart() {
    cartDiv.classList.toggle("show");
}
