import { ADD_PRODUCT } from "../types";

const productState = {
  products: {
    1: {
      name: "Watch",
      brand: "Mi",
      price: 200,
      stock: 10,
      seller: "Good zone",
      category: "Watches",
      rated: 20,
      star: 80,
      productsImg:
        "https://bazar-react.vercel.app/assets/images/banners/cycle.png",
      rating: function () {
        return (this.star / this.rated).toFixed(1);
      },
      off: 0,
    },
    2: {
      name: "LD TV ",
      brand: "Samsung",
      price: 200,
      stock: 10,
      seller: "Good zone",
      category: "Televizor",
      rated: 10,
      star: 30,
      productsImg:
        "https://bazar-react.vercel.app/assets/images/banners/cycle.png",
      rating: function () {
        return (this.star / this.rated).toFixed(1);
      },
      off: 0,
    },
    3: {
      name: "Watch",
      brand: "Mi",
      price: 200,
      stock: 10,
      seller: "Good zone1",
      category: "category2",
      rated: 2,
      star: 10,
      productsImg:
        "https://bazar-react.vercel.app/assets/images/banners/cycle.png",
      rating: function () {
        return (this.star / this.rated).toFixed(1);
      },
      off: 0,
    },
    4: {
      name: "Watch2",
      brand: "Mi",
      price: 200,
      stock: 10,
      seller: "Good zone2",
      category: "category2",
      rated: 20,
      star: 60,
      productsImg:
        "https://bazar-react.vercel.app/assets/images/banners/cycle.png",
      rating: function () {
        return (this.star / this.rated).toFixed(1);
      },
      off: 0,
    },
    5: {
      name: "Redmi 9 A",
      brand: "Mi",
      category: "Phones",
      price: 400,
      stock: 10,
      seller: "Good zone3",
      rated: 20,
      star: 60,
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
