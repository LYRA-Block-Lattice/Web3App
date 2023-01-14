import { Interface } from "readline";
import * as actionTypes from "../actionTypes";

export interface IBalance {
  token: string;
  balance: number;
}

export interface IWalletInfo {
  accountId: String | undefined;
  balance: number;
  usdt: number;
  unrecvcnt: number;
  unrecvlyr: number;
  nftcnt: number;
  totcnt: number;
  balances: IBalance[];
}
export interface ITxInfo {
  tag: String | null;
  result: String | null;
}

export interface ITxEvent {
  change: String; // like Received, Sent, etc.
  msg: String;
  time: number;
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
  error: string | null;
  event: ITxEvent;
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
  },
  error: null,
  event: {
    change: "None",
    msg: "Start",
    time: new Date().getTime()
  }
};

const walletReducer = (state = initState, action: IAction): IWalletState => {
  if (action === undefined) {
    return state;
  }

  switch (action.type) {
    case actionTypes.BLOCKCHAIN_EVENT:
      if (action.payload.evtType === 1) {
        const { ChangeType, about } = JSON.parse(action.payload.json);
        return {
          ...state,
          event: {
            change: ChangeType,
            msg: `${ChangeType} to my ${about}}`,
            time: new Date().getTime()
          }
        };
      } else {
        return state;
      }
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
            balances: action.payload.balances.map((a: any) => ({
              token: a[0],
              balance: a[1]
            })),
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
        existing: action.payload !== undefined && action.payload !== null,
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
        error: null,
        tx: {
          tag: action.payload.tag,
          result: "pending"
        }
      };
    case actionTypes.WSRPC_CALL_SUCCESS:
      return {
        ...state,
        error: null,
        tx: {
          tag: action.payload.tag,
          result: "success"
        }
      };
    case actionTypes.WSRPC_CALL_FAILED:
      return {
        ...state,
        error: action.payload.error,
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
        name: "",
        error: null
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
        opening: false,
        error: action.payload
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
    case actionTypes.ERROR:
      return {
        ...state,
        error: action.payload.error
      };
    case actionTypes.ERROR_CLEAR:
      return {
        ...state,
        error: null
      };
    default: {
      return state;
    }
  }
};

export default walletReducer;
