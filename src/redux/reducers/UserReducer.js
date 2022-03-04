import {
  ADD_PRODUCT_K,
  CHANGE_CART,
  DELETE_PRODUCT_K,
  EDITE_PRODUCT_K,
} from "../types";

const initialState = {
  korzina: [],
  openCart: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_K:
      return { ...state, korzina: [...state.korzina, action.payload] };
    case CHANGE_CART:
      return { ...state, openCart: action.payload };
    default:
      return state;
  }
};

export default userReducer;
