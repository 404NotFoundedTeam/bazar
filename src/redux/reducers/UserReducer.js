import {
  ADD_PRODUCT_K,
  CHANGE_CART,
  DELETE_PRODUCT_K,
  EDITE_PRODUCT_K,
  ADD_NEW_METHOD,
  DELETE_METHOD,
  UPDATE_METHOD,
  UPDATE_USER_PROFILE,
} from "../types";

const initialState = {
  0: {
    firstName: "Abdurahim",
    lastName: "Nurmatov",
    phone: "998 99 999 99 99",
    balance: 100,
    email: "super@gmail.com",
    status: "Silver user",
    birthDate: new Date(),
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    all_orders: [],
    wishList: [],
    address: "Amir Temur ko'chasi",
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

  korzina: {
    0: 1,
    1: 2,
    2: 3,
  },
  openCart: false,
};

const userReducer = (state = initialState, action) => {
  const ap = action.payload;
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
    case UPDATE_USER_PROFILE:
      console.log("updateUserProfile");
      return {
        ...state,
        [action.payload.userId]: {
          ...action.payload.userInfo,
        },
      };
    case UPDATE_METHOD:
      let index;
      let method = state[action.payload.userId].payment_methods.find(
        (method, i) => {
          if (action.payload.methodInfo.number == method.number) {
            index = i;
            return true;
          } else return false;
        }
      );
      let newMethods = [...state[action.payload.userId].payment_methods];
      newMethods[index] = action.payload.methodInfo;
      return {
        ...state,
        [action.payload.userId]: {
          ...state[action.payload.userId],
          payment_methods: newMethods,
        },
      };
    case DELETE_METHOD:
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
    case EDITE_PRODUCT_K:
      return {
        ...state,
        korzina: { ...state.korzina, [ap.id]: state.korzina[ap.id] + ap.add },
      };
    case ADD_PRODUCT_K:
      return {
        ...state,
        korzina: { ...state.korzina, [ap]: 1 },
      };
    case DELETE_PRODUCT_K:
      const obj = { ...state.korzina };
      delete obj[ap];
      return { ...state, korzina: obj };
    case CHANGE_CART:
      return { ...state, openCart: ap };
    default:
      return state;
  }
};

export default userReducer;
