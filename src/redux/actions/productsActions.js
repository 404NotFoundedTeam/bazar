import { dispatch } from "../store";
import { FILTER_PRODUCT } from "../types";
import { addProductToCategory } from "./categoryAction";

export const changeOpenCart = (action) => {
  dispatch({ type: FILTER_PRODUCT, payload: action });
};
