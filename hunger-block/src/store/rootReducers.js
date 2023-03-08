// combineReducers come from redux that used for combining reducers that we just made.
import { combineReducers } from "redux";

// Reducers
import AuthReducer from "./Auth/reducers";
import user_auth_reducer from "./user_auth_reducer";
import cartReducer from "./cartReducer";

export default combineReducers({
  AuthReducer,
  user_auth: user_auth_reducer,
  cartReducer,
  // Here you can registering another reducers...
  //ab ap kr lein.....
});
