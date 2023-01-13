import * as actionTypes from "../actionTypes";

const initState = {
  accountId: null,
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
        accountId: action.payload.accountId
      };
    case actionTypes.WALLET_CLOSED:
      return {
        ...state,
        hasKey: false
      };
    case actionTypes.STORE_INIT_DONE:
      return {
        ...state,
        accountId: action.payload?.accountId
      };
    default: {
      return state;
    }
  }
};

export default authReducer;
