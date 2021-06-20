import {combineReducers} from 'redux';
import getBasicReducer from '../../utils/reducer';
import * as Actions from '../actionCreators/bookingActions';

const bookingReducer = combineReducers({
  airportList: getBasicReducer({
    request: Actions.GET_AIRPORT_LIST_REQUEST,
    success: Actions.GET_AIRPORT_LIST_SUCCESS,
    failure: Actions.GET_AIRPORT_LIST_FAILURE,
  }),
 
});

export default bookingReducer;
