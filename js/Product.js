class Product {
  constructor(productName, productPrice) {
    this.productName = productName;
    this.productPrice = productPrice;
  }

  addToCart() {
    const key = 'productSession';
    const cartLocalStorage = localStorage.getItem(key);

    if (!cartLocalStorage) {
      const cart = [];
      const product = {
        productName: this.productName,
        productPrice: this.productPrice,
      };
      cart.push(product);

      const cartToSave = JSON.stringify(cart);

      localStorage.setItem(key, cartToSave);

      alert('Producto agregado al carrito.');
    } else {
      const product = {
        productName: this.productName,
        productPrice: this.productPrice,
      };
      const cartLocalStorage = localStorage.getItem(key);
      const cart = JSON.parse(cartLocalStorage);
      cart.push(product);
      const cartToSave = JSON.stringify(cart);

      localStorage.setItem(key, cartToSave);

      alert('Producto agregado al carrito.');
    }
  }
}

export default Product;
