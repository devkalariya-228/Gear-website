// Initialize cart
let cart = [];
let cartCount = 0;
let totalPrice = 0;

// Add event listeners to all "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const productName = e.target.getAttribute('data-name');
        const productPrice = parseFloat(e.target.getAttribute('data-price'));

        addToCart(productName, productPrice);
    });
});

// Add to Cart function
function addToCart(name, price) {
    // Update cart
    cart.push({ name, price });
    cartCount++;
    totalPrice += price;

    // Update cart badge and modal
    document.getElementById('cartCount').innerText = cartCount;
    updateCartModal();
}

// Update Cart Modal
function updateCartModal() {
    const cartItemsList = document.getElementById('cartItems');
    cartItemsList.innerHTML = ''; // Clear previous items

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.innerHTML = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsList.appendChild(li);
    });

    document.getElementById('cartTotal').innerText = totalPrice.toFixed(2);
}

// Show cart when the cart button is clicked
document.getElementById('cartButton').addEventListener('click', () => {
    const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
    cartModal.show();
});
