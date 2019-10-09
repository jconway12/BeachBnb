import {RECEIVE_REV_ERRORS} from '../actions/review_actions';

const RevErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_REV_ERRORS: {
      return action.errors.responseJSON;
    }
    default: 
    return state;
  }
}

export default RevErrorsReducer;