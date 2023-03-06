import { HubConnection } from "@microsoft/signalr";
import * as actionTypes from "../actionTypes";

export interface IAuthState {
  accountId: string | null;
  walletName: string | null;
  hasKey: boolean;
}

const initState: IAuthState = {
  accountId: null,
  walletName: null,
  hasKey: false
};

const authReducer = (state = initState, action: any) => {
  if (action === undefined) {
    return state;
  }

  switch (action.type) {
    case actionTypes.WALLET_OPEN_DONE:
      return {
        ...state,
        hasKey: true,
        accountId: action.payload.accountId,
        walletName: action.payload.name
      };
    case actionTypes.WALLET_CLOSED:
      return {
        ...state,
        hasKey: false
      };
    case actionTypes.DEALER_INIT_OK:
      return {
        ...state
      };
    case actionTypes.DEALER_CLOSED_OK:
      return {
        ...state
      };
    default: {
      return state;
    }
  }
};

export default authReducer;
