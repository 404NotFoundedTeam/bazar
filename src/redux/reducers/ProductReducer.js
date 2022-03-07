import { ADD_PRODUCT, DELETE_PRODUCT } from "../types";

const productState = {
  0: {
    id: 0,
    name: "Watch",
    brand: "Mi",
    price: 200,
    off: 0,
    stock: 10,
    vendor: "vendor-id",
    category: "Notebooks",
    description: "product information",
    rated: 20,
    star: 80,
    img: "https://bazar-react.vercel.app/assets/images/banners/cycle.png",
    rating: function () {
      return (this.star / this.rated).toFixed(1);
    },
  },
  1: {
    id: 1,
    name: "Watch",
    brand: "Mi",
    price: 200,
    off: 0,
    stock: 10,
    vendor: "vendor-id",
    category: "Notebooks",
    description: "product information",
    rated: 20,
    star: 80,
    img: "https://bazar-react.vercel.app/assets/images/banners/cycle.png",
    rating: function () {
      return (this.star / this.rated).toFixed(1);
    },
  },
};

const ProductReducer = (state = productState, action) => {
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

export default ProductReducer;
