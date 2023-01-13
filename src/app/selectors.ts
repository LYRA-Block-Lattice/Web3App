import { createSelector } from "reselect";

import type { RootState } from "./store";

// get wallet names
const getWalletNames = (state: RootState) => state.app.names;

export const getWalletNamesSelector = createSelector(
  getWalletNames,
  (names) => names
);

// get authenticate state, i.e. whether user has opened wallet
const getAuth = (state: RootState) => state.auth;
// export it as a selector
export const getAuthSelector = createSelector(getAuth, (auth) => auth);

// get app state
const getApp = (state: RootState) => state.app;
// export it as a selector
export const getAppSelector = createSelector(getApp, (app) => app);

// get market state
const getMarket = (state: RootState) => state.market;
// export it as a selector
export const getMarketSelector = createSelector(getMarket, (market) => market);

// get router properties from state
const getRouter = (state: RootState) => state.router;
// export it as a selector
export const getRouterSelector = createSelector(getRouter, (router) => router);
