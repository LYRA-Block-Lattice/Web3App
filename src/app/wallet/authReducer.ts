import * as actionTypes from "../actionTypes";

const initState = {
  accountId: null,
  walletName: null,
  hasKey: false
};

const authReducer = (state = initState, action: any) => {
  if (action === undefined) {
    return state;
  }

  switch (action.type) {
    case actionTypes.WALLET_OPEN_DONE:
      return {
        ...state,
        hasKey: true,
        accountId: action.payload.accountId,
        walletName: action.payload.name
      };
    case actionTypes.WALLET_CLOSED:
      return {
        ...state,
        hasKey: false
      };
    default: {
      return state;
    }
  }
};

export default authReducer;
