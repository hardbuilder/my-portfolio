// filepath: Automated-Checkout-System/CheckoutUI/script.js

document.addEventListener('DOMContentLoaded', function() {
    const addProductForm = document.getElementById('add-product-form');
    const productList = document.getElementById('product-list');

    // Function to add a new product
    addProductForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const productName = document.getElementById('product-name').value;
        const productPrice = document.getElementById('product-price').value;

        if (productName && productPrice) {
            const newProduct = document.createElement('li');
            newProduct.textContent = `${productName} - $${productPrice}`;
            productList.appendChild(newProduct);

            // Clear the form
            addProductForm.reset();
        } else {
            alert('Please fill in both fields.');
        }
    });

    // Function to handle checkout
    document.getElementById('checkout-button').addEventListener('click', function() {
        const products = Array.from(productList.children).map(item => item.textContent);
        if (products.length > 0) {
            alert(`Checking out the following products:\n${products.join('\n')}`);
            // Here you can add the logic to process the checkout
        } else {
            alert('No products to checkout.');
        }
    });
});