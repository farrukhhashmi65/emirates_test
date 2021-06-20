/**
 * Actions Types
 */
export const GET_AIRPORT_LIST_REQUEST = 'GET_AIRPORT_LIST_REQUEST';
export const GET_AIRPORT_LIST_SUCCESS = 'GET_AIRPORT_LIST_SUCCESS';
export const GET_AIRPORT_LIST_FAILURE = 'GET_AIRPORT_LIST_FAILURE';

export const fetchAirportList = () => ({
    type: GET_AIRPORT_LIST_REQUEST,
});

export const fetchAirportListSuccess = (payload: any) => ({
    type: GET_AIRPORT_LIST_SUCCESS,
    payload,
});

export const fetchAirportListFailure = (payload: any) => ({
    type: GET_AIRPORT_LIST_FAILURE,
    payload,
});