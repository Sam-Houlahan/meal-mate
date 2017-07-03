import {LOGIN_REQUEST, LOGIN_SUCCESS} from '../actions/login'

const initialState = {
	isFetching: false,
	token: null
}

export default function auth (state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        isFetching: true,
        isAuthenticated: false
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: window.localStorage.getItem('auth0IdToken'),
        isFetching: false,
        isAuthenticated: true,
        user: action.user
      }
  }
}
