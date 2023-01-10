import * as actionTypes from "../actionTypes";
import { IAction } from "../wallet/walletReducer";

export interface IMarketState {
  orders: [];
  error: {} | null;
}

const initState: IMarketState = {
  orders: [],
  error: null
};

const marketReducer = (state = initState, action: IAction): IMarketState => {
  if (action === undefined) {
    return state;
  }

  switch (action.type) {
    case actionTypes.MARKET_GET_ORDERS_SUCCESS:
      return {
        ...state,
        orders: action.payload
      };
    default: {
      return state;
    }
  }
};

export default marketReducer;
