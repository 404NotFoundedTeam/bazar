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
    total: 100,
    products: {
      1: 2,
    },
    address: "Amir Temur",
    payment: "debit card",
    off: 10,
    shipping: 12,
  },
};

const OrdersReducer = (state = OrdersState, action) => {
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
      let newProducts = state[action.payload.orderId].products;
      delete newProducts[action.payload.productId];
      return {
        ...state,
        [`${action.payload.orderId}`]: {
          ...state[action.payload.orderId],
          products: newProducts,
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
