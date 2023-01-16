import * as actionTypes from "../actionTypes";
import { IAction } from "../wallet/walletReducer";

export interface ITxEvent {
  change: String; // like Received, Sent, etc.
  msg: String;
  time: number;
}

export interface IAppNotifyState {
  error: string | null;
  event: ITxEvent;
}

const initState: IAppNotifyState = {
  error: null,
  event: {
    change: "None",
    msg: "Start",
    time: new Date().getTime()
  }
};

const notifyReducer = (state = initState, action: IAction): IAppNotifyState => {
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
            msg: `${ChangeType} to my ${about}`,
            time: new Date().getTime()
          }
        };
      } else {
        return state;
      }
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
