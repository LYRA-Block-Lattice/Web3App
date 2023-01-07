import { combineReducers } from "redux";
import walletReducer from "./walletreducer";
import dexReducer from "./dexreducer";

const rootReducer = (history) =>
  combineReducers({
    app: walletReducer,
    dex: dexReducer
  });

export default rootReducer;
