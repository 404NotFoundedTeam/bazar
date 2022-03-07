import { ADD_PRODUCT, DELETE_PRODUCT } from "../types";

const productState = {
  0: {
    id: 0,
    name: "Airpods Pro",
    brand: "Apple",
    price: 120,
    off: 23,
    stock: 10,
    vendor: "vendor-id",
    category: "phones",
    description: "product information",
    rated: 20,
    star: 80,
    productsImg:
      "https://www.apple.com/v/airpods-pro/e/images/meta/og__ch3csr9zmviq_overview.png",
    rating: function () {
      return (this.star / this.rated).toFixed(1);
    },
  },
  1: {
    id: 1,
    name: "Iphone 12 Pro",
    brand: "Apple",
    price: 2000,
    off: 0,
    stock: 10,
    vendor: "vendor-id",
    category: "phone",
    description: "product information",
    rated: 20,
    star: 90,
    productsImg:
      "https://www.ixbt.com/img/n1/news/2020/9/5/apple_announce-iphone12pro_10132020_large_0_large.png",
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
    category: "furniture",
    rated: 10,
    star: 30,
    productsImg:
      "https://s.yimg.com/aah/yhst-39276693957820/hitachi-ld-50hk07a-50-multisystem-full-hd-led-tv-110-220-240-volts-pal-ntsc-31.gif",
    rating: function () {
      return (this.star / this.rated).toFixed(1);
    },
    off: 0,
  },
  3: {
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
    name: "Clothes",
    brand: "Mi2",
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
