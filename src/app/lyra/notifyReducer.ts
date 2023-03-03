import * as actionTypes from "../actionTypes";
import { humanize, shorten } from "../utils";
import { IAction } from "../wallet/walletReducer";

export interface ITxEvent {
  change: String; // like Received, Sent, etc.
  msg: String;
  time: number;
  unrecvcnt: number;
}

export interface IPriceQuote {
  ticker: string;
  price: number;
}

export interface IAppNotifyState {
  error: string | null;
  event: ITxEvent;
  prices: IPriceQuote[] | null;
}

const initState: IAppNotifyState = {
  error: null,
  event: {
    change: "None",
    msg: "Start",
    time: new Date().getTime(),
    unrecvcnt: 0
  },
  prices: null
};

const notifyReducer = (state = initState, action: IAction): IAppNotifyState => {
  if (action === undefined) {
    return state;
  }

  switch (action.type) {
    case actionTypes.DEALER_EVENT:
      console.log("DEALER_EVENT", action.payload);
      if (action.payload.evtType === 1) {
        const { ChangeType, about, PeerAccountId } = JSON.parse(
          action.payload.json
        );

        var urcv = 0;
        if (ChangeType === "SendToMe") {
          urcv = 1;
        } else if (ChangeType === "MeReceive") {
          urcv = -1;
        }
        return {
          ...state,
          event: {
            change: ChangeType,
            msg: `${humanize(ChangeType)}, peer: ${shorten(PeerAccountId)}`,
            time: new Date().getTime(),
            unrecvcnt: state.event.unrecvcnt + urcv
          }
        };
      } else if (action.payload.evtType === 3) {
        // price quote
        const quote = JSON.parse(action.payload.json);
        return {
          ...state,
          prices: quote.Prices
        };
      } else {
        console.log("Unknown dealer event type", action.payload);
        return state;
      }
    case actionTypes.WALLET_RECEIVED_BLOCK:
      return {
        ...state,
        event: {
          ...state.event,
          unrecvcnt:
            state.event.unrecvcnt - 1 < 0 ? 0 : state.event.unrecvcnt - 1
        }
      };
    case actionTypes.MARKET_GET_PRICES_SUCCESS:
      return {
        ...state,
        prices: Object.entries(action.payload.prices).map(([key, value]) => ({
          ticker: key,
          price: value as number
        }))
      };
    case actionTypes.WSRPC_CALL_FAILED:
      return {
        ...state,
        error: action.payload.error
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

export default notifyReducer;
