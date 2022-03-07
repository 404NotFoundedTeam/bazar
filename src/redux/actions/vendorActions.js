import { dispatch } from "../store";
import {
  ADD_PRODUCT,
  ADD_PRODUCT_TO_VENDOR,
  DELETE_ORDER_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_VENDOR_PROFILE,
} from "../types";
import { addProductToCategory } from "./categoryAction";

export const addNewProduct = (action) => {
  addProductToCategory(action.category, action.id);
  dispatch({ type: ADD_PRODUCT, payload: action });
};

export const addNewProductToVendor = (data) => {
  dispatch({ type: ADD_PRODUCT_TO_VENDOR, payload: data });
};

export const deleteProduct = (data) => {
  dispatch({ type: DELETE_PRODUCT, payload: data });
};

export const deleteOrderProduct = (data) => {
  dispatch({ type: DELETE_ORDER_PRODUCT, payload: data });
};

export const updateVendor = (data) => {
  dispatch({ type: UPDATE_VENDOR_PROFILE, payload: data });
};
