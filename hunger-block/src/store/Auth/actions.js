import * as types from "./types"


export const getPostsRequest = (/*token*/) => { // you can remove token according to your need
    return {
        type: types.GET_POST_REQUEST,
        // token
    }
}

export const getPostsSuccess = (payload) =>{
    return {
        type: types.GET_POST_SUCCESS,
        payload
    }
}

export const getPostsFail = (payload) =>{
    return {
        type: types.GET_POST_FAIL, 
        payload
    }

}