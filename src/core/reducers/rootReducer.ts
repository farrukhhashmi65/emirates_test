import { combineReducers } from "redux";
import bookingReducer from "./bookingReducer";

const rootReducer = combineReducers({
  root: bookingReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
