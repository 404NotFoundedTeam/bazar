import { ADD_PRODUCT } from "../types";

const productState = {
  products: {
    1: {
      name: "Watch",
      brand: "Mi",
      price: 200,
      stock: 10,
      vendor: "vendor-id",
      rated: 20,
      star: 80,
      productsImg:
        "https://bazar-react.vercel.app/assets/images/banners/cycle.png",
      rating: function () {
        return (this.star / this.rated).toFixed(1);
      },
      off: 0,
    },
  },
};

const ProductReducer = (state = productState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: {
          ...state.products,
          [`${action.payload.productData.id}`]: {
            ...action.payload.productData,
            rated: 0,
            star: 0,
            rating: function () {
              return (this.star / this.rated).toFixed(1);
            },
          },
        },
      };
    default:
      return state;
  }
};

export default ProductReducer;
