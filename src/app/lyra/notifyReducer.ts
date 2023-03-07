import * as actionTypes from "../actionTypes";
import {
  ChatDictionary,
  DealChatMessage,
  PinnedMessage
} from "../blockchain/blocks/dealerMsgs";
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
  chats: ChatDictionary;
}

const initState: IAppNotifyState = {
  error: null,
  event: {
    change: "None",
    msg: "Start",
    time: new Date().getTime(),
    unrecvcnt: 0
  },
  prices: null,
  chats: {}
};

const notifyReducer = (state = initState, action: IAction): IAppNotifyState => {
  if (action === undefined) {
    return state;
  }

  switch (action.type) {
    case actionTypes.DEALER_EVENT:
      const { on, msg } = action.payload;
      if (on === "event") {
        if (msg.evtType === 1) {
          const { ChangeType, about, PeerAccountId } = JSON.parse(msg.json);

          var urcv = 0;
          if (ChangeType === "SendToMe") {
            urcv = 1;
          } else if (ChangeType === "MeReceive") {
            urcv = -1;
          }
          if (state.event.unrecvcnt === 0 && urcv === -1) {
            urcv = 0; // don't show -1 when 0
          }
          var padmsg = PeerAccountId ? `, peer: ${shorten(PeerAccountId)}` : "";
          return {
            ...state,
            event: {
              change: ChangeType,
              msg: `${humanize(ChangeType)}${padmsg}`,
              time: new Date().getTime(),
              unrecvcnt: state.event.unrecvcnt + urcv
            }
          };
        } else if (msg.evtType === 3) {
          // price quote
          const quote = JSON.parse(msg.json);
          return {
            ...state,
            prices: quote.Prices
          };
        } else {
          console.log("Unknown dealer event type", msg);
          return state;
        }
      } else if (on === "chat") {
        console.log("chat msg", msg);
        return state;
      } else if (on === "pinned") {
        console.log("pinned msg", msg);
        const pinned = msg as PinnedMessage;
        return {
          ...state,
          chats: {
            ...state.chats,
            [msg.tradeId]: {
              ...state.chats[msg.tradeId]?.History,
              Pinned: pinned
            }
          }
        };
      } else return state;
    case actionTypes.DEALER_JOIN_ROOM_OK:
      return {
        ...state,
        chats: {
          ...state.chats,
          [action.payload.tradeId]: {
            History: action.payload.ret.history.map((hist: any) => {
              if (hist.msgType === 1) {
                return new DealChatMessage(hist.json);
              } else return null;
            }),

            Roles: action.payload.ret.roles
          }
        }
      };
    case actionTypes.WALLET_RECEIVED_BLOCK:
      return {
        ...state,
        event: {
          ...state.event,
          unrecvcnt:
            state.event.unrecvcnt - 1 < 0 ? 0 : state.event.unrecvcnt - 1
        }
      };
    case actionTypes.WALLET_UNKNOWN_UNRECV: // user just switched UI
      if (state.event.unrecvcnt === 0)
        return {
          ...state,
          event: {
            ...state.event,
            unrecvcnt: 2000
          }
        };
      else return state;
    case actionTypes.WALLET_UNKNOWN_UNRECV_CLEAR:
      return {
        ...state,
        event: {
          ...state.event,
          unrecvcnt: 0
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
