import { combineReducers } from "redux";
import VendorReducer from "./VendorReducers";

const rootReducer = combineReducers({
  vendors: VendorReducer,
});

export default rootReducer;
