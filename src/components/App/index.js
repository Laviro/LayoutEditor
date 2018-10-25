import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./AppActions";
import appReducer from "./AppReducer";
import App from "./App";
const mapStateToProps = ({ app: { controller } }) => ({
  controller
});
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);
export const reducers = { app: appReducer };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
