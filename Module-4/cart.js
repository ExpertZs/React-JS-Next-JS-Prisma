const cart = [];

export const addToCart = (product, quantity) => {
  const cartItem = cart.find(item => item.product.id === product.id);

  if (cartItem) {
    cartItem.quantity += quantity;
  } else {
    cart.push({ product, quantity });
  }
};

export const removeCartItem = (productId) => {
  const cartItemIndex = cart.findIndex(item => item.product.id === productId);

  if (cartItemIndex !== -1) {
    cart.splice(cartItemIndex, 1);
  }
};

export const clearCart = () => {
  cart.length = 0;
};

export const applyDiscount = (discountPercentage) => {
  const totalAmount = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  const discountedAmount = totalAmount * (1 - discountPercentage / 100);

  const totalDiscount = totalAmount - discountedAmount;
  const discountPerItem = totalDiscount / cart.length;

  cart.forEach(item => {
    item.product.price -= discountPerItem / item.quantity;
  });
};


export const getCartItems = () => {
  return cart;
};
