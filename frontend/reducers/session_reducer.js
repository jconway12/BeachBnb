import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session_actions';

const _nullState = {
  id: null
}

const SessionReducer = (state = _nullState, action) => {
  // debugger
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER: {
      return { id: action.user.id };
    }
    case LOGOUT_CURRENT_USER: {
      return _nullState;
    }
    default:
      return state;
  }
};

export default SessionReducer;
