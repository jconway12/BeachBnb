import { combineReducers } from "redux";
import ModalReducer from './modal_reducer';
import FiltersReducer from './filters_reducer';

export default combineReducers({
  modal: ModalReducer,
  filters: FiltersReducer
});
