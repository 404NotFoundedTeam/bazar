import { dispatch } from "../store";
import { ADD_PRODUCT, ADD_PRODUCT_TO_VENDOR, DELETE_PRODUCT } from "../types";

export const addNewProduct = (action) => {
  dispatch({ type: ADD_PRODUCT, payload: action });
};

export const addNewProductToVendor = (data) => {
  dispatch({ type: ADD_PRODUCT_TO_VENDOR, payload: data });
};

export const deleteProduct = (data) => {
  dispatch({ type: DELETE_PRODUCT, payload: data });
};
