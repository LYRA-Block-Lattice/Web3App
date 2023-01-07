import { applyMiddleware, createStore, compose } from "redux";
//import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import createSagaMiddleware from "redux-saga";
import initSubscriber from "redux-subscriber";
import rootReducer from "./reducers";

import rootSaga from "./sagas";

const logger = (store) => (next) => (action) => {
  console.log("action fired", action);
  next(action);
};

const context = {
  dispatch: () => {}
};

const sagaMiddleware = createSagaMiddleware({
  context
});

// export default function configureStore(initialState) {
//   let store = {};
//   const composeEnhancers =
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//   let createStoreWithMiddleware = composeEnhancers(
//     applyMiddleware(
//       routerMiddleware(history),
//       sagaMiddleware,
//       logger,
//       thunk,
//       promise
//     )
//   )(createStore);

export default function configureStore(preloadedState) {
  const middlewares = [sagaMiddleware, logger, thunk, promise];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = compose(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./reducers", () => store.replaceReducer(rootReducer));
  }

  // // Hot reloading
  // if (module.hot) {
  //   // Enable Webpack hot module replacement for reducers
  //   module.hot.accept('./reducers', () => {
  //     store.replaceReducer(createRootReducer(history));
  //   });
  // }

  //const store = createStore(reducer, initState, composeWithDevTools(middleware));
  context.dispatch = store.dispatch;

  store.subscribe(() => {
    console.log("store changed", store.getState());
  });

  // "initSubscriber" returns "subscribe" function, so you can use it
  initSubscriber(store);

  store.sagaTask = sagaMiddleware.run(rootSaga);

  store.dispatch({ type: "STORE_INIT" });
  //store.dispatch(openWallet("default", "aaa"));

  return store;
}
