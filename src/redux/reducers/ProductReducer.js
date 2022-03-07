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
    category: "watches",
    description: "product information",
    rated: 20,
    star: 80,
    img: "https://bazar-react.vercel.app/assets/images/banners/cycle.png",
    rating: function () {
      return (this.star / this.rated).toFixed(1);
    },
  },
  2: {
    name: "LD TV ",
    brand: "Samsung",
    price: 200,
    stock: 10,
    seller: "Good zone",
    category: 2,
    rated: 10,
    star: 30,
    productsImg:
      "https://bazar-react.vercel.app/assets/images/banners/cycle.png",
    rating: function () {
      return (this.star / this.rated).toFixed(1);
    },
    off: 0,
  },
  watch1: {
    name: "Watch",
    brand: "Kingnous",
    price: 100,
    stock: 10,
    seller: "Good zone1",
    category: "watches",
    rated: 2,
    star: 10,
    productsImg:
      "https://avatars.mds.yandex.net/i?id=102fa698daf7cae6f8048f576dd4b8c2-5911222-images-thumbs&n=13",
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
    category: "phones",
    price: 400,
    stock: 10,
    seller: "Good zone3",
    rated: 20,
    star: 60,
    productsImg:
      "https://avatars.mds.yandex.net/i?id=74108ca467f6156c0cb44a52503e4ed5-5234070-images-thumbs&n=13",
    rating: function () {
      return (this.star / this.rated).toFixed(1);
    },
    off: 0,
  },
  3: {
    name: "Samsung S21",
    brand: "Samsung",
    category: "phones",
    price: 880,
    stock: 10,
    seller: "Good zone3",
    rated: 20,
    star: 80,
    productsImg:
      "https://avatars.mds.yandex.net/i?id=8e954a90deba43122bc9a685ead9105d-5887122-images-thumbs&n=13",
    rating: function () {
      return (this.star / this.rated).toFixed(1);
    },
    off: 0,
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
