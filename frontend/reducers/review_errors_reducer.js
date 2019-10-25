import {RECEIVE_REV_ERRORS} from '../actions/review_actions';

const RevErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_REV_ERRORS: {
      if (action.errors) {
        return action.errors.responseJSON;
      } else {
        return state;
      }
    }
    default: 
    return state;
  }
}

export default RevErrorsReducer;