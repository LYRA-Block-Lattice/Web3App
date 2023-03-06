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
export const WALLET_UNKNOWN_UNRECV = "WALLET_UNKNOWN_UNRECV";
export const WALLET_UNKNOWN_UNRECV_CLEAR = "WALLET_UNKNOWN_UNRECV_CLEAR";
export const WALLET_CHANGE_NETWORK = "WALLET_CHANGE_NETWORK";
export const WALLET_SEND = "WALLET_SEND";
export const WALLET_RECEIVE = "WALLET_RECEIVE";
export const WALLET_RECEIVED_BLOCK = "WALLET_RECEIVED_BLOCK";
export const WALLET_CLOSE = "WALLET_CLOSE";
export const WALLET_CLOSED = "WALLET_CLOSED";

// Mint
export const WALLET_MINT_TOKEN = "WALLET_MINT_TOKEN";
export const WALLET_MINT_TOKEN_OK = "WALLET_MINT_TOKEN_OK";
export const WALLET_MINT_NFT = "WALLET_MINT_NFT";
export const WALLET_MINT_NFT_OK = "WALLET_MINT_NFT_OK";
export const WALLET_MINT_TOT = "WALLET_MINT_TOT";
export const WALLET_MINT_TOT_OK = "WALLET_MINT_TOT_OK";
export const WALLET_PRINT_FIAT = "WALLET_PRINT_FIAT";
export const WALLET_PRINT_FIAT_OK = "WALLET_PRINT_FIAT_OK";

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
export const MARKET_GET_OWN_ORDERS = "MARKET_GET_OWN_ORDERS";
export const MARKET_GET_OWN_ORDERS_SUCCESS = "MARKET_GET_OWN_ORDERS_SUCCESS";
export const MARKET_GET_OWN_TRADES = "MARKET_GET_OWN_TRADES";
export const MARKET_GET_OWN_TRADES_SUCCESS = "MARKET_GET_OWN_TRADES_SUCCESS";
export const MARKET_GET_DEALER = "MARKET_GET_DEALER";
export const MARKET_GET_DEALER_OK = "MARKET_GET_DEALER_OK";
export const MARKET_GET_PRICES = "MARKET_GET_PRICES";
export const MARKET_GET_PRICES_SUCCESS = "MARKET_GET_PRICES_SUCCESS";
export const MARKET_GET_ORDER_BY_ID = "MARKET_GET_ORDER_BY_ID";
export const MARKET_GET_ORDER_BY_ID_SUCCESS = "MARKET_GET_ORDER_BY_ID_SUCCESS";
export const MARKET_UPLOAD_FILE = "MARKET_UPLOAD_FILE";
export const MARKET_UPLOAD_FILE_SUCCESS = "MARKET_UPLOAD_FILE_SUCCESS";

export const BLOCKCHAIN_FIND_DAO = "BLOCKCHAIN_FIND_DAO";
export const BLOCKCHAIN_FIND_DAO_OK = "BLOCKCHAIN_FIND_DAO_OK";

// events from blockchain
export const BLOCKCHAIN_EVENT = "BLOCKCHAIN_EVENT";

// Dealer
export const DEALER_INIT = "DEALER_INIT";
export const DEALER_INIT_OK = "DEALER_INIT_OK";
export const DEALER_CLOSE = "DEALER_CLOSE";
export const DEALER_CLOSED_OK = "DEALER_CLOSED_OK";
export const DEALER_EVENT = "DEALER_EVENT";
export const DEALER_JOIN_ROOM = "DEALER_JOIN_ROOM"; // join dealer room
export const DEALER_SEND_MESSAGE = "DEALER_SEND_MESSAGE";

// Universal Order
export const WALLET_CREATE_ORDER = "WALLET_CREATE_ORDER";
export const WALLET_CREATE_TRADE = "WALLET_CREATE_TRADE";
export const WALLET_DELIST_ORDER = "WALLET_DELIST_ORDER";
export const WALLET_CLOSE_ORDER = "WALLET_CLOSE_ORDER";
