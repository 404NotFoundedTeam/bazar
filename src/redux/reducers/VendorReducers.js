import {
  ADD_PRODUCT_TO_VENDOR,
  DELETE_PRODUCT,
  DELETE_PRODUCT_FV,
} from "../types";

const vendorState = {
  0: {
    id: 0,
    balance: 10000,
    dailyBalance: 500,
    orders: [0],
    countries: [],
    products: [1, 2, "watch1"],
    monitorDay: new Date().getDay(),
    avaImg: "https://bazar-react.vercel.app/assets/images/faces/propic.png",
    img: "https://bazar-react.vercel.app/assets/images/banners/cycle.png",
    vendorName: "Salauat Yerejepov",
    location: "Allisher Navoiy street 109 , Tashkent city",
    phoneNumber: "(90)651-02-93",
    rated: 10,
    star: 20,
    rating: function () {
      return (this.star / this.rated).toFixed(1);
    },
    socail_links: {
      twitter: "https://www.google.com/",
      facebook: "https://www.facebook.com/salauat.erejepov.3",
      youtube: "https://www.youtube.com/",
      instagram: "https://www.instagram.com/e_sala29/",
    },
  },
};

const VendorReducer = (state = vendorState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_VENDOR:
      if (action.payload.productId in state[action.payload.vendorId])
        return state;
      else
        return {
          ...state,
          [`${action.payload.vendorId}`]: {
            ...state[action.payload.vendorId],
            products: [
              ...state[action.payload.vendorId].products,
              action.payload.productId,
            ],
          },
        };
    case DELETE_PRODUCT_FV:
      let newProducts = state[action.payload.vendorId].products;
      newProducts.splice(newProducts.indexOf(action.payload.productId), 1);
    default:
      return state;
  }
};

export default VendorReducer;
