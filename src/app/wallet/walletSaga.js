import { put, takeLatest, takeEvery, getContext } from "redux-saga/effects";
import { push } from "redux-first-history";
import { LyraCrypto } from "lyra-crypto";

import * as actionTypes from "../actionTypes";
import persist from "../lyra/persist";
import * as Dex from "../lyra/dexapi";
import * as marketApi from "../market/marketApi";

import {
  JsonRpcWebsocket,
  WebsocketReadyStates
} from "jsonrpc-client-websocket";

function* getBalance(action) {
  try {
    var wds = yield persist.checkData();
    if (wds === null || wds.network === null || wds.accountId === null) return;

    // const url = `https://${wds.network}.lyra.live/api/Node/GetLastBlock?AccountId=${wds.accountId}`;
    // const response = yield fetch(url);
    // var json = yield response.text();
    // var j = JSON.parse(json);
    try {
      const ret = yield marketApi.getBalance(wds.accountId);

      yield put({
        type: actionTypes.WALLET_BALANCE,
        payload: {
          accountId: wds.accountId,
          nftcnt: ret.data.filter((a) => a.Domain == "nft").length,
          totcnt: ret.data.filter((a) => a.Domain == "tot" || a.Domain == "svc")
            .length,
          balance: ret.data.find((a) => a.Ticker == "LYR").Balance ?? 0,
          usdt: ret.data.find((a) => a.Ticker == "tether/USDT").Balance ?? 0,
          balances: ret.data

          // TODO: set unreceived args
        }
      });
    } catch (error) {
      yield put({
        type: actionTypes.WALLET_BALANCE,
        payload: {
          accountId: wds.accountId,
          nftcnt: 0,
          totcnt: 0,
          balance: 0,
          usdt: 0,
          balances: []
        }
      });

      throw error;
    }
  } catch (error) {
    yield put({
      type: actionTypes.STORE_ERROR,
      payload: error
    });
  }
}

function* receive(action) {
  try {
    const accountId = action.payload;

    const ws = yield createWS(accountId);

    const balanceResp = yield ws.call("Receive", [accountId]);
    yield put({
      type: actionTypes.WALLET_GET_BALANCE,
      payload: balanceResp.result
    });
    yield put({
      type: actionTypes.WSRPC_CALL_SUCCESS,
      payload: { tag: action.payload.tag }
    });
  } catch (error) {
    yield put({
      type: actionTypes.WSRPC_CALL_FAILED,
      payload: {
        error: error,
        tag: action.payload.tag
      }
    });
  }
}

function* send(action) {
  try {
    const ws = yield createWS(action.payload.accountId);

    const balanceResp = yield ws.call("Send", [
      action.payload.accountId,
      action.payload.amount,
      action.payload.destaddr,
      action.payload.tokenname
    ]);
    // yield put({
    //   type: actionTypes.WALLET_BALANCE,
    //   payload: balanceResp.result
    // });
    yield put({
      type: actionTypes.WSRPC_CALL_SUCCESS,
      payload: { tag: action.payload.tag }
    });
    yield ws.close();
  } catch (error) {
    yield put({
      type: actionTypes.WSRPC_CALL_FAILED,
      payload: {
        error: error.message ?? error.error.message,
        tag: action.payload.tag
      }
    });
  }
}

function* createWS(accountId) {
  var url = "wss://testnet.lyra.live/api/v1/socket";
  const network = process.env.REACT_APP_NETWORK_ID;
  if (network === "mainnet") url = "wss://mainnet.lyra.live/api/v1/socket";
  if (network === "devnet") url = "wss://devnet.lyra.live/api/v1/socket";
  console.log(`creating ws for ${network} using url ${url}`);

  const requestTimeoutMs = 30000;

  const ws = new JsonRpcWebsocket(url, requestTimeoutMs, (error) => {
    console.log("json ws websocket error", error);
    // reconnect
    //dispatch({ type: actionTypes.WSRPC_CLOSED, payload: error.message });
  });

  try {
    yield ws.open();
  } catch (error) {
    console.log("error ws.open");
  }

  if (ws === null)
    // race condition
    return;

  ws.on("Notify", (news) => {
    console.log("on notify: " + news.catalog);
    switch (news.catalog) {
      case "Receiving":
        dispatch({
          type: actionTypes.WSRPC_SERVER_NOTIFY_RECV,
          payload: news.content
        });
        break;
      case "Settlement":
        dispatch({
          type: actionTypes.WSRPC_SERVER_NOTIFY_SETTLEMENT,
          payload: news.content
        });
        break;
      default:
        break;
    }
    console.log("Got news notify", news);
  });

  ws.on("Sign", (hash, msg, accountId) => {
    console.log("Signing " + hash + " of " + msg + " for " + accountId);

    try {
      const userToken = JSON.parse(sessionStorage.getItem("token"));
      var signt = LyraCrypto.Sign(msg, userToken.pvt);
      console.log("Signature", signt);

      return ["der", signt];
    } catch (err) {
      console.log("Error sign message", err);
      return ["err", err.toString()];
    }
  });

  try {
    const response = yield ws.call("Status", ["3.6.6.0", network]);
    yield put({ type: actionTypes.WSRPC_STATUS_SUCCESS, payload: response });

    // we do all event by the events api
    //yield ws.call("Monitor", [accountId]);

    // and balance
    // const balanceResp = yield ws.call("Balance", [accountId]);
    // yield put({
    //   type: actionTypes.WALLET_BALANCE,
    //   payload: balanceResp.result
    // });
  } catch (error) {
    yield put({ type: actionTypes.WSRPC_STATUS_FAILED, payload: error });
  }

  return ws;
  //yield put({ type: actionTypes.WSRPC_CREATED });
}

