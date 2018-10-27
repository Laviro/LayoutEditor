import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as HeaderActions from "./HeaderActions";
import * as appActions from "../App/AppActions";
import HeaderReducer from "./HeaderReducer";
import Header from "./Header";
const mapStateToProps = ({
  header: {
    drawer: { open }
  },
  app: { controller }
}) => ({
  open,
  controller
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...HeaderActions, ...appActions }, dispatch);
export const reducers = { header: HeaderReducer };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
