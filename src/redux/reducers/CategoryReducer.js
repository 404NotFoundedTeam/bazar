import { ADD_PRODUCT_CATEGORY, DELETE_PRODUCT_CATEGORY } from "../types";
import { FaBasketballBall, FaClock, FaCouch, FaPhoneAlt } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
const categoryState = {
  categories: {
    clothes: {
      name: "Clothes",
      icon: <GiClothes />,
      img: "https://media.istockphoto.com/photos/fashion-clothes-on-a-rack-in-a-light-background-indoors-place-for-picture-id1257563298?k=20&m=1257563298&s=612x612&w=0&h=E0WQunndzwymrEI_k4cMKXaGUYDtnMaVa7cnOP-teEg=",
      brands: [" group1  ", "group2"],
      products: {},
    },
    watches: {
      name: "Watches",
      img: "https://n.nordstrommedia.com/id/96c085e4-2be7-458a-b1b9-46c35f945255.jpeg?h=471&w=650",
      icon: <FaClock />,
      brands: [" group1  ", "group2"],
      products: { 3: 3 },
    },
    furniture: {
      name: "Furniture",
      img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/amazon-rivet-furniture-1533048038.jpg?crop=1.00xw:0.502xh;0,0.423xh&resize=1200:*",
      icon: <FaCouch />,
      brands: ["group", "group1"],
      products: { 2: 2 },
    },
    phones: {
      name: "Mobile Phones",
      img: "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img/https://www.celluniverse.ca/wp-content/uploads/2020/06/WhatsApp-Image-2020-06-16-at-10.53.46-AM.jpeg",
      icon: <FaPhoneAlt />,
      brands: [" group1  ", "group2"],
      products: { 0: 0, 1: 1 },
    },

    sport: {
      name: "Sport",
      img: "https://pic.sport.ua/images/media/orig/0d/26944.jpg",
      icon: <FaBasketballBall />,
      brands: [" group1  ", "group2"],
      products: {},
    },
  },
};

const CategoryReducer = (state = categoryState, action) => {
  const ap = action.payload;
  let allCategories = { ...state.categories };
  switch (action.type) {
    case ADD_PRODUCT_CATEGORY:
      console.log("Add product category");
      allCategories[ap.cid].products[ap.pid] = ap.pid;
      return {
        ...state,
        categories: allCategories,
      };
    case DELETE_PRODUCT_CATEGORY:
      delete allCategories[ap.cid].products[ap.pid];
      return {
        ...state,
        categories: allCategories,
      };
    default:
      return state;
  }
};

export default CategoryReducer;