function* dexSignIn(action) {
  try {
    const { data } = yield Dex.signIn(action.payload);

    yield put({ type: actionTypes.DEX_SIGNIN_OK, payload: data });

    yield put(push("/swap"));
  } catch (error) {
    console.log(error);
    yield put({
      type: actionTypes.DEX_ERROR,
      payload: error.response ? error.response.data.message : error.message
    });
  }
}

function* dexSignUp(action) {
  try {
    // yield put({ type: actionTypes.DEX_ERROR, payload: "something wrong!!!" });
    // return;

    const { data } = yield Dex.signUp(action.payload);

    yield put({ type: actionTypes.DEX_SIGNUP_OK, payload: data });

    yield put(push("/swap"));
  } catch (error) {
    console.log(error);
    yield put({
      type: actionTypes.DEX_ERROR,
      payload: error.response ? error.response.data.message : error.message
    });
  }
}

function* mintToken(action) {
  try {
    //dispatch = yield getContext("dispatch");
    const ws = yield createWS(action.payload.accountId);

    const balanceResp = yield ws.call("Token", [
      action.payload.accountId,
      action.payload.name,
      action.payload.domain,
      action.payload.supply
    ]);
    yield put({
      type: actionTypes.WALLET_RECEIVE,
      payload: balanceResp.result
    });
    yield put({
      type: actionTypes.WSRPC_CALL_SUCCESS,
      payload: { tag: action.payload.tag }
    });
  } catch (error) {
    yield put({
      type: actionTypes.WSRPC_CALL_FAILED,
      payload: {
        error: error.message ?? error.error.message,
        tag: action.payload.tag
      }
    });
  }
}

function* mintNFT(action) {
  try {
    //dispatch = yield getContext("dispatch");
    const ws = yield createWS(action.payload.accountId);

    const balanceResp = yield ws.call("MintNFT", [
      action.payload.accountId,
      action.payload.name,
      action.payload.description,
      action.payload.supply,
      action.payload.metadataUrl
    ]);
    yield put({
      type: actionTypes.WALLET_RECEIVE,
      payload: balanceResp.result
    });
    yield put({
      type: actionTypes.WSRPC_CALL_SUCCESS,
      payload: { tag: action.payload.tag }
    });
  } catch (error) {
    yield put({
      type: actionTypes.WSRPC_CALL_FAILED,
      payload: {
        error: error.message ?? error.error.message,
        tag: action.payload.tag
      }
    });
  }
}

function* printFiat(action) {
  try {
    //dispatch = yield getContext("dispatch");
    const ws = yield createWS(action.payload.accountId);

    const balanceResp = yield ws.call("PrintFiat", [
      action.payload.accountId,
      action.payload.ticker,
      action.payload.amount
    ]);
    yield put({
      type: actionTypes.WALLET_RECEIVE,
      payload: balanceResp.result
    });
    yield put({
      type: actionTypes.WSRPC_CALL_SUCCESS,
      payload: { tag: action.payload.tag }
    });
  } catch (error) {
    yield put({
      type: actionTypes.WSRPC_CALL_FAILED,
      payload: {
        error: error.message ?? error.error.message,
        tag: action.payload.tag
      }
    });
  }
}

function* createOrder(action) {
  try {
    const ws = yield createWS(action.payload.accountId);

    const balanceResp = yield ws.call("CreateOrder", [
      action.payload.accountId,
      JSON.stringify(action.payload.order)
    ]);
    console.log("createOrder", balanceResp);
    yield put({
      type: actionTypes.WSRPC_CALL_SUCCESS,
      payload: balanceResp
    });
  } catch (error) {
    yield put({
      type: actionTypes.WSRPC_CALL_FAILED,
      payload: {
        error: error.message ?? error.error.message,
        tag: action.payload.tag
      }
    });
  }
}

function* createTrade(action) {
  try {
    const ws = yield createWS(action.payload.accountId);

    const balanceResp = yield ws.call("CreateTrade", [
      action.payload.accountId,
      JSON.stringify(action.payload.trade)
    ]);
    console.log("createTrade", balanceResp);
    yield put({
      type: actionTypes.WSRPC_CALL_SUCCESS,
      payload: balanceResp
    });
  } catch (error) {
    yield put({
      type: actionTypes.WSRPC_CALL_FAILED,
      payload: {
        error: error.message ?? error.error.message,
        tag: action.payload.tag
      }
    });
  }
}

export default function* walletSaga() {
  console.log("walletSaga is running.");

  yield takeLatest(actionTypes.WALLET_GET_BALANCE, getBalance);
  yield takeEvery(actionTypes.WSRPC_CLOSED, createWS);
  yield takeEvery(actionTypes.WALLET_RECEIVE, receive);
  yield takeEvery(actionTypes.WALLET_SEND, send);

  // DeX
  yield takeEvery(actionTypes.DEX_SIGNIN, dexSignIn);
  yield takeEvery(actionTypes.DEX_SIGNUP, dexSignUp);

  // Mint
  yield takeEvery(actionTypes.WALLET_MINT_TOKEN, mintToken);
  yield takeEvery(actionTypes.WALLET_MINT_NFT, mintNFT);
  yield takeEvery(actionTypes.WALLET_PRINT_FIAT, printFiat);

  // UniOrder
  yield takeEvery(actionTypes.WALLET_CREATE_ORDER, createOrder);
  yield takeEvery(actionTypes.WALLET_CREATE_TRADE, createTrade);
}
