import { put, takeLatest, takeEvery, getContext } from "redux-saga/effects";
import { push } from "redux-first-history";
import { LyraCrypto } from "../blockchain/lyra-crypto";
import AES from "crypto-js/aes";
import CryptoJS from "crypto-js";

import * as actionTypes from "../actionTypes";
import persist from "../lyra/persist";

function* checkWalletExists() {
  const data = yield persist.checkData();

  if (data?.accountId !== undefined) {
    yield put({ type: actionTypes.WALLET_GET_BALANCE });
  }
  // whatever, get prices quote
  yield put({ type: actionTypes.MARKET_GET_PRICES });
  yield put({ type: actionTypes.STORE_INIT_DONE, payload: data });
}

function* createWallet(action) {
  var w = LyraCrypto.GenerateWallet();
  var encData = AES.encrypt(w.privateKey, action.payload.password);

  var val = yield persist.checkData();

  let wds;
  if (val === null) {
    wds = {
      pref: {
        network: process.env.REACT_APP_NETWORK_ID
      },
      wallets: [
        {
          network: process.env.REACT_APP_NETWORK_ID,
          name: action.payload.name,
          accountId: w.accountId,
          data: encData.toString()
        }
      ]
    };
  } else {
    if (val.wallets.find((a) => a.name == action.payload.name)) {
      yield put({
        type: actionTypes.STORE_ERROR,
        payload: "Wallet name already exists"
      });

      return;
    }

    val.wallets.push({
      network: process.env.REACT_APP_NETWORK_ID,
      name: action.payload.name,
      accountId: w.accountId,
      data: encData.toString()
    });
    wds = val;
  }
  yield persist.setData(wds);
  yield put({ type: actionTypes.WALLET_CREATE_DONE, payload: wds });

  yield put(push("/"));
}

function* restoreWallet(action) {
  var actId = LyraCrypto.GetAccountIdFromPrivateKey(action.payload.privateKey);
  var encData = AES.encrypt(action.payload.privateKey, action.payload.password);

  var val = yield persist.checkData();

  let wds;
  if (val === null) {
    wds = {
      pref: {
        network: process.env.REACT_APP_NETWORK_ID
      },
      wallets: [
        {
          network: process.env.REACT_APP_NETWORK_ID,
          name: action.payload.name,
          accountId: actId,
          data: encData.toString()
        }
      ]
    };
  } else {
    if (val.wallets.find((a) => a.name == action.payload.name)) {
      yield put({
        type: actionTypes.STORE_ERROR,
        payload: "Wallet name already exists"
      });

      return;
    }

    val.wallets.push({
      name: action.payload.name,
      accountId: actId,
      data: encData.toString()
    });
    wds = val;
  }

  yield persist.setData(wds);
  yield put({ type: actionTypes.WALLET_RESTORE_DONE, payload: wds });
  yield put(push("/openwallet"));
}

function* removeWallet(action) {
  yield persist.removeData();
  yield put({ type: actionTypes.WALLET_REMOVE_DONE });
}

function* openWallet(action) {
  try {
    var pdata = yield persist.checkData();
    var wallets = pdata.wallets;

    var exitsWallet = wallets.find((a) => a.name == action.payload.name);
    var decData = AES.decrypt(exitsWallet.data, action.payload.password);
    if (decData === undefined) throw new Error("private key is invalid.");

    const prvKey = decData.toString(CryptoJS.enc.Utf8);

    if (!LyraCrypto.isPrivateKeyValid(prvKey)) {
      throw new Error("private key is invalid.");
    } else {
      yield put({
        type: actionTypes.WALLET_OPEN_DONE,
        payload: {
          network: exitsWallet.network ?? process.env.REACT_APP_NETWORK_ID,
          name: action.payload.name,
          accountId: exitsWallet.accountId,
          privateKey: prvKey
        }
      });

      // update storage
      var wds = yield persist.checkData();
      wds.network = exitsWallet.network ?? process.env.REACT_APP_NETWORK_ID;
      wds.name = action.payload.name;
      wds.accountId = exitsWallet.accountId;
      yield persist.setData(wds);

      // yield put({
      //   type: actionTypes.WSRPC_CREATE,
      //   payload: {
      //     network: pdata.pref.network,
      //     accountId: exitsWallet.accountId
      //   }
      // });
      sessionStorage.setItem(
        "token",
        JSON.stringify({ pass: action.payload.password, pvt: prvKey })
      );

      yield put(push(action.payload.ret ?? "/"));
    }
  } catch (err) {
    yield put({ type: actionTypes.WALLET_OPEN_FAILED, payload: err });
  }
}

function* closeWallet() {
  console.log("closing wallet");
  sessionStorage.setItem("token", null);

  yield put({ type: actionTypes.WALLET_CLOSED });
  yield put(push("/"));
}

function* savePref(action) {
  var pdata = yield persist.getData();
  pdata.pref.network = action.payload.network;
  yield persist.setData(pdata);
}

export default function* persistSaga() {
  console.log("persistSaga is running.");
  yield takeLatest(actionTypes.STORE_INIT, checkWalletExists);
  yield takeEvery(actionTypes.WALLET_CREATE, createWallet);
  yield takeEvery(actionTypes.WALLET_RESTORE, restoreWallet);
  yield takeEvery(actionTypes.WALLET_REMOVE, removeWallet);
  yield takeEvery(actionTypes.WALLET_OPEN, openWallet);
  yield takeEvery(actionTypes.WALLET_CLOSE, closeWallet);
  yield takeEvery(actionTypes.STORE_SAVE_PREF, savePref);
}
