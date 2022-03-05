import { ADD_PRODUCT } from "../types";

const initState = {
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

const VendorReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        vendors: {
          ...state.vendors,
          [`${action.payload.id}`]: {
            ...state.vendors[action.payload.id],
            products: [
              ...state.vendors[action.payload.id].products,
              action.payload.newProduct,
            ],
          },
        },
      };
    default:
      return state;
  }
};

export default VendorReducer;
