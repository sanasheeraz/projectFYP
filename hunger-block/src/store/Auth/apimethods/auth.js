

// from here we will call our api and return the response 
export function getPostsList(token) {
    const path = ""; // add here path of the API URL
    return Api(path, null, 'get', token);

    // for testing the reducer
    // return { title:"test post"}
  }
