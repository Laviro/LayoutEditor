import { combineReducers } from "redux";
import { reducers as HeaderReducers } from "../components/Header";
import { reducers as appReducers } from "../components/App";
export default combineReducers({
  ...HeaderReducers,
  ...appReducers
});
