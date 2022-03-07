import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  ADD_PRODUCT_CATEGORY,
  DELETE_PRODUCT_CATEGORY,
} from "../types";
import {
  FaAddressBook,
  FaBasketballBall,
  FaClock,
  FaCouch,
} from "react-icons/fa";
const categoryState = {
  categories: {
    category_id: {
      name: "category1",
      icon: <FaAddressBook />,
      brands: [" group1  ", "group2"],
      products: [],
    },
    2: {
      name: "category2",
      icon: <FaBasketballBall />,
      brands: [" group1  ", "group2"],
      products: [],
    },
    watches: {
      name: "watches",
      icon: <FaClock />,
      brands: [" group1  ", "group2"],
      products: [],
    },
    phones: {
      name: "phones",
      icon: <FaCouch />,
      brands: [" group1  ", "group2"],
      products: [],
    },
    category2: {
      name: "category2",
      brands: [" group1  ", "group2"],
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
