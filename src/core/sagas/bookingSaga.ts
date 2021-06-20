import { takeLatest, call, put } from 'redux-saga/effects';
import * as Actions from '../actionCreators/bookingActions';
import airportData from '../../MockAPI/airports.json'

export function* watchBookingSaga() {
  yield takeLatest(Actions.GET_AIRPORT_LIST_REQUEST, getAirports)
}

export function* getAirports() {
  try {
      const response = yield call(getAirportsDataCall);
     
      if (response) {
        yield put(Actions.fetchAirportListSuccess(response));
    }
  } catch (error) {
      yield put(Actions.fetchAirportListFailure(error));
  }
}

export  function  getAirportsDataCall() {
  return airportData
}

