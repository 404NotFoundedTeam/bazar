import { dispatch } from "../store";
import { ADD_PRODUCT } from "../types";

export const addNewProduct = (action) => {
  dispatch({ type: ADD_PRODUCT, payload: action });
};
