import { combineReducers } from "redux";
import { reducers as layoutReducers } from "../components/Layout";
import { reducers as appReducers } from "../components/App";
export default combineReducers({
  ...layoutReducers,
  ...appReducers
});
