import Immutable from "seamless-immutable";
import { TOGGLE_DRAWER } from "../../constants/actions";

const initialState = Immutable({
  drawer: {
    open: false
  }
});

export default (state = initialState, { type, payload = {} }) => {
  switch (type) {
    case TOGGLE_DRAWER:
      return state.merge({
        drawer: {
          open: !state.drawer.open
        }
      });
    default:
      return state;
  }
};
