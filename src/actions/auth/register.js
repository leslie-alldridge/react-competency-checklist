//actions go here
import axios from "axios";

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

function requestRegister() {
  return {
    type: REGISTER_REQUEST,
    isFetching: true,
    isAuthenticated: false
  };
}

export function receiveRegister(user) {
  return {
    type: REGISTER_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    user
  };
}

function registerError(message) {
  return {
    type: REGISTER_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  };
}

export function registerUser(creds) {
  console.log("hit");
  console.log(creds);

  return dispatch => {
    dispatch(requestRegister(creds));
    return axios
      .post("/auth/register", creds)
      .then(response => {
        if (response.data.message !== "Authentication successful.") {
          dispatch(registerError(response.data.message));
          return Promise.reject(response.data.message);
        } else {
          dispatch(receiveRegister(response.data));
        }
      })
      .catch(err => dispatch(registerError(err)));
  };
}
