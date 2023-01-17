import * as actionTypes from "../actionTypes";
import { IAction } from "../wallet/walletReducer";

export interface IDao {
  name: string;
  daoId: string;
}

export interface IMarketState {
  orders: [];
  dealerId: string;
  dealerName: string;
  daos: IDao[];
  error: {} | null;
  order: any;
}

const initState: IMarketState = {
  orders: [],
  daos: [],
  dealerId: "",
  dealerName: "",
  error: null,
  order: null
};

const marketReducer = (state = initState, action: IAction): IMarketState => {
  if (action === undefined) {
    return state;
  }

  switch (action.type) {
    case actionTypes.MARKET_GET_ORDER_BY_ID_SUCCESS:
      return {
        ...state,
        order: action.payload
      };
    case actionTypes.MARKET_GET_ORDERS_SUCCESS:
      return {
        ...state,
        orders: action.payload
      };
    case actionTypes.MARKET_GET_DEALER_OK:
      return {
        ...state,
        dealerId: action.payload.ServiceId,
        dealerName: action.payload.Name
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
