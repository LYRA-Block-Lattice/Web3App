// have a look on https://github.com/erikras/ducks-modular-redux

export const ERROR = "ERROR";
export const ERROR_CLEAR = "ERROR_CLEAR";

export const STORE_ERROR = "STORE_ERROR";

export const STORE_INIT = "STORE_INIT";
export const STORE_INIT_DONE = "STORE_INIT_DONE";
export const STORE_SAVE_PREF = "STORE_SAVE_PREF";

export const WALLET_CREATE = "WALLET_CREATE";
export const WALLET_CREATE_DONE = "WALLET_CREATE_DONE";
export const WALLET_RESTORE = "WALLET_RESTORE";
export const WALLET_RESTORE_DONE = "WALLET_RESTORE_DONE";
export const WALLET_REMOVE = "WALLET_REMOVE";
export const WALLET_REMOVE_DONE = "WALLET_REMOVE_DONE";

export const WALLET_OPEN = "WALLET_OPEN";
export const WALLET_OPEN_DONE = "WALLET_OPEN_DONE";
export const WALLET_OPEN_FAILED = "WALLET_OPEN_FAILED";
export const WALLET_GET_BALANCE = "WALLET_GET_BALANCE";
export const WALLET_BALANCE = "WALLET_BALANCE";
export const WALLET_CHANGE_NETWORK = "WALLET_CHANGE_NETWORK";
export const WALLET_SEND = "WALLET_SEND";
export const WALLET_RECEIVE = "WALLET_RECEIVE";
export const WALLET_CLOSE = "WALLET_CLOSE";
export const WALLET_CLOSED = "WALLET_CLOSED";

// Mint
export const WALLET_MINT_TOKEN = "WALLET_MINT_TOKEN";
export const WALLET_MINT_TOKEN_OK = "WALLET_MINT_TOKEN_OK";

export const WSRPC_STATUS = "WSRPC_STATUS";
export const WSRPC_STATUS_SUCCESS = "WSRPC_STATUS_SUCCESS";
export const WSRPC_STATUS_FAILED = "WSRPC_STATUS_FAILED";

export const WSRPC_CALL_SUCCESS = "WSRPC_CALL_SUCCESS";
export const WSRPC_CALL_FAILED = "WSRPC_CALL_FAILED";

export const WSRPC_CREATE = "WSRPC_CREATE";
export const WSRPC_CREATED = "WSRPC_CREATED";
export const WSRPC_CONNECTED = "WSRPC_CONNECTED";
export const WSRPC_CLOSED = "WSRPC_CLOSED";
export const WSRPC_ERROR = "WSRPC_ERROR";
export const WSRPC_SERVER_SIGNREQ = "WSRPC_SERVER_SIGNREQ";
export const WSRPC_SERVER_NOTIFY_RECV = "WSRPC_SERVER_NOTIFY_RECV";
export const WSRPC_SERVER_NOTIFY_SETTLEMENT = "WSRPC_SERVER_NOTIFY_SETTLEMENT";
export const WSRPC_MESSAGE = "WSRPC_MESSAGE";

export const DEX_ERROR = "DEX_ERROR";
export const DEX_ERROR_CLEAR = "DEX_ERROR_CLEAR";
export const DEX_LOGOUT = "DEX_LOGOUT";
export const DEX_SIGNUP = "DEX_SIGNUP";
export const DEX_SIGNUP_OK = "DEX_SIGNUP_OK";
export const DEX_SIGNIN = "DEX_SIGNIN";
export const DEX_SIGNIN_OK = "DEX_SIGNIN_OK";

export const MARKET_GET_ORDERS = "MARKET_GET_ORDERS";
export const MARKET_GET_ORDERS_SUCCESS = "MARKET_GET_ORDERS_SUCCESS";
export const MARKET_GET_DEALER = "MARKET_GET_DEALER";
export const MARKET_GET_DEALER_OK = "MARKET_GET_DEALER_OK";
export const MARKET_GET_ORDER_BY_ID = "MARKET_GET_ORDER_BY_ID";
export const MARKET_GET_ORDER_BY_ID_SUCCESS = "MARKET_GET_ORDER_BY_ID_SUCCESS";

export const BLOCKCHAIN_FIND_DAO = "BLOCKCHAIN_FIND_DAO";
export const BLOCKCHAIN_FIND_DAO_OK = "BLOCKCHAIN_FIND_DAO_OK";

// signalR
export const SIGNALR_CONNECT = "SIGNALR_CONNECT";

// events from blockchain
export const BLOCKCHAIN_EVENT = "BLOCKCHAIN_EVENT";

// Dealer
export const DEALER_JOIN = "DEALER_JOIN"; // join dealer room

// Universal Order
export const WALLET_CREATE_ORDER = "WALLET_CREATE_ORDER";
