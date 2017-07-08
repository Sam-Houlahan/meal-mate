export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

import LoginAuth0 from  '../components/LoginAuth0'

export function requestLogin () {
  return {
    type: LOGIN_REQUEST,
    isAuthenticated: false
  }
}

export function receiveLogin (user) {
  return {
    type: LOGIN_SUCCESS,
    isAuthenticated: true,
    user
  }
}
