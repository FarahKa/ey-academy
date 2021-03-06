import { userConstants } from '../constants';
import { AsyncStorage } from 'react-native';

let user = AsyncStorage.getItem('user');
const initialState = user ? { loggedIn: false, user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case userConstants.LOGIN_SUCCESS:
      console.log("reducer :changing the user to "+ action.user)
      return {
        loggedIn: true,
        user: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state
  }
}