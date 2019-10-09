import { combineReducers } from "redux";
import SessionErrorsReducer from './session_errors_reducer'
import ListingErrorsReducer from "./listing_errors_reducer";
import ResErrorsReducer from './res_errors_reducer';
import RevErrorsReducer from './review_errors_reducer';


export default combineReducers({
  sessionErrors: SessionErrorsReducer,
  listingErrors: ListingErrorsReducer,
  resErrors: ResErrorsReducer,
  revErrors: RevErrorsReducer
});
