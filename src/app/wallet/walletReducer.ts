import { Interface } from "readline";
import * as actionTypes from "../actionTypes";

export interface IBalance {
  Author: string;
  TIme: Date;
  Balance: number;
  Ticker: string;
  Domain: string;
  Desc: string;
  Name: string | undefined;
  Url: string | undefined;
}

export interface IWalletInfo {
  accountId: string | undefined;
  balance: number;
  usdt: number;
  unrecvcnt: number;
  unrecvlyr: number;
  nftcnt: number;
  totcnt: number;
  balances: IBalance[];
}
export interface ITxInfo {
  tag: string | null;
  result: string | null;
}
export interface IWalletState {
  wallet: IWalletInfo;
  network: String;
  existing: Boolean;
  pending: Boolean;
  name: String;
  names: String[];
  opening: Boolean;
  password: String;
  tx: ITxInfo;
}

export interface IAction {
  type: String;
  payload: any;
}

const initState: IWalletState = {
  wallet: {
    accountId: "",
    balance: 0,
    usdt: 0,
    unrecvcnt: 0,
    unrecvlyr: 0,
    nftcnt: 0,
    totcnt: 0,
    balances: []
  },
  network: "",
  existing: false,
  pending: false,
  name: "default",
  names: [],
  opening: false,
  password: "",
  tx: {
    tag: null,
    result: null
  }
};

const walletReducer = (state = initState, action: IAction): IWalletState => {
  if (action === undefined) {
    return state;
  }

  switch (action.type) {
    case actionTypes.WALLET_BALANCE:
      if (action.payload.balance !== undefined) {
        return {
          ...state,
          wallet: {
            ...state.wallet,
            balance: action.payload.balance,
            usdt: action.payload.usdt,
            nftcnt: action.payload.nftcnt,
            totcnt: action.payload.totcnt,
            balances: action.payload.balances,
            unrecvcnt: action.payload.unreceived
              ? state.wallet.unrecvcnt + 1
              : 0,
            unrecvlyr: action.payload.unreceived ? state.wallet.unrecvcnt : 0
          }
        };
      } else {
        return {
          ...state,
          wallet: {
            ...state.wallet,
            balance: 0,
            unrecvcnt: action.payload.unreceived
              ? state.wallet.unrecvcnt + 1
              : 0,
            unrecvlyr: action.payload.unreceived ? state.wallet.unrecvcnt : 0
          }
        };
      }
    case actionTypes.STORE_INIT_DONE:
      return {
        ...state,
        existing: action.payload?.wallets?.length > 0,
        names: action.payload?.wallets.map((a: any) => a.name),
        name: action.payload?.name,
        network: action.payload?.network,
        wallet: {
          ...state.wallet,
          accountId: action.payload?.accountId
        }
      };
    case actionTypes.WALLET_RECEIVE:
    case actionTypes.WALLET_SEND:
      return {
        ...state,
        tx: {
          tag: action.payload.tag,
          result: "pending"
        }
      };
    case actionTypes.WSRPC_CALL_SUCCESS:
      return {
        ...state,
        tx: {
          tag: action.payload.tag,
          result: "success"
        }
      };
    case actionTypes.WSRPC_CALL_FAILED:
      return {
        ...state,
        tx: {
          tag: action.payload.tag,
          result: "failed"
        }
      };
    case actionTypes.WALLET_CREATE_DONE:
    case actionTypes.WALLET_RESTORE_DONE:
      return {
        ...state,
        existing: true,
        opening: false,
        names: action.payload?.wallets.map((a: any) => a.name)
      };
    case actionTypes.WALLET_REMOVE_DONE:
      return {
        ...state,
        existing: false,
        opening: false
      };
    case actionTypes.WALLET_OPEN:
      return {
        ...state,
        opening: false,
        name: ""
      };
    case actionTypes.WALLET_OPEN_DONE:
      return {
        ...state,
        opening: true,
        name: action.payload.name,
        network: action.payload.network,
        wallet: {
          ...state.wallet,
          accountId: action.payload.accountId
        }
      };
    case actionTypes.WALLET_CLOSED:
      return {
        ...state,
        opening: false
      };
    case actionTypes.WALLET_OPEN_FAILED:
      return {
        ...state,
        opening: false
        //error: action.payload
      };
    case actionTypes.WSRPC_SERVER_NOTIFY_RECV:
      return {
        ...state,
        wallet: {
          ...state.wallet,
          unrecvcnt: state.wallet.unrecvcnt + 1,
          unrecvlyr: state.wallet.unrecvlyr + action.payload.funds["LYR"]
        }
      };
    case actionTypes.WSRPC_SERVER_NOTIFY_SETTLEMENT:
      return {
        ...state,
        wallet: {
          ...state.wallet,
          balance: state.wallet.balance + action.payload.funds["LYR"],
          unrecvcnt:
            state.wallet.unrecvcnt > 0 ? state.wallet.unrecvcnt - 1 : 0,
          unrecvlyr:
            state.wallet.unrecvlyr > action.payload.funds["LYR"]
              ? state.wallet.unrecvlyr - action.payload.funds["LYR"]
              : 0
        }
      };
    case actionTypes.WSRPC_CLOSED:
      return {
        ...state,
        wallet: {
          ...state.wallet,
          unrecvcnt: 0,
          unrecvlyr: 0
        }
      };
    case actionTypes.WALLET_CHANGE_NETWORK:
      return {
        ...state,
        network: action.payload.network,
        wallet: {
          ...state.wallet,
          balance: 0,
          unrecvcnt: 0,
          unrecvlyr: 0
        }
      };
    default: {
      return state;
    }
  }
};

export default walletReducer;
