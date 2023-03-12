const initialState = {
  cartItems: [],
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case "UPDATE_QUANTITY":
    // Implement logic to update the quantity of an item in the cart
    case "REMOVE_ITEM":
    // Implement logic to remove an item from the cart
    default:
      return state;
  }
}
export default cartReducer;