import { ADD_PRODUCT, DELETE_PRODUCT } from "../types";
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
    },
    2: {
      name: "category2",
      icon: <FaBasketballBall />,
      brands: [" group1  ", "group2"],
    },
    watches: {
      name: "watches",
      icon: <FaClock />,
      brands: [" group1  ", "group2"],
    },
    phones: {
      name: "phones",
      icon: <FaCouch />,
      brands: [" group1  ", "group2"],
    },
  },
};

const CategoryReducer = (state = categoryState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      console.log("ADD Product working");
      return {
        ...state,
        [`${action.payload.id}`]: {
          ...action.payload,
          rated: 0,
          star: 0,
          rating: function () {
            return (this.star / this.rated).toFixed(1);
          },
        },
      };
    case DELETE_PRODUCT:
      let newState = { ...state };
      delete newState[action.payload.id];
      console.log(newState);
      return {
        ...newState,
      };
    default:
      return state;
  }
};

export default CategoryReducer;
