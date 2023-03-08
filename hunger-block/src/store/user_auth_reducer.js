import React from "react";

const initialState = {
  user_auth: false,
  user_data: null,
  restaurant_data: null,
};
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_USER_DATA":
      return { ...state, user_data: payload.data, user_auth: payload.auth };
    case "LOGOUT_USER":
      return {
        ...state,
        user_data: null,
        restaurant_data: null,
        user_auth: false,
      };
    // case "SET_REST_DATA":
    //   return {
    //     ...state,
    //     restaurant_data: payload.data,
    //     user_auth: payload.auth,
    //   };
    default:
      return state;
  }
};

export default reducer;
