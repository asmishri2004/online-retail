const products = [
    { id: 1, name: 'Laptop', price: 70000 },
    { id: 2, name: 'Phone', price: 30000 },
    { id: 3, name: 'Headphone', price: 10000 },
    { id: 4, name: 'speaker', price: 5000 }
    // Add more products here
];

const productList = document.getElementById('product-list');
const cartIcon = document.querySelector('.cart-icon');
const cartModal = document.getElementById('cart-modal');
const cartItems = document.getElementById('cart-items');
const loginButton = document.getElementById('loginButton');
const registerButton = document.getElementById('registerButton');
const modalBg = document.getElementById('modalBg');
const authModal = document.getElementById('authModal');
const closeModal = document.getElementById('closeModal');
const authForm = document.getElementById('authForm');
const authModalHeading = document.querySelector('#authModal h2');

loginButton.addEventListener('click', () => openModal('Login'));
registerButton.addEventListener('click', () => openModal('Register'));
closeModal.addEventListener('click', closeModalFunc);
modalBg.addEventListener('click', closeModalFunc);

function openModal(type) {
    authModalHeading.textContent = type;
    modalBg.style.display = 'flex';
}

function closeModalFunc() {
    modalBg.style.display = 'none';
    clearFormFields();
}

authForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // Handle login or registration logic here
    closeModalFunc();
    clearFormFields();
});

function clearFormFields() {
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
}

const cart = [];

products.forEach(product => {
    const productItem = document.createElement('div');
    productItem.classList.add('product-item');
    productItem.innerHTML = `
        <h3>${product.name}</h3>
        <p>Price: ₹${product.price}</p>
        <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        <button class="buy-now" data-id="${product.id}">Buy Now</button>
    `;
    productList.appendChild(productItem);

    const addToCartButton = productItem.querySelector('.add-to-cart');
    addToCartButton.addEventListener('click', addToCart);

    const buyNowButton = productItem.querySelector('.buy-now');
    buyNowButton.addEventListener('click', buyNow);
});

function buyNow(event) {
    const productId = parseInt(event.target.getAttribute('data-id'));
    const product = products.find(item => item.id === productId);

    if (product) {
        alert(`Buying ${product.name} for ₹${product.price}`);
    }
}


function addToCart(event) {
    const productId = parseInt(event.target.getAttribute('data-id'));
    const product = products.find(item => item.id === productId);

    if (product) {
        cart.push(product);
        updateCartCount();
        updateCartDisplay();
    }
}

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    cartCount.textContent = cart.length;
}

function updateCartDisplay() {
    cartItems.innerHTML = '';
    cart.forEach(product => {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${product.name} -₹${product.price}`;
        cartItems.appendChild(cartItem);
    });
}

cartIcon.addEventListener('click', () => {
    cartModal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

// Add event listeners and logic for moving between steps, form validation, etc.

// Example: Move to the user information step
document.getElementById('nextToUserInfo').addEventListener('click', () => {
    // Add form validation logic here if needed
    showUserInfoStep();
});
// main.js
function openUserProfile() {
    // Redirect to the user profile page (profile.html)
    window.location.href = 'profile.html';
}
function showAddToCartMessage() {
    const addToCartMessage = document.createElement('div');
    addToCartMessage.className = 'add-to-cart-message';
    addToCartMessage.textContent = 'Added to Cart';
    document.body.appendChild(addToCartMessage);

    setTimeout(() => {
        addToCartMessage.style.opacity = '0';
        setTimeout(() => {
            addToCartMessage.remove();
        }, 500);
    }, 2000);
}

function addToCart(event) {
    const productId = parseInt(event.target.getAttribute('data-id'));
    const product = products.find(item => item.id === productId);

    if (product) {
        cart.push(product);
        updateCartCount();
        updateCartDisplay();
        showAddToCartMessage();
    }
}
// Check if the user is already logged in
const loggedInUser = localStorage.getItem('loggedInUser');
if (loggedInUser) {
    // Hide login and registration buttons
    document.getElementById('loginButton').style.display = 'none';
    document.getElementById('registerButton').style.display = 'none';
    // Show user profile button and welcome message
    document.querySelector('.profile-icon').style.display = 'block';
    document.querySelector('h1').textContent = 'Welcome, ' + loggedInUser;
}

// Add an event listener to the login/registration form
document.getElementById('authForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // In a real-world scenario, you'd validate the credentials and check them against a database.
    // Here, we'll use a simple example with hardcoded user data for demonstration purposes.
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Login
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        localStorage.setItem('loggedInUser', user.name);
        location.reload(); // Refresh the page to reflect the logged-in state
    } else {
        alert('Invalid email or password. Please try again.');
    }
});

// Registration
document.getElementById('registerButton').addEventListener('click', function () {
    // Show the registration form
    document.getElementById('authModal').style.display = 'block';
});

// Logout
document.querySelector('.profile-icon').addEventListener('click', function () {
    localStorage.removeItem('loggedInUser');
    location.reload(); // Refresh the page to reflect the logged-out state
});

