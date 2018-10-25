import Immutable from "seamless-immutable";
import { ROUTE_CHANGE } from "../../constants/actions";

const initialState = Immutable({
  controller: null
});

export default (state = initialState, { payload = {}, type }) => {
  const { controller } = payload;
  switch (type) {
    case ROUTE_CHANGE:
      return state.merge({
        controller
      });
    default:
      return state;
  }
};
