import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as layoutActions from "./LayoutActions";
import * as appActions from "../App/AppActions";
import LayoutReducer from "./LayoutReducer";
import Layout from "./Layout";
const mapStateToProps = ({
  layout: {
    drawer: { open }
  },
  app: { controller }
}) => ({
  open,
  controller
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...layoutActions, ...appActions }, dispatch);
export const reducers = { layout: LayoutReducer };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
