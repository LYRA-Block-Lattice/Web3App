import * as actionTypes from "../actionTypes";
import { IAction } from "../wallet/walletReducer";

const icons = {
  Token: "../asserts/icbaselinegeneratingtokens.svg",
  NFT: "../asserts/mapartgallery.svg",
  Fiat: "../asserts/fluentemojihighcontrastdollarbanknote.svg",
  Goods: "../asserts/mditruckdelivery.svg",
  Service: "../asserts/carbonuserservicedesk.svg"
};

export const getTickerIcon = (ticker: string) => {
  if (ticker.startsWith("nft/")) return icons["NFT"];
  if (ticker.startsWith("fiat/")) return icons["Fiat"];
  if (ticker.startsWith("tot/") || ticker.startsWith("sku/"))
    return icons["Goods"];
  if (ticker.startsWith("svc/")) return icons["Service"];
  return icons["Token"];
};

export interface IDao {
  name: string;
  daoId: string;
}

export enum OrderStatus {
  Open = 0,
  Partial = 10,
  Closed = 30,
  Delist = 50
}

export interface IOrder {
  orderid: string;
  time: string;
  status: string;
  offering: string;
  biding: string;
  price: number;
  amount: number;
  limitmin: number;
  limitmax: number;
  sold: number;
  shelf: number;
}

export interface IMarketState {
  orders: [];
  ownOrders: IOrder[];
  ownTrades: [];
  dealerId: string;
  dealerName: string;
  daos: IDao[];
  error: {} | null;
  order: any;
}

const initState: IMarketState = {
  orders: [],
  ownOrders: [],
  ownTrades: [],
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
    case actionTypes.MARKET_GET_OWN_ORDERS_SUCCESS:
      return {
        ...state,
        ownOrders: action.payload
      };
    case actionTypes.MARKET_GET_OWN_TRADES_SUCCESS:
      return {
        ...state,
        ownTrades: action.payload
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
