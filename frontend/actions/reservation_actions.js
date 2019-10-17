import * as ResAPI from '../util/reservation_api_util';

export const RECEIVE_RESERVATION = 'RECEIVE_RESERVATION';
export const REMOVE_RESERVATION = 'REMOVE_RESERVATION';
export const RECEIVE_RES_ERRORS = 'RECEIVE_RES_ERRORS';
export const REMOVE_RES_ERRORS = 'REMOVE_RES_ERRORS';
export const RECEIVE_RESERVATIONS = 'RECEIVE_RESERVATIONS';

export const fetchRes = id => dispatch => {
    return ResAPI.fetchRes(id).then(res => {dispatch({type: RECEIVE_RESERVATION, reservation: res})}, 
    errors => dispatch({type: RECEIVE_RES_ERRORS, errors}));
}

export const fetchReservations = (userId)=> dispatch => {
    return ResAPI.fetchReservations(userId).then(reses => { dispatch({ type: RECEIVE_RESERVATIONS, reservations: reses})});
}

export const createRes = res => dispatch => {
    // debugger
    res.start_date = String(res.start_date);
    res.end_date = String(res.end_date);
    // debugger
    return ResAPI.createRes(res).then(res => { dispatch({ type: RECEIVE_RESERVATION, reservation: res }) },
        errors => dispatch({ type: RECEIVE_RES_ERRORS, errors }));
}

export const updateRes = res => dispatch => {
    return ResAPI.updateRes(res).then(res => { dispatch({ type: RECEIVE_RESERVATION, reservation: res }) },
        errors => dispatch({ type: RECEIVE_RES_ERRORS, errors }));
}

export const deleteRes = id => dispatch => {
    return ResAPI.deleteRes(id).then(id => { dispatch({ type: REMOVE_RESERVATION, reservationId: id }) },
        errors => dispatch({ type: RECEIVE_RES_ERRORS, errors }));
}

export const removeResErrors = () => {
    return {
        type: REMOVE_RES_ERRORS
    }
}