import { combineReducers } from "redux";
import LogReducer from "../Log/LogReducer";
import FetchReducer from "../FetchGlobal/FetchReducer";

export default combineReducers({
  logReducer: LogReducer,
  fetchReducer: FetchReducer,
});
