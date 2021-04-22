export const addToCart = (product,quantity) => {

    return {
        type: 'ADD_TO_CART',
        payload: {
            product,
            quantity:quantity
        }
    }
};

export const removeFromCart = (productId) => {

    return {
        type: 'REMOVE_FROM_CART',
        payload: {
            productId: productId
        }
    }
};

export const updateCartQuantity = (productId, quantity) => {

  return {
      type: 'UPDATE_CART_QUANTITY',
      payload: {
          productId,
          quantity: quantity
      }
  }
};