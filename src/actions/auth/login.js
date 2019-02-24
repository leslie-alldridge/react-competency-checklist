import axios from "axios";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

function requestLogin() {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false
  };
}

export function receiveLogin(user) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    user
  };
}

function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  };
}

export default function loginUser(creds) {
  console.log("hit");
  console.log(creds);

  return dispatch => {
    dispatch(requestLogin(creds));
    return axios
      .post("/login", creds)
      .then(response => {
        if (response.data.message !== "Authentication successful.") {
          dispatch(loginError(response.data.message));
          return Promise.reject(response.data.message);
        } else {
          dispatch(receiveLogin(response.data));
        }
      })
      .catch(err => dispatch(loginError(err)));
  };
}
