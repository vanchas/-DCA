import { combineReducers } from "redux";
import { walletReducer } from "./reduser";

export default combineReducers({
  wallet: walletReducer
})