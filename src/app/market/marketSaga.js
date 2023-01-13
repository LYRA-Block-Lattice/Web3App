import { put, takeLatest, takeEvery, getContext } from "redux-saga/effects";
import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import { LyraCrypto } from "lyra-crypto";
import * as actionTypes from "../actionTypes";
import * as marketApi from "./marketApi";

let connection;

function* getOrders(action) {
  const orders = yield marketApi.fetchOrders();
  yield put({
    type: actionTypes.MARKET_GET_ORDERS_SUCCESS,
    payload: orders.data
  });
}

function* getDealer(action) {
  const brief = yield marketApi.fetchDealer();
  yield put({
    type: actionTypes.MARKET_GET_DEALER_OK,
    payload: {
      AccountId: brief.data.AccountId,
      Name: brief.data.Name
    }
  });
}

function* findDao(action) {
  const dao = yield marketApi.searchDao(action.payload);
  yield put({
    type: actionTypes.BLOCKCHAIN_FIND_DAO_OK,
    payload: dao.data
  });
}

function* setupDealerEvents(action) {
  const url = `https://dealer${process.env.REACT_APP_NETWORK_ID}.lyra.live/hub`;
  console.log(
    `"Setup dealer events SignalR for account ${action.payload.AccountId} with... `,
    url
  );

  if (connection) {
    try {
      connection.stop();
    } catch (error) {
      console.log("SignalR error", error);
    }
    connection = undefined;
  }

  if (connection === undefined) {
    try {
      connection = new HubConnectionBuilder()
        .withUrl(url)
        // .withUrl(url, {
        //   transport: signalR.HttpTransportType.WebSockets,
        //   skipNegotiation: true
        // })
        .withAutomaticReconnect()
        .build();

      yield connection.start();

      const userToken = JSON.parse(sessionStorage.getItem("token"));
      var ret = yield marketApi.lastServiceHash();
      var signt = LyraCrypto.Sign(ret.data, userToken.pvt);

      yield connection.send("Join", {
        UserAccountID: action.payload.accountId,
        Signature: signt,
        SignType: "der"
      });

      connection.on("OnEvent", async (message) => {
        console.log("Dealer SignalR OnEvent", message);
        await put({ type: actionTypes.BLOCKCHAIN_EVENT, payload: message });
      });
    } catch (error) {
      console.log("SignalR error", error);
      connection = undefined;
    }
  }
}

export default function* marketSaga() {
  console.log("marketSaga is running.");

  // every time the user open wallet, we need to setup the SignalR connection
  yield takeEvery(actionTypes.WALLET_OPEN_DONE, setupDealerEvents);

  yield takeEvery(actionTypes.MARKET_GET_ORDERS, getOrders);
  yield takeEvery(actionTypes.BLOCKCHAIN_FIND_DAO, findDao);
  yield takeEvery(actionTypes.MARKET_GET_DEALER, getDealer);
}
