import {
  ADD_PRODUCT_K,
  CHANGE_CART,
  DELETE_PRODUCT_K,
  EDITE_PRODUCT_K,
} from "../types";

const initialState = {
  korzina: {
    0: 1,
    1: 2,
    2: 3,
  },
  openCart: false,
};

const userReducer = (state = initialState, action) => {
  const ap = action.payload;
  switch (action.type) {
    case EDITE_PRODUCT_K:
      return {
        ...state,
        korzina: { ...state.korzina, [ap.id]: state.korzina[ap.id] + ap.add },
      };
    case ADD_PRODUCT_K:
      return {
        ...state,
        korzina: { ...state.korzina, [ap]: 1 },
      };
    case DELETE_PRODUCT_K:
      const obj = { ...state.korzina };
      delete obj[ap];
      return { ...state, korzina: obj };
    case CHANGE_CART:
      return { ...state, openCart: ap };
    default:
      return state;
  }
};

export default userReducer;
