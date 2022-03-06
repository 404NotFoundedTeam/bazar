import { ADD_PRODUCT_TO_VENDOR } from "../types";

const vendorState = {
  vendors: {
    0: {
      id: 0,
      balance: 10000,
      dailyBalance: 500,
      orders: [],
      countries: [],
      products: [],
      monitorDay: new Date().getDay(),
      avaImg: "https://bazar-react.vercel.app/assets/images/faces/propic.png",
      img: "https://bazar-react.vercel.app/assets/images/banners/cycle.png",
      vendorName: "Salauat Yerejepov",
      location: "Allisher Navoiy street 109 , Tashkent city",
      phoneNumber: "(90)651-02-93",
      socail_links: {
        twitter: "https://www.google.com/",
        facebook: "https://www.facebook.com/salauat.erejepov.3",
        youtube: "https://www.youtube.com/",
        instagram: "https://www.instagram.com/e_sala29/",
      },
    },
  },
};

const VendorReducer = (state = vendorState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_VENDOR:
      console.log("ADD_PRODUCT_TO_VENDOR");
      console.log("ACTION PAYLOAD", action.payload);

      return {
        ...state,
        vendors: {
          [`${action.payload.vendorId}`]: {
            ...state.vendors[`${action.payload.vendorId}`],
            products: [
              ...state.vendors[`${action.payload.vendorId}`].products,
              action.payload.productId,
            ],
          },
        },
      };
    default:
      return state;
  }
};

export default VendorReducer;
