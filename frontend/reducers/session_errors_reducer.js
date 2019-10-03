import {RECEIVE_SESSION_ERRORS, RESET_SESSION_ERRORS} from '../actions/session_actions';

const SessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS: {
      return [action.errors.responseJSON[0]];
    }
    case RESET_SESSION_ERRORS: {
      return [];
    }
    default:
      return state;
  }
};

export default SessionErrorsReducer;
