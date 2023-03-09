import React from "react";

const initialState = {
  rest_auth: false,
  rest_data: null,
};
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_REST_DATA":
      return { ...state, rest_data: payload.data, rest_auth: payload.auth };
    case "LOGOUT_REST":
      return {
        ...state,
        rest_data: null,
        rest_auth: false,
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
