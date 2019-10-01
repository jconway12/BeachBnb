import {createStore, applyMiddleware} from 'redux';
// import {logger} from 'redux';
import RootReducer from '../reducers/root_reducer';
import thunk from '../middleware/thunk';
// import thunk from "redux-thunk";

const configureStore = (preloadedState = {}) => {
  return createStore(RootReducer, preloadedState, applyMiddleware(thunk));
}

export default configureStore;