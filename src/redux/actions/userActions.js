import { dispatch } from "../store";
import { ADD_PRODUCT_K, CHANGE_CART, DELETE_PRODUCT_K } from "../types";
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
