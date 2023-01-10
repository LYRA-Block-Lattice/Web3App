import { combineReducers } from "redux";

import walletReducer from "./wallet/walletReducer";
import dexReducer from "./wallet/dexReducer";
import counterReducer from "../features/counter/counterSlice";
import marketReducer from "./market/marketReducer";

const rootReducer = () =>
  combineReducers({
    app: walletReducer,
    market: marketReducer,
    dex: dexReducer,
    counter: counterReducer
  });

export default rootReducer;
