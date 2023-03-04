import {
  put,
  call,
  take,
  takeLatest,
  takeEvery,
  getContext,
  ChannelTakeEffect
} from "redux-saga/effects";
import { EventChannel, eventChannel } from "redux-saga";
import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import { LyraCrypto } from "../blockchain/lyra-crypto";
import * as actionTypes from "../actionTypes";
import {
  BlockchainAPI,
  IDealerInfo,
  IDealerOrder,
  IOrdersResult,
  IOwnerOrder,
  IOwnerTrade
} from "../blockchain/blockchain-api";
import {
  MultiBlockAPIResult,
  SimpleJsonAPIResult
} from "../blockchain/blocks/meta";

import { NotUndefined } from "@redux-saga/types";

let connection: HubConnection | undefined = undefined;

interface IAction {
  type: string;
  payload: any;
}

function* getOrders(action: IAction) {
  const orders: IOrdersResult = yield BlockchainAPI.fetchOrders(
    action.payload.cat
  );
  yield put({
    type: actionTypes.MARKET_GET_ORDERS_SUCCESS,
    payload: {
      cat: action.payload.cat,
      data: orders
    }
  });
}

function* getOwnOrders(action: IAction) {
  const orders: IOwnerOrder[] = yield BlockchainAPI.fetchOrdersByOwner(
    action.payload.accountId
  );
  yield put({
    type: actionTypes.MARKET_GET_OWN_ORDERS_SUCCESS,
    payload: orders
  });
}

function* getOwnTrades(action: IAction) {
  const trades: IOwnerTrade[] = yield BlockchainAPI.fetchTradesByOwner(
    action.payload.accountId
  );
  yield put({
    type: actionTypes.MARKET_GET_OWN_TRADES_SUCCESS,
    payload: trades
  });
}

function* getOrderById(action: IAction) {
  const order: IDealerOrder = yield BlockchainAPI.fetchOrderById(
    action.payload.orderId
  );
  yield put({
    type: actionTypes.MARKET_GET_ORDER_BY_ID_SUCCESS,
    payload: order
  });
}

function* getDealer(action: IAction) {
  const brief: IDealerInfo = yield BlockchainAPI.fetchDealer();
  yield put({
    type: actionTypes.MARKET_GET_DEALER_OK,
    payload: {
      AccountId: brief.AccountId,
      ServiceId: brief.ServiceId,
      Name: brief.Name
    }
  });
}

function* getPrices(action: IAction) {
  const quoteRet: SimpleJsonAPIResult = yield BlockchainAPI.getPrices();
  if (quoteRet.resultCode === 0) {
    yield put({
      type: actionTypes.MARKET_GET_PRICES_SUCCESS,
      payload: {
        prices: JSON.parse(quoteRet.jsonString)
      }
    });
  } else {
    console.log("getPrices failed", quoteRet.resultCode);
  }
}

function* findDao(action: IAction) {
  const ret: MultiBlockAPIResult = yield BlockchainAPI.searchDao(
    action.payload
  );
  const daos = ret.getDaos();
  yield put({
    type: actionTypes.BLOCKCHAIN_FIND_DAO_OK,
    payload: daos
  });
}

function* setupDealerEvents(action: IAction) {
  const url = `https://dealer${process.env.REACT_APP_NETWORK_ID}.lyra.live/hub`;
  if (action.payload?.accountId)
    console.log(
      `"Setup dealer events SignalR for account ${action.payload.accountId} with... `,
      url
    );
  else
    console.log(`"Setup dealer events SignalR without accountId with... `, url);

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

      const userToken = JSON.parse(sessionStorage.getItem("token")!);
      if (userToken?.pvt) {
        var ret: string = yield BlockchainAPI.lastServiceHash();
        var signt = LyraCrypto.Sign(ret, userToken.pvt);

        yield connection.send("Join", {
          UserAccountID: action.payload.accountId,
          Signature: signt,
          SignType: "p1393"
        });
      }

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

// this function creates an event channel from a given event hub
// Setup subscription to incoming `OnEvent` events
function createDealerEventsChannel(hubConnection: HubConnection) {
  // `eventChannel` takes a subscriber function
  // the subscriber function takes an `emit` argument to put messages onto the channel
  return eventChannel((emit) => {
    const dealerEventHandler = (event: any) => {
      // puts event payload into the channel
      // this allows a Saga to take this payload from the returned channel
      emit(event);
    };

    // const errorHandler = (errorEvent) => {
    //   // create an Error object and put it into the channel
    //   emit(new Error(errorEvent.reason));
    // };

    // setup the subscription
    hubConnection.on("OnEvent", async (message) => {
      console.log("Dealer SignalR OnEvent", message);
      dealerEventHandler(message);
    });

    // the subscriber must return an unsubscribe function
    // this will be invoked when the saga calls `channel.close` method
    const unsubscribe = () => {
      hubConnection.stop();
    };

    return unsubscribe;
  });
}

function* setup(action: IAction) {
  console.log("Dealer events SignalR setup: ", action);
  connection = yield setupDealerEvents(action);
  if (connection) {
    const channel: EventChannel<NotUndefined> = yield call(
      createDealerEventsChannel,
      connection
    );
    try {
      while (true) {
        // take(END) will cause the saga to terminate by jumping to the finally block
        let event: ChannelTakeEffect<{} | null> = yield take(channel);
        yield put({ type: actionTypes.DEALER_EVENT, payload: event });
      }
    } finally {
      console.log("dealer event channel terminated");
    }
  }
}

export default function* marketSaga() {
  console.log("marketSaga is running.");
  // get price quote on startup

  // every time the user open wallet, we need to setup the SignalR connection
  yield takeEvery(actionTypes.DEALER_INIT, setup);

  yield takeEvery(actionTypes.MARKET_GET_PRICES, getPrices);
  yield takeEvery(actionTypes.MARKET_GET_ORDERS, getOrders);
  yield takeEvery(actionTypes.MARKET_GET_OWN_ORDERS, getOwnOrders);
  yield takeEvery(actionTypes.MARKET_GET_OWN_TRADES, getOwnTrades);
  yield takeEvery(actionTypes.MARKET_GET_ORDER_BY_ID, getOrderById);
  yield takeEvery(actionTypes.BLOCKCHAIN_FIND_DAO, findDao);
  yield takeEvery(actionTypes.MARKET_GET_DEALER, getDealer);
}
