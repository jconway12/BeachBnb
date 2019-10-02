import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { login, signup, logout } from "./actions/session_actions";

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  let store;
  // debugger
  if (window.currentUser) {
    // debugger
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    // debugger
    store = configureStore();
  }

  window.login = login;
  window.logout = logout;
  window.signup = signup;
  window.dispatch = store.dispatch;
  window.getState = store.getState;

  ReactDOM.render(<Root store={store}/>, root);
})
