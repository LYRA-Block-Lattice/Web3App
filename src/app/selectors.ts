import { createSelector } from "reselect";

import type { RootState } from "./store";

const getWalletNames = (state: RootState) => state.app.names;

export const getWalletNamesSelector = createSelector(
  getWalletNames,
  (names) => names
);

// get router properties from state
const getRouter = (state: RootState) => state.router;
// export it as a selector
export const getRouterSelector = createSelector(getRouter, (router) => router);
