import {RECEIVE_SESSION_ERRORS} from '../actions/session_actions';

const SessionErrorsReducer = (state = [], action) => {
  // debugger
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS: {
      return [action.errors.responseText];
    }
    default:
      return state;
  }
};

export default SessionErrorsReducer;

// LOOK AT BENCHBNB SOLUTION TO HOW YOU GOT THE RIGHT TEXT