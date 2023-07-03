import { addToCart, applyDiscount, clearCart, getCartItems, removeCartItem } from './cart.js';
import { products } from './product.js';

const productList = document.getElementById('product-list');
const cartItemsContainer = document.getElementById('cart-items');
const totalAmount = document.getElementById('total-amount');
const clearCartButton = document.getElementById('clear-cart');
const discountButton = document.getElementById('apply-discount');
const discountInput = document.getElementById('discount-input');

const createProductListItem = (product) => {
  const listItem = document.createElement('li');
  listItem.innerHTML = `
    <div class="product-name">${product.name}</div>
    <div class="product-price">$${product.price.toFixed(2)}</div>
    <div>
      <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
    </div>
  `;
  return listItem;
};

const displayProductList = () => {
  products.forEach(product => {
    const listItem = createProductListItem(product);
    productList.appendChild(listItem);
  });
};

const displayCartItems = () => {
  cartItemsContainer.innerHTML = '';
  let total = 0;

  getCartItems().forEach(item => {
    const { product, quantity } = item;
    const itemTotal = product.price * quantity;

    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <span>${product.name}</span>
      <div class="increase-decrease">
        <button class="decrease-quantity" data-id="${product.id}">-</button>
        <span>${quantity}</span>
        <button class="increase-quantity" data-id="${product.id}">+</button>
      </div>
      <div class="product-price">$${product.price.toFixed(2)}</div>
      <span>Total: $${itemTotal.toFixed(2)}</span>
      <button class="remove-item" data-id="${product.id}">Remove</button>
    `;

    total += itemTotal;
    cartItemsContainer.appendChild(cartItem);
  });

  totalAmount.textContent = total.toFixed(2);
};

const handleAddToCart = (productId) => {
  const product = products.find(prod => prod.id === productId);
  addToCart(product, 1);
  displayCartItems();
};

const handleIncreaseQuantity = (productId) => {
  const product = products.find(prod => prod.id === productId);
  addToCart(product, 1);
  displayCartItems();
};

const handleDecreaseQuantity = (productId) => {
  const product = products.find(prod => prod.id === productId);
  const cartItem = getCartItems().find(item => item.product.id === productId);

  if (cartItem.quantity > 1) {
    cartItem.quantity--;
    displayCartItems();
  }
};

const handleRemoveItem = (productId) => {
  removeCartItem(productId);
  displayCartItems();
};

const handleClearCart = () => {
  clearCart();
  displayCartItems();
};

const handleApplyDiscount = () => {
  const discountPercentage = parseInt(discountInput.value);
  applyDiscount(discountPercentage);
  displayCartItems();
};

document.addEventListener('DOMContentLoaded', () => {
  displayProductList();
  displayCartItems();
});

productList.addEventListener('click', (event) => {
  if (event.target.classList.contains('add-to-cart')) {
    const productId = parseInt(event.target.dataset.id);
    handleAddToCart(productId);
  }
});

cartItemsContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('increase-quantity')) {
    const productId = parseInt(event.target.dataset.id);
    handleIncreaseQuantity(productId);
  }

  if (event.target.classList.contains('decrease-quantity')) {
    const productId = parseInt(event.target.dataset.id);
    handleDecreaseQuantity(productId);
  }

  if (event.target.classList.contains('remove-item')) {
    const productId = parseInt(event.target.dataset.id);
    handleRemoveItem(productId);
  }
});

clearCartButton.addEventListener('click', handleClearCart);

discountButton.addEventListener('click', handleApplyDiscount);
