import { combineReducers } from "redux";
import VendorReducer from "./VendorReducers";

const rootReducer = combineReducers({
  vendorReducer: VendorReducer,
});

export default rootReducer;
