import { all, fork } from "redux-saga/effects";
import {watchBookingSaga} from "./bookingSaga";

export default function* rootSaga() {
  yield all([fork(watchBookingSaga)]);
}
