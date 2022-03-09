import {
  ADD_ORDER_TO_VENDOR,
  ADD_PRODUCT_TO_VENDOR,
  DELETE_PRODUCT,
  DELETE_PRODUCT_FV,
  UPDATE_VENDOR_PROFILE,
} from "../types";

const vendorState = {
  0: {
    id: 0,
    balance: 10000,
    dailyBalance: 500,
    orders: [0],
    countries: [],
    products: [0, 1],
    monitorDay: new Date().getDay(),
    avaImg: "https://bazar-react.vercel.app/assets/images/faces/propic.png",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMB98haMTYYTLQ86iFreewqgVGJ9ZRWEMg4Q&usqp=CAU",
    vendorName: "Salauat Yerejepov",
    location: "Allisher Navoiy street 109 , Tashkent city",
    phoneNumber: "(90)651-02-93",
    rated: 10,
    star: 50,
    rating: function () {
      return (this.star / this.rated).toFixed(1);
    },
    socialLinks: {
      twitter: "https://www.google.com/",
      facebook: "https://www.facebook.com/salauat.erejepov.3",
      youtube: "https://www.youtube.com/",
      instagram: "https://www.instagram.com/e_sala29/",
    },
  },
  1: {
    id: 1,
    balance: 10000,
    dailyBalance: 500,
    orders: [0],
    countries: [],
    products: [2],
    monitorDay: new Date().getDay(),
    avaImg: "https://bazar-react.vercel.app/assets/images/faces/propic.png",
    img: "https://avatars.mds.yandex.net/i?id=d0ba125e020013fa39056c20552c4c71-5236639-images-thumbs&n=13",
    vendorName: "Salauat Yerejepov",
    location: "Allisher Navoiy street 109 , Tashkent city",
    phoneNumber: "(90)651-02-93",
    rated: 10,
    star: 20,
    rating: function () {
      return (this.star / this.rated).toFixed(1);
    },
    socialLinks: {
      twitter: "https://www.google.com/",
      facebook: "https://www.facebook.com/salauat.erejepov.3",
      youtube: "https://www.youtube.com/",
      instagram: "https://www.instagram.com/e_sala29/",
    },
  },
  3: {
    id: 3,
    balance: 10000,
    dailyBalance: 500,
    orders: [0],
    countries: [],
    products: [2],
    monitorDay: new Date().getDay(),
    avaImg: "https://bazar-react.vercel.app/assets/images/faces/propic.png",
    img: "https://avatars.mds.yandex.net/i?id=d0ba125e020013fa39056c20552c4c71-5236639-images-thumbs&n=13",
    vendorName: "Salauat Yerejepov",
    location: "Allisher Navoiy street 109 , Tashkent city",
    phoneNumber: "(90)651-02-93",
    rated: 10,
    star: 20,
    rating: function () {
      return (this.star / this.rated).toFixed(1);
    },
    socialLinks: {
      twitter: "https://www.google.com/",
      facebook: "https://www.facebook.com/salauat.erejepov.3",
      youtube: "https://www.youtube.com/",
      instagram: "https://www.instagram.com/e_sala29/",
    },
  },
  4: {
    id: 4,
    balance: 10000,
    dailyBalance: 500,
    orders: [0],
    countries: [],
    products: [2],
    monitorDay: new Date().getDay(),
    avaImg: "https://bazar-react.vercel.app/assets/images/faces/propic.png",
    img: "https://bazar-react.vercel.app/assets/images/banners/cycle.png",
    vendorName: "Salauat Yerejepov",
    location: "Allisher Navoiy street 109 , Tashkent city",
    phoneNumber: "(90)651-02-93",
    rated: 10,
    star: 50,
    rating: function () {
      return (this.star / this.rated).toFixed(1);
    },
    socialLinks: {
      twitter: "https://www.google.com/",
      facebook: "https://www.facebook.com/salauat.erejepov.3",
      youtube: "https://www.youtube.com/",
      instagram: "https://www.instagram.com/e_sala29/",
    },
  },
  5: {
    id: 5,
    balance: 10000,
    dailyBalance: 500,
    orders: [0],
    countries: [],
    products: [2],
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
    socialLinks: {
      twitter: "https://www.google.com/",
      facebook: "https://www.facebook.com/salauat.erejepov.3",
      youtube: "https://www.youtube.com/",
      instagram: "https://www.instagram.com/e_sala29/",
    },
  },
  7: {
    id: 7,
    balance: 10000,
    dailyBalance: 500,
    orders: [0],
    countries: [],
    products: [2],
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
    socialLinks: {
      twitter: "https://www.google.com/",
      facebook: "https://www.facebook.com/salauat.erejepov.3",
      youtube: "https://www.youtube.com/",
      instagram: "https://www.instagram.com/e_sala29/",
    },
  },
  9: {
    id: 9,
    balance: 10000,
    dailyBalance: 500,
    orders: [0],
    countries: [],
    products: [2],
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
    socialLinks: {
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
      if (action.payload.productId in state[action.payload.vendorId].products)
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
    case ADD_ORDER_TO_VENDOR:
      if (action.payload.orderId in state[action.payload.vendorId].orders)
        return state;
      else
        return {
          ...state,
          [`${action.payload.vendorId}`]: {
            ...state[action.payload.vendorId],
            orders: [
              ...state[action.payload.vendorId].orders,
              action.payload.orderId,
            ],
          },
        };

    case UPDATE_VENDOR_PROFILE:
      console.log("Vendor");
      return {
        ...state,
        [`${action.payload.vendorId}`]: {
          ...action.payload.vendorInfo,
        },
      };
    case DELETE_PRODUCT_FV:
      let newProducts = state[action.payload.vendorId].products;
      newProducts.splice(newProducts.indexOf(action.payload.productId), 1);
      return { state };
    default:
      return state;
  }
};

export default VendorReducer;
