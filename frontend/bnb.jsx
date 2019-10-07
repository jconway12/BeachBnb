import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { fetchRes, fetchReservations, updateRes, deleteRes, createRes } from "./actions/reservation_actions";

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  window.fetchReservations = fetchReservations;
  window.fetchRes = fetchRes;
  window.createRes = createRes;
  window.updateRes = updateRes;
  window.deleteRes = deleteRes;

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
