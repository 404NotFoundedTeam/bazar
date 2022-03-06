import { dispatch } from "../store";
import { CHANGE_CART } from "../types";

export const changeOpenCart = (action) => {
  dispatch({ type: CHANGE_CART, payload: action });
};
