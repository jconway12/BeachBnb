import { combineReducers } from "redux";
import UsersReducer from './users_reducer';
import ListingsReducer from './listings_reducer';
import ReservationsReducer from './reservations_reducer';
import ReviewsReducer from './reviews_reducer';

export default combineReducers({
  users: UsersReducer,
  listings: ListingsReducer,
  reservations: ReservationsReducer,
  reviews: ReviewsReducer
});
