export const UPDATE_FILTER = 'UPDATE_FILTER';
import { fetchListings } from './listing_actions';

// export const updateBounds = (bounds) => {
//   return {
//     type: UPDATE_BOUNDS,
//     bounds
//   }
// }

// export function updateFilter(bounds) {
//   return (dispatch, getState) => {
//     // debugger
//     dispatch(updateBounds(bounds));
//     const state = getState();
//         // debugger
//     return fetchBenches(state.ui.filters.bounds)(dispatch);
//   };
// }

export function updateFilter(filter, value) {
    return (dispatch, getState) => {
        // debugger
        dispatch(updateFilterAction(filter, value));
        const state = getState();
        // debugger
        return fetchListings(state.ui.filters)(dispatch);
    };
}

export const updateFilterAction = (filter, value) => ({
    type: UPDATE_FILTER,
    filter,
    value
});

//filter is either "min-seating", "max-seating", "bounds"
//