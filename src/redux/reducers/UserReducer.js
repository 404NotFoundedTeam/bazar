import {
  ADD_PRODUCT_K,
  CHANGE_CART,
  DELETE_PRODUCT_K,
  EDITE_PRODUCT_K,
} from "../types";

const initialState = {
  korzina: [
    {
      name: "Ford 2019",
      img: "https://bazar-react.vercel.app/assets/images/products/Automotive/1.Ford2019.png",
      soni: 1,
      price: 1000,
    },
    {
      name: "Ford 2019",
      img: "https://bazar-react.vercel.app/assets/images/products/Automotive/1.Ford2019.png",
      soni: 3,
      price: 1000,
    },
    {
      name: "Ford 2020",
      img: "https://bazar-react.vercel.app/assets/images/products/Automotive/1.Ford2019.png",
      soni: 2,
      price: 3000,
    },
  ],
  openCart: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_K:
      return { ...state, korzina: [...state.korzina, action.payload] };
    case CHANGE_CART:
      return { ...state, openCart: action.payload };
    default:
      return state;
  }
};

export default userReducer;
