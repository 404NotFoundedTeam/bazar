import { combineReducers } from "redux";
import { OrdersReducer } from "./OrderReducer";
import ProductReducer from "./ProductReducer";
import userReducer from "./UserReducer";
import VendorReducer from "./VendorReducers";

const rootReducer = combineReducers({
  user: userReducer,
  vendors: VendorReducer,
  products: ProductReducer,
  orders: OrdersReducer,
});

export default rootReducer;
