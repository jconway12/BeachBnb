import { UPDATE_FILTER } from '../actions/filter_actions';

const defaultState = {
    bounds: {},
    // min_beds: 1,
    // max_beds: 10
}

const FiltersReducer = (state = defaultState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case UPDATE_FILTER: {
            const newState = Object.assign({}, state);
            newState[action.filter] = action.value;
            return newState;
        }
        default:
            return state;
    }
}

export default FiltersReducer;