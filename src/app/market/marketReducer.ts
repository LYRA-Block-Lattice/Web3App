import * as actionTypes from "../actionTypes";
import { IAction } from "../wallet/walletReducer";

export interface IDao {
  name: string;
  daoId: string;
}

export interface IMarketState {
  orders: [];
  dealerId: string;
  daos: IDao[];
  error: {} | null;
}

const initState: IMarketState = {
  orders: [],
  daos: [],
  dealerId: "",
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
    case actionTypes.MARKET_GET_DEALER_OK:
      return {
        ...state,
        dealerId: action.payload.AccountId
      };
    case actionTypes.BLOCKCHAIN_FIND_DAO_OK:
      return {
        ...state,
        daos: action.payload
      };
    default: {
      return state;
    }
  }
};

export default marketReducer;
