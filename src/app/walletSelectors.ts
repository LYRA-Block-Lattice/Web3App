import { createSelector } from "reselect";

import type { RootState } from "./store";
import { IWalletState } from "./walletreducer";

const getApp = (state: RootState) => state.app;
const getWalletName = (app: IWalletState) => app.name;

export const getWalletNamesSelector = createSelector(
  getWalletName,
  (names) => names
);

// export const getPendingSelector = createSelector(
//   getPending,
//   (pending) => pending
// );

// export const getErrorSelector = createSelector(getError, (error) => error);
