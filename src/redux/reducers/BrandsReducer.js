// import { ADD_PRODUCT, DELETE_PRODUCT } from "../types";

import { ADD_PRODUCT_BRAND } from "../types";

const brandState = {
  apple: {
    name: "Apple",
    // brands: [" group1  ", "group2"],
  },
  samsung: {
    name: "samsung",
    // brands: [" group1  ", "group2"],
  },
  Acer: {
    name: "Acer",
    // brands: [" group1  ", "group2"],
  },
  Mi: {
    name: "Mi",
  },
  Kingnous: {
    name: "Kingnous",
  },
  Mi2: {
    name: "Mi2",
  },
};

const BrandsReducer = (state = brandState, action) => {
  const ap = action.payload;
  let allBrands = { ...state.brands };
  switch (action.type) {
    case ADD_PRODUCT_BRAND:
      console.log("Add product category");
      allBrands[ap.bid].products[ap.pid] = ap.pid;
      return {
        ...state,
        categories: allBrands,
      };

    default:
      return state;
  }
};

export default BrandsReducer;
