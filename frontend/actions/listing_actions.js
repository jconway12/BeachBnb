import * as ListingAPI from '../util/listing_api_util';
export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS';
export const RECEIVE_LISTING = 'RECEIVE_LISTING';
export const REMOVE_LISTING = 'REMOVE_LISTING';
export const RECEIVE_LISTING_ERRORS = 'RECEIVE_LISTING_ERRORS';
export const REMOVE_LISTING_ERRORS = 'REMOVE_LISTING_ERRORS';

const receiveListing = (listing) => {
  return {
    type: RECEIVE_LISTING,
    listing
  }
}

const receiveListings = listings => {
  return {
    type: RECEIVE_LISTINGS,
    listings
  };
}

const removeListing = id => {
  return {
    type: RECEIVE_LISTINGS,
    listingId: id
  };
}

export const fetchListings = () => dispatch => {
  // debugger
  return ListingAPI.fetchListings().then(listings => {dispatch(receiveListings(listings))},
   errors => {dispatch({ type: RECEIVE_LISTING_ERRORS, errors })});
}

export const fetchListing = (id) => dispatch => {
  return ListingAPI.fetchListing(id).then(listing => {dispatch(receiveListing(listing))},
   errors => {dispatch({ type: RECEIVE_LISTING_ERRORS, errors })});
}

export const createListing = (listing) => dispatch => {
  return ListingAPI.createListing(listing).then(listing => {dispatch(receiveListing(listing))},
   errors => {dispatch({ type: RECEIVE_LISTING_ERRORS, errors })});
}

export const updateListing = (listing) => dispatch => {
  return ListingAPI.updateListing(listing).then(listing => {dispatch(receiveListing(listing))},
   errors => {dispatch({ type: RECEIVE_LISTING_ERRORS, errors })});
}

export const deleteListing = (id) => dispatch => {
  return ListingAPI.deleteListing(id).then(id => {dispatch(removeListing(id))},
   errors => {dispatch({ type: RECEIVE_LISTING_ERRORS, errors })});
}

export const getCitiesFromListings = (listings) => {
  const cities = [];
  for(let i = 0; i < listings.length; i++) {
    if(!cities.includes(listings[i].city)) {
      cities.push(listings[i].city);
    }
  }
  return cities;
}

