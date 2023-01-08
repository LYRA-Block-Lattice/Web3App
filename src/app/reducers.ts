import { combineReducers } from "redux";
//import { connectRouter } from "connected-react-router";

import walletReducer from "./walletreducer";
import dexReducer from "./dexreducer";
import counterReducer from "../features/counter/counterSlice";

const rootReducer = () =>
  combineReducers({
    app: walletReducer,
    //router: connectRouter(history),
    dex: dexReducer,
    counter: counterReducer
  });

export default rootReducer;
