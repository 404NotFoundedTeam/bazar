const initialState = {
  seller_0: {
    id: 0,
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
    products: [1, 2, 3, 4, 5],
    rated: 2,
    star: 10,
    rating: function () {
      return (this.star / this.rated).toFixed(1);
    },
  },
  seller_1: {
    id: 0,
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
    products: [1, 2, 3, 4, 5],
    rated: 2,
    star: 10,
    rating: function () {
      return (this.star / this.rated).toFixed(1);
    },
  },
};

const VendorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FILTER":
      //
      break;

    default:
      return state;
  }
};

export default VendorReducer;
