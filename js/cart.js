document.addEventListener('DOMContentLoaded', () => {
  const key = 'productSession';
  const itemsListContainer = document.getElementById('cart-items-list');
  const totalElement = document.getElementById('cart-total');

  const cartData = localStorage.getItem(key) || '[]';
  const cart = JSON.parse(cartData);

  let total = 0;

  if (cart.length === 0) {
    itemsListContainer.innerHTML = '<p>Tu carrito está vacío.</p>';
    totalElement.textContent = '$0.00';
    return;
  }

  cart.forEach((item) => {
    total += item.productPrice;

    const itemHTML = `
            <div class="cart-item">
              <div class="item-details">
                <h3>${item.productName}</h3>
              </div>
              <div class="item-price">$${item.productPrice.toFixed(2)}</div>
            </div>
          `;

    itemsListContainer.innerHTML += itemHTML;
  });

  totalElement.textContent = `$${total.toFixed(2)}`;
});
