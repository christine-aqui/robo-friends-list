import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from "./constants.js";

export const setSearchField = text => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

// HOF Alert
// a function that returns a function
export const requestRobots = () => (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json()) // convert res to json
    .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }));
};


// a middleware is just a tunnle that an action goes through...


// redux out of the box would not understand the requestRobots function as it returns a function and not the expected object.
// by adding **thunkMiddleware from "redux-thunk"** we are now listening to actions. when requestRobots is triggered. redux-thunk will give dispatch for functions to run.