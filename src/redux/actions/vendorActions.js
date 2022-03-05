import { dispatch } from "../store";
import { ADD_PRODUCT, ADD_PRODUCT_TO_VENDOR } from "../types";

export const addNewProduct = (action) => {
  dispatch({ type: ADD_PRODUCT, payload: action });
};

export const addNewProductToVendor = (data) => {
  dispatch({ type: ADD_PRODUCT_TO_VENDOR, payload: data });
};
