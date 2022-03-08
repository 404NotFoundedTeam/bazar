import {
  ADD_PRODUCT_K,
  CHANGE_CART,
  DELETE_PRODUCT_K,
  EDITE_PRODUCT_K,
  ADD_NEW_METHOD,
  DELETE_METHOD,
} from "../types";

const initialState = {
  0: {
    firstName: "Abdurahim",
    lastName: "Nurmatov",
    phone: "998 99 999 99 99",
    email: "super@gmail.com",
    birthDate: new Date(),
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    all_orders: [],
    wishList: [],
    address: [],
    payment_methods: [
      {
        fullName: "John Smith",
        number: "1234 4564 9878 1299",
        date: "11/23",
        cvc: "465",
      },
    ],
    cart: [],
  },
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
    case ADD_NEW_METHOD:
      return {
        ...state,
        [`${action.payload.userId}`]: {
          ...state[action.payload.userId],
          payment_methods: [
            ...state[action.payload.userId]["payment_methods"],
            action.payload.methodInfo,
          ],
        },
      };
    case DELETE_METHOD:
      console.log("====================================");
      console.log("Delete method");
      console.log("====================================");
      let newMethod = [...state[action.payload.userId].payment_methods];
      newMethod = state[action.payload.userId].payment_methods.filter(
        (method) => method.number != action.payload.number
      );
      return {
        ...state,
        [`${action.payload.userId}`]: {
          ...state[action.payload.userId],
          payment_methods: newMethod,
        },
      };
    case ADD_PRODUCT_K:
      return { ...state, korzina: [...state.korzina, action.payload] };
    case CHANGE_CART:
      return { ...state, openCart: action.payload };
    default:
      return state;
  }
};

export default userReducer;
