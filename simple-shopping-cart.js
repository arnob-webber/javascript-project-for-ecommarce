let cart = [];

function addToCart(product, price) {
    let item = { product, price, quantity: 1 };
    let found = cart.find(item => item.product === product);

    if (found) {
        found.quantity++;
    } else {
        cart.push(item);
    }
    updateCart();
}

function updateCart() {
    let total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    console.log("Cart total: $" + total);
}

function removeFromCart(product) {
    cart = cart.filter(item => item.product !== product);
    updateCart();
}
