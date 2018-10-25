import { ROUTE_CHANGE } from "../../constants/actions";

export const updateRoute = controller => dispatch => {
  dispatch({
    type: ROUTE_CHANGE,
    payload: { controller }
  });
};
