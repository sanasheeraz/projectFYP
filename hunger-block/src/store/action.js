export const addCustomer = (payload) => {
  return { type: "GET_POST_SUCCESS", payload };
};
export const showBooks = () => {
  return { type: "LIST" };
};
export const getPosts = () => {
  return { type: "GET_POST" };
};
export const getPostsSuccess = (payload) => {
  console.log(
    "🚀 ~ file: actions.js ~ line 12 ~ getPostsSuccess ~ payload",
    payload
  );

  return { type: "GET_POST_SUCCESS", payload };
};
export const getPostsFail = (payload) => {
  return { type: "GET_POST_FAIL", payload };
};

function addToCart(item) {
  return {
    type: "ADD_TO_CART",
    payload: item,
  };
}

function updateQuantity(itemId, newQuantity) {
  return {
    type: "UPDATE_QUANTITY",
    payload: { itemId, newQuantity },
  };
}

function removeItem(itemId) {
  return {
    type: "REMOVE_ITEM",
    payload: itemId,
  };
}