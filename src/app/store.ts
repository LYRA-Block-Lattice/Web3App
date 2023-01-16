import {
  configureStore,
  ThunkAction,
  Action,
  applyMiddleware
} from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";
import { combineReducers } from "redux";
import { createReduxHistoryContext } from "redux-first-history";
import { createBrowserHistory } from "history";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import storageSession from "redux-persist/lib/storage/session";

import * as marketApi from "./market/marketApi";
import walletReducer from "./wallet/walletReducer";
import dexReducer from "./wallet/dexReducer";
import counterReducer from "../features/counter/counterSlice";
import rootSaga from "./sagas";
import marketReducer from "./market/marketReducer";
import authReducer from "./wallet/authReducer";
import notifyReducer from "./lyra/notifyReducer";

const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({ history: createBrowserHistory() });

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["router", "auth", "notify"]
};

// after opening wallet, private key is stored in session storage.
const authPersistConfig = {
  key: "auth",
  storage: storageSession
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  app: walletReducer,
  notify: notifyReducer,
  market: marketReducer,
  dex: dexReducer,
  counter: counterReducer,
  router: routerReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the saga middleware
const context = {
  Market: marketApi,
  dispatch: {}
};

const sagaMiddleware = createSagaMiddleware({
  context
});

const preloadedState = {};

// Mount it on the Store
export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
      .concat(logger)
      .concat(sagaMiddleware)
      .concat(routerMiddleware),
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  preloadedState
});

context.dispatch = store.dispatch;

export const persistor = persistStore(store);

export const history = createReduxHistory(store);

// Run the saga
sagaMiddleware.run(rootSaga);

// load initial state
store.dispatch({ type: "STORE_INIT" });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
