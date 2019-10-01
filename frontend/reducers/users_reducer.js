import {
  RECEIVE_CURRENT_USER
} from "../actions/session_actions";

const UsersReducer = (state = {}, action) => {
  // debugger
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_CURRENT_USER: {
        const newState = Object.assign({}, state);
        newState[action.user.id] = action.user 
        return Object.assign({}, newState);
      }
      default:
        return state;
    }
}

export default UsersReducer;