import { dispatch } from "../store";
import { DELETE_ORDERS, UPDATE_ORDERS } from "../types";

export const updateOrder = (data) => {
  dispatch({ type: UPDATE_ORDERS, payload: data });
};

export const deleteOrder = (data) => {
  dispatch({ type: DELETE_ORDERS, payload: data });
};
