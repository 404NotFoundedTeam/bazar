import { ADD_PRODUCT } from "../types";

const vendorState = {
  vendors: {
    0: {
      id: 0,
      balance: 10000,
      dailyBalance: 500,
      orders: [],
      countries: [],
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
      products: [1, 2, 4, 3, 5],
      rated: 10,
      star: 50,
      rating: function () {
        return (this.star / this.rated).toFixed(1);
      },
    },
    seller_2: {
      id: 2,
      avaImg:
        "https://www.allcarz.ru/wp-content/uploads/2021/05/foto-xenatec-57s_01.jpg",
      img: "https://bazar-react.vercel.app/assets/images/banners/cycle.png",
      vendorName: "Anytime Buys",
      location: "Yerejepov street 109 , Nukus city",
      phoneNumber: "(90)888-88-88",
      products: [1, 4, 5],
      socail_links: {
        twitter: "https://www.google.com/",
        facebook: "https://www.facebook.com/salauat.erejepov.3",
        youtube: "https://www.youtube.com/",
        instagram: "https://www.instagram.com/e_sala29/",
      },
      rated: 5,
      star: 10,
      rating: function () {
        return (this.star / this.rated).toFixed(1);
      },
    },
  },
};

const VendorReducer = (state = vendorState, action) => {
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
