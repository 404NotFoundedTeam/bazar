import {
  ADD_TO_ORDERS,
  DELETE_ORDERS,
  DELETE_ORDER_PRODUCT,
  UPDATE_ORDERS,
  UPDATE_ORDER_ADDRESS,
  UPDATE_ORDER_PRODUCT,
} from "../types";

const OrdersState = {
  0: {
    id: 0,
    date: new Date(),
    status: "pending",
    products: {
      0: 3,
    },
    price: 1000,
    address: "Amir Temur",
    payment: "debit card",
    off: 10,
    shipping: 12,
  },
};

export const OrdersReducer = (state = OrdersState, action) => {
  switch (action.type) {
    case UPDATE_ORDERS:
      return {
        ...state,
        [`${action.payload.orderId}`]: {
          ...action.payload.orderInfo,
        },
      };
    case ADD_TO_ORDERS:
      return {
        ...state,
        [`${action.payload.orderId}`]: {
          ...action.payload.orderData,
        },
      };
    case DELETE_ORDER_PRODUCT:
      return {
        ...state,
        [`${action.payload.orderId}`]: {
          ...state[action.payload.orderId],
          products: { ...action.payload.data },
        },
      };
    case DELETE_ORDERS:
      let newOrders = { ...state };
      delete newOrders[action.payload.orderId];
      return { ...newOrders };
    default:
      return state;
  }
};
