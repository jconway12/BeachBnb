import {RECEIVE_SESSION_ERRORS, RESET_SESSION_ERRORS} from '../actions/session_actions';

const SessionErrorsReducer = (state = [], action) => {
  // debugger
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS: {
      if (action.errors.responseJSON) {
      return action.errors.responseJSON;
      } else {
        return ["Invalid Crednetials"];
      }
    }
    case RESET_SESSION_ERRORS: {
      return [];
    }
    default:
      return state;
  }
};

export default SessionErrorsReducer;
