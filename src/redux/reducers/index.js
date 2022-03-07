import { combineReducers } from "redux";
import ProductReducer from "./ProductReducer";
import userReducer from "./UserReducer";
import VendorReducer from "./VendorReducers";

const rootReducer = combineReducers({
  user: userReducer,
  vendors: VendorReducer,
  products: ProductReducer,
});

export default rootReducer;
