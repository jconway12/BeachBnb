export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RESET_SESSION_ERRORS = 'RESET_SESSION_ERRORS';

import * as SessionApiUtil from '../util/session_api_util';

export const login = user => dispatch => {
  return SessionApiUtil.login(user).then(
    user => {dispatch({ type: RECEIVE_CURRENT_USER, user })}, 
  errors => {dispatch({ type: RECEIVE_SESSION_ERRORS, errors })});
}

export const signup = user => dispatch => {
  // debugger
  return SessionApiUtil.signup(user).then(
    user => {dispatch({ type: RECEIVE_CURRENT_USER, user })},
   errors => {dispatch({ type: RECEIVE_SESSION_ERRORS, errors })});
}

export const logout = () => dispatch => {
  return SessionApiUtil.logout().then(() => dispatch({ type: LOGOUT_CURRENT_USER }));
}

export const resetErrors = () => {
  return {
    type: RESET_SESSION_ERRORS
  }
}