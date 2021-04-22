const initialState = {
   cart: JSON.parse(localStorage.getItem("cart")) || []
};

const cartReducer = (state = initialState, action) => {

   let cart = state.cart;

   switch (action.type) {

      case 'ADD_TO_CART':

         cart.push(action.payload);
         console.log(cart)
         return {
            ...state,
            cart: cart
         };
      case 'UPDATE_CART_QUANTITY':

         let item = cart.find(item => item.product.id == action.payload.productId);
         let newCart = cart.filter(item => item.product.id != action.payload.productId);
         item.quantity = action.payload.quantity;
         newCart.push(item);
         console.log(newCart)
         
         return {
            ...state,
            cart: newCart
         };

      case 'REMOVE_FROM_CART':
         console.log(cart)
         return {
            ...state,
            cart: cart.filter(item => item.product.id != action.payload.productId)
         };
      default:
         return state;
   }
};

export default cartReducer;