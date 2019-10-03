import {RECEIVE_LISTING, RECEIVE_LISTINGS, REMOVE_LISTING} from '../actions/listing_actions';

const ListingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_LISTINGS: {
      return Object.assign({}, action.listings);
    }
    case RECEIVE_LISTING: {
      return Object.assign({}, state, {[action.listing.id]: action.listing});
    }
    case REMOVE_LISTING: {
      const newState = Object.assign({}, state);
      delete newState[action.listingId];
      return Object.assign({}, newState);
    }
    default: 
    return state;
  }
}

export default ListingsReducer;