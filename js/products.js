import Product from '../js/Product.js';

const allButtons = document.querySelectorAll('.add-to-cart-btn');

allButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const card = event.target.closest('.product-card');
    const productNameElement = card.querySelector('.product-name');
    const productPriceElement = card.querySelector('.price');
    const productName = productNameElement.textContent;
    const productPrice = productPriceElement.textContent;
    const product = new Product(productName, parseFloat(productPrice));
    product.addToCart();
  });
});
