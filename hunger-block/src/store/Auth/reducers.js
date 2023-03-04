import * as types from "./types"

export const initialState = {
  posts: null,
  error: null,
}

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {

      case types.GET_POST_REQUEST:
        return {
          ...state,
          error : null
        }
   
      case types.GET_POST_SUCCESS:
        return {
          ...state,
          posts : action.payload,
          error : null
        }

      case types.GET_POST_FAIL:
        return {
          ...state,
          error : action.response
        }

    default:
      return state
  }
};

export default AuthReducer;