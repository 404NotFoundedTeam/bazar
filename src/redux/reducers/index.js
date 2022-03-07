import { combineReducers } from "redux";
import CategoryReducer from "./CategoryReducer";
import ProductReducer from "./ProductReducer";
import userReducer from "./UserReducer";
import VendorReducer from "./VendorReducers";

const rootReducer = combineReducers({
  user: userReducer,
  vendors: VendorReducer,
  products: ProductReducer,
  categories: CategoryReducer,
});

export default rootReducer;
