import { dispatch } from "../store";
import {
  ADD_NEW_METHOD,
  ADD_PRODUCT_K,
  CHANGE_CART,
  DELETE_METHOD,
  DELETE_PRODUCT_K,
} from "../types";
import { EDITE_PRODUCT_K } from "../types";

export const changeOpenCart = (action) => {
  dispatch({ type: CHANGE_CART, payload: action });
};

export const changeSoniProduct = (id, isPlus) => {
  dispatch({ type: EDITE_PRODUCT_K, payload: { id: id, isPlus: isPlus } });
};
export const deleteProduct__K = (id) => {
  dispatch({ type: DELETE_PRODUCT_K, payload: id });
};
export const addProduct__K = (id) => {
  dispatch({ type: ADD_PRODUCT_K, payload: id });
};

export const deleteMethod = (data) => {
  dispatch({ type: DELETE_METHOD, payload: data });
};
export const addMethod = (data) => {
  dispatch({ type: ADD_NEW_METHOD, payload: data });
};
