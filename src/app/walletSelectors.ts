import { createSelector } from "reselect";

import type { RootState } from "./store";
import { IWalletState } from "./walletreducer";

const getApp = (state: RootState) => state.app;
const getWalletNames = (state: RootState) => state.app.names;

export const getWalletNamesSelector = createSelector(
  getWalletNames,
  (names) => names
);

// export const getPendingSelector = createSelector(
//   getPending,
//   (pending) => pending
// );

// export const getErrorSelector = createSelector(getError, (error) => error);
