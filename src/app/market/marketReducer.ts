import * as actionTypes from "../actionTypes";
import { IAction } from "../wallet/walletReducer";

export interface IMarketState {
  error: {} | null;
}

const initState: IMarketState = {
  error: null
};

const marketReducer = (state = initState, action: IAction): IMarketState => {
  if (action === undefined) {
    return state;
  }

  switch (action.type) {
    case actionTypes.WALLET_CHANGE_NETWORK:
      return {
        ...state
      };
    default: {
      return state;
    }
  }
};

export default marketReducer;
