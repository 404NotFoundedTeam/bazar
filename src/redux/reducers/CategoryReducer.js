import { ADD_PRODUCT_CATEGORY, DELETE_PRODUCT_CATEGORY } from "../types";

const categoryState = {
  categories: {
    category_id: {
      name: "category1",
      brands: [" group1  ", "group2"],
      products: [],
    },
    2: {
      name: "category2",
      brands: [" group1  ", "group2"],
      products: [],
    },
    watches: {
      name: "watches",
      brands: [" group1  ", "group2"],
      products: [],
    },
    phones: {
      name: "phones",
      brands: [" group1  ", "group2"],
      products: [],
    },
  },
};

const CategoryReducer = (state = categoryState, action) => {
  const ap = action.payload;
  let allCategories = { ...state.categories };
  switch (action.type) {
    case ADD_PRODUCT_CATEGORY:
      allCategories[ap.cid].products[ap.pid] = ap.pid;
      return {
        ...state,
        categories: allCategories,
      };
    case DELETE_PRODUCT_CATEGORY:
      delete allCategories[ap.cid].products[ap.pid];
      return {
        ...state,
        categories: allCategories,
      };
    default:
      return state;
  }
};

export default CategoryReducer;
