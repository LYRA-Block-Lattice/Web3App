import { put, takeLatest, takeEvery, getContext } from "redux-saga/effects";
import { push } from "redux-first-history";
import { LyraApi } from "../blockchain/lyra-api";
import { BlockchainAPI } from "../blockchain/blockchain-api";

import * as actionTypes from "../actionTypes";
import persist from "../lyra/persist";
import * as Dex from "../lyra/dexapi";
import { ContractTypes, LyraCrypto } from "../blockchain";
import { ReceiveTransferBlock, UniOrder } from "../blockchain/blocks/block";
import { getHoldType } from "../blockchain/blocks/meta";

export function getWallet() {
  const userToken = JSON.parse(sessionStorage.getItem("token"));
  return new LyraApi(BlockchainAPI.networkid, userToken.pvt);
}

function* getBalance(action) {
  try {
    var wds = yield persist.checkData();
    if (wds === null || wds.network === null || wds.accountId === null) return;

    // const url = `https://${wds.network}.lyra.live/api/Node/GetLastBlock?AccountId=${wds.accountId}`;
    // const response = yield fetch(url);
    // var json = yield response.text();
    // var j = JSON.parse(json);
    try {
      const ret = yield BlockchainAPI.getBalance(wds.accountId);

      yield put({
        type: actionTypes.WALLET_BALANCE,
        payload: {
          accountId: wds.accountId,
          nftcnt: ret.filter((a) => a.Balance > 0 && a.Domain == "nft").length,
          totcnt: ret.filter(
            (a) => a.Balance > 0 && (a.Domain == "tot" || a.Domain == "svc")
          ).length,
          balance: ret.find((a) => a.Ticker == "LYR").Balance ?? 0,
          usdt: ret.find((a) => a.Ticker == "tether/USDT")?.Balance ?? 0,
          balances: ret

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

      //throw error;
    }

    // get unreceived info
    const unrecv = yield BlockchainAPI.getUnreceived(wds.accountId);
    if (unrecv.resultCode == 0) {
      yield put({
        type: actionTypes.WALLET_UNKNOWN_UNRECV
      });
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

    const wallet = getWallet();
    if (wallet.accountId !== action.payload) {
      throw new Error("Invalid account id");
    }

    const balanceResp = yield wallet.receive((block) => {
      console.log("receive block generated.");
    });
    yield put({
      type: actionTypes.WALLET_UNKNOWN_UNRECV_CLEAR
    });
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
    const wallet = getWallet();
    if (wallet.accountId !== action.payload.accountId) {
      throw new Error("Invalid account id");
    }

    const balanceResp = yield wallet.send(
      action.payload.amount,
      action.payload.destaddr,
      action.payload.tokenname
    );
    // yield put({
    //   type: actionTypes.WALLET_BALANCE,
    //   payload: balanceResp.result
    // });
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

function* dexSignIn(action) {
  try {
    const { data } = yield Dex.signIn(action.payload);

    yield put({ type: actionTypes.DEX_SIGNIN_OK, payload: data });

    yield put(push("/swap"));
  } catch (error) {
    console.log(error);
    yield put({
      type: actionTypes.DEX_ERROR,
      payload: error.response ? error.response.message : error.message
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
      payload: error.response ? error.response.message : error.message
    });
  }
}

function* mintToken(action) {
  try {
    const wallet = getWallet();
    if (wallet.accountId !== action.payload.accountId) {
      throw new Error("Invalid account id");
    }

    const balanceResp = yield wallet.mintToken(
      action.payload.name,
      action.payload.domain,
      action.payload.desc,
      8,
      action.payload.supply,
      true,
      undefined,
      undefined,
      undefined,
      ContractTypes.Cryptocurrency,
      undefined
    );
    yield put({
      type: actionTypes.WALLET_RECEIVE,
      payload: action.payload.accountId
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
    const wallet = getWallet();
    if (wallet.accountId !== action.payload.accountId) {
      throw new Error("Invalid account id");
    }

    const balanceResp = yield wallet.mintNFT(
      action.payload.name,
      action.payload.description,
      action.payload.supply,
      action.payload.metadataUrl
    );
    yield put({
      type: actionTypes.WALLET_RECEIVE,
      payload: action.payload.accountId
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

function* mintTOT(action) {
  try {
    const wallet = getWallet();
    if (wallet.accountId !== action.payload.accountId) {
      throw new Error("Invalid account id");
    }

    const balanceResp = yield wallet.mintTOT(
      action.payload.type,
      action.payload.name,
      action.payload.description,
      action.payload.supply,
      action.payload.tradeSecretSignature
    );
    yield put({
      type: actionTypes.WALLET_RECEIVE,
      payload: action.payload.accountId
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
    const wallet = getWallet();
    if (wallet.accountId !== action.payload.accountId) {
      throw new Error("Invalid account id");
    }

    const balanceResp = yield wallet.printFiat(
      action.payload.ticker,
      action.payload.amount
    );
    yield put({
      type: actionTypes.WALLET_RECEIVE,
      payload: action.payload.accountId
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
    const wallet = getWallet();
    if (wallet.accountId !== action.payload.accountId) {
      throw new Error("Invalid account id");
    }

    var order = new UniOrder();
    order.daoId = action.payload.order.daoid;
    order.dealerId = action.payload.order.dealerid;
    order.offerby = getHoldType(action.payload.order.selltoken);
    order.offering = action.payload.order.selltoken;
    order.bidby = getHoldType(action.payload.order.gettoken);
    order.biding = action.payload.order.gettoken;
    order.amount = action.payload.order.count;
    order.price = action.payload.order.price;
    order.eqprice = action.payload.order.eqprice;
    order.limitMax = action.payload.order.limitmax;
    order.limitMin = action.payload.order.limitmin;
    order.payBy = action.payload.order.payby;
    order.cltamt = action.payload.order.collateral;

    const balanceResp = yield wallet.createOrder(order);
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

function* delistOrder(action) {
  try {
    const wallet = getWallet();
    if (wallet.accountId !== action.payload.accountId) {
      throw new Error("Invalid account id");
    }

    const balanceResp = yield wallet.delistOrder(
      action.payload.daoId,
      action.payload.orderId
    );
    console.log("delistOrder", balanceResp);
    yield put({
      type: actionTypes.WSRPC_CALL_SUCCESS,
      payload: balanceResp
    });
    yield put({
      type: MARKET_GET_OWN_ORDERS,
      payload: { accountId: action.payload.accountId }
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

function* closeOrder(action) {
  try {
    const wallet = getWallet();
    if (wallet.accountId !== action.payload.accountId) {
      throw new Error("Invalid account id");
    }

    const balanceResp = yield wallet.closeOrder(
      action.payload.daoId,
      action.payload.orderId
    );
    console.log("delistOrder", balanceResp);
    yield put({
      type: actionTypes.WSRPC_CALL_SUCCESS,
      payload: balanceResp
    });
    yield put({
      type: MARKET_GET_OWN_ORDERS,
      payload: { accountId: action.payload.accountId }
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
    const wallet = getWallet();
    if (wallet.accountId !== action.payload.accountId) {
      throw new Error("Invalid account id");
    }

    const balanceResp = yield wallet.createTrade(action.payload.trade);
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
  //yield takeEvery(actionTypes.WSRPC_CLOSED, createWS);
  yield takeEvery(actionTypes.WALLET_RECEIVE, receive);
  yield takeEvery(actionTypes.WALLET_SEND, send);

  // DeX
  yield takeEvery(actionTypes.DEX_SIGNIN, dexSignIn);
  yield takeEvery(actionTypes.DEX_SIGNUP, dexSignUp);

  // Mint
  yield takeEvery(actionTypes.WALLET_MINT_TOKEN, mintToken);
  yield takeEvery(actionTypes.WALLET_MINT_NFT, mintNFT);
  yield takeEvery(actionTypes.WALLET_MINT_TOT, mintTOT);
  yield takeEvery(actionTypes.WALLET_PRINT_FIAT, printFiat);

  // UniOrder
  yield takeEvery(actionTypes.WALLET_CREATE_ORDER, createOrder);
  yield takeEvery(actionTypes.WALLET_DELIST_ORDER, delistOrder);
  yield takeEvery(actionTypes.WALLET_CLOSE_ORDER, closeOrder);
  yield takeEvery(actionTypes.WALLET_CREATE_TRADE, createTrade);
}
