/*
File: complexCode.js
Content: Complex JavaScript Code Example
*/

// This complex JavaScript code demonstrates a custom implementation of a shopping cart system

// Define global variables for products, cart, and totals
let products = [{
    id: 1,
    name: 'Product 1',
    price: 10.99
}, {
    id: 2,
    name: 'Product 2',
    price: 19.99
}, {
    id: 3,
    name: 'Product 3',
    price: 5.99
}];

let cart = [];

let subtotal = 0;
let tax = 0;
let total = 0;

// Function to add a product to the cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCartTotals();
        console.log(`${product.name} added to cart!`);
    } else {
        console.log('Product not found!');
    }
}

// Function to remove a product from the cart
function removeFromCart(productId) {
    const index = cart.findIndex(p => p.id === productId);
    if (index !== -1) {
        const product = cart.splice(index, 1)[0];
        updateCartTotals();
        console.log(`${product.name} removed from cart!`);
    } else {
        console.log('Product not found in cart!');
    }
}

// Function to calculate cart totals
function updateCartTotals() {
    subtotal = cart.reduce((sum, product) => sum + product.price, 0);
    tax = calculateTax(subtotal);
    total = subtotal + tax;
}

// Function to calculate tax based on subtotal
function calculateTax(subtotal) {
    const taxRate = 0.07;
    return subtotal * taxRate;
}

// Function to display the cart
function displayCart() {
    console.log('--------------');
    console.log('Shopping Cart');
    console.log('--------------');
    cart.forEach((product, index) => {
        console.log(`${index + 1}) ${product.name} - $${product.price.toFixed(2)}`);
    });
    console.log('--------------');
    console.log(`Subtotal: $${subtotal.toFixed(2)}`);
    console.log(`Tax: $${tax.toFixed(2)}`);
    console.log(`Total: $${total.toFixed(2)}`);
}

// Simulate adding products to the cart
addToCart(1);
addToCart(2);
addToCart(3);

// Simulate removing a product from the cart
removeFromCart(2);

// Display the final cart
displayCart();

// Output:
// Product 1 added to cart!
// Product 2 added to cart!
// Product 3 added to cart!
// Product 2 removed from cart!
// --------------
// Shopping Cart
// --------------
// 1) Product 1 - $10.99
// 2) Product 3 - $5.99
// --------------
// Subtotal: $16.98
// Tax: $1.19
// Total: $18.17

// Note: This code is a simplified example and does not include error handling or user interaction. It serves to demonstrate a complex structure and logic behind a shopping cart system.