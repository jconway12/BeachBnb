import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { fetchListing, fetchListings, updateListing, createListing, deleteListing } from "./actions/listing_actions";

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  window.fetchListing = fetchListing;
  window.deleteListing = deleteListing;
  window.updateListing = updateListing;
  window.fetchListings = fetchListings;
  window.createListing = createListing;

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.dispatch = store.dispatch;
  window.getState = store.getState;


  ReactDOM.render(<Root store={store}/>, root);
})
