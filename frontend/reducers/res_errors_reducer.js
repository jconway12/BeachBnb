import { RECEIVE_RES_ERRORS, REMOVE_RES_ERRORS } from '../actions/reservation_actions';

const ResErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_RES_ERRORS: {
            return action.errors.responseJSON;
        }
        case REMOVE_RES_ERRORS: {
            return [];
        }
        default:
            return state;
    }
};

export default ResErrorsReducer;
