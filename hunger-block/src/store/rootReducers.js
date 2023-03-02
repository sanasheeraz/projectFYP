// combineReducers come from redux that used for combining reducers that we just made.
import { combineReducers } from 'redux'

// Reducers
import AuthReducer from './Auth/reducers'

export default combineReducers({
    AuthReducer,
    // Here you can registering another reducers.
})