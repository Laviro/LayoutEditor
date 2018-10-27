import { TOGGLE_DRAWER } from "../../constants/actions";

export const toggleDrawer = () => dispatch => {
  dispatch({
    type: TOGGLE_DRAWER
  });
};
