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

import walletReducer from "./wallet/walletReducer";
import dexReducer from "./wallet/dexReducer";
import counterReducer from "../features/counter/counterSlice";

import rootSaga from "./sagas";

const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({ history: createBrowserHistory() });

const persistConfig = {
  key: "root",
  storage
};

const rootReducer = combineReducers({
  app: walletReducer,
  dex: dexReducer,
  counter: counterReducer,
  router: routerReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

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
