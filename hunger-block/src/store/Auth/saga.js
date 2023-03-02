import * as types from "./types"
import { put, call, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import * as methods from "./apimethods/auth";


const STATUS_CODES =  {
    SUCCESS_OK: 200,
    SUCCESS_CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
}

export function* getPostListAsync(action) {
    // save the value of loader in reducer and disble enable it from here 
    // yield put(actions.enableLoader()); 

    const { status, data, error } = yield call(
      methods.getPostsList,
    //   action.token, // save the access token of user in reducer if required
    );
  
    if (status == STATUS_CODES.SUCCESS_OK) {
      yield put(actions.getPostsSuccess(data));
    //   yield put(actions.disableLoader({}));
    } else {
      yield put(actions.getPostsFail(data));
    //   yield put(actions.disableLoader({}));
    }

    // just for testing the reducer
    // const response = yield call(
    //   methods.getPostsList,
    // //   action.token, // save the access token of user in reducer if required
    // );
    //   if (response) {
    //   yield put(actions.getPostsSuccess(response));
    // } else {
    //   yield put(actions.getPostsFail(response));
    // }
  }
  

  export default function* AuthSaga() {
    yield takeLatest(types.GET_POST_REQUEST, getPostListAsync);
  }