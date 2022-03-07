import { dispatch } from "../store";
import { ADD_PRODUCT_CATEGORY } from "../types";

export const addProductToCategory = (categoryId, productId) => {
  dispatch({
    type: ADD_PRODUCT_CATEGORY,
    payload: { cid: categoryId, pid: productId },
  });
};
