import {combineReducers} from 'redux';
import EntitiesReducer from './entities_reducer'
import ErrorsReducer from "./errors_reducer";
import UiReducer from "./ui_reducer";
import SessionReducer from "./session_reducer";


export default combineReducers({
  entities: EntitiesReducer,
  errors: ErrorsReducer,
  session: SessionReducer,
})