import {
  put,
  call,
  take,
  takeLatest,
  takeEvery,
  getContext
} from "redux-saga/effects";
import { eventChannel } from "redux-saga";
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

// this function creates an event channel from a given event hub
// Setup subscription to incoming `OnEvent` events
function createDealerEventsChannel(hubConnection) {
  // `eventChannel` takes a subscriber function
  // the subscriber function takes an `emit` argument to put messages onto the channel
  return eventChannel((emit) => {
    const dealerEventHandler = (event) => {
      // puts event payload into the channel
      // this allows a Saga to take this payload from the returned channel
      emit(event);
    };

    // const errorHandler = (errorEvent) => {
    //   // create an Error object and put it into the channel
    //   emit(new Error(errorEvent.reason));
    // };

    // setup the subscription
    connection.on("OnEvent", async (message) => {
      console.log("Dealer SignalR OnEvent", message);
      dealerEventHandler(JSON.parse(message.json));
    });

    // the subscriber must return an unsubscribe function
    // this will be invoked when the saga calls `channel.close` method
    const unsubscribe = () => {
      connection.close();
    };

    return unsubscribe;
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

      // connection.on("OnEvent", async (message) => {
      //   console.log("Dealer SignalR OnEvent", message);
      //   await put({ type: actionTypes.BLOCKCHAIN_EVENT, payload: message });
      // });
    } catch (error) {
      console.log("SignalR error", error);
      connection = undefined;
    }
  }

  return connection;
}

function* setup(action) {
  const connection = yield setupDealerEvents(action);
  if (connection) {
    const channel = yield call(createDealerEventsChannel, connection);
    try {
      while (true) {
        // take(END) will cause the saga to terminate by jumping to the finally block
        let event = yield take(channel);
        yield put({ type: actionTypes.BLOCKCHAIN_EVENT, payload: event });
      }
    } finally {
      console.log("dealer event channel terminated");
    }
  }
}

export default function* marketSaga() {
  console.log("marketSaga is running.");

  // every time the user open wallet, we need to setup the SignalR connection
  yield takeEvery(actionTypes.WALLET_OPEN_DONE, setup);

  yield takeEvery(actionTypes.MARKET_GET_ORDERS, getOrders);
  yield takeEvery(actionTypes.BLOCKCHAIN_FIND_DAO, findDao);
  yield takeEvery(actionTypes.MARKET_GET_DEALER, getDealer);
}
