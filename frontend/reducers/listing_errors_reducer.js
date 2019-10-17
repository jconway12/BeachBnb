import {
  RECEIVE_LISTING_ERRORS,
  REMOVE_LISTING_ERRORS
} from "../actions/listing_actions";

const ListingErrorsReducer = (state = [], action) => {
  // debugger
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LISTING_ERRORS: {
      return [action.errors.responseJSON[0]];
    }
    case REMOVE_LISTING_ERRORS: {
      return [];
    }
    default:
      return state;
  }
};

export default ListingErrorsReducer;
