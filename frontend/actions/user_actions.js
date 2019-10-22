export const RECEIVE_USER = 'RECEIVE_USER';
import * as UserUtil from '../util/user_api_util';

export const fetchUser = id => dispatch => {
  return UserUtil.fetchUser(id).then(user => {dispatch({type: RECEIVE_USER, user})});
}

export const updateUser = (formData, id) => dispatch => {
  return UserUtil.updateUser(formData, id).then(user => {dispatch({type: RECEIVE_USER, user})});
}