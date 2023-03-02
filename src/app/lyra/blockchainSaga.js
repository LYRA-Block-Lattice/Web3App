import { eventChannel } from "redux-saga";
import { call, put, takeEvery, take, race } from "redux-saga/effects";
import { HubConnectionBuilder } from "@microsoft/signalr";
import * as actionTypes from "../actionTypes";
/*
function createSignalRChannel(connection) {
  return eventChannel((emit) => {
    const onEvent = (message) => {
      //console.log("SignalR OnEvent", message);
      emit({ type: actionTypes.BLOCKCHAIN_EVENT, payload: message });
    };
    connection.on("OnEvent", onEvent);

    const unsubscribe = () => {
      connection.off("OnEvent", onEvent);
    };

    return unsubscribe;
  });
}

function* watchSignalR(connection) {
  const channel = yield call(createSignalRChannel, connection);
  while (true) {
    const action = yield take(channel);
    yield put(action);
  }
}

function* setupSignalR() {
  console.log("Setup Lyra blockchain events SignalR");
  const url = `https://${process.env.REACT_APP_NETWORK_ID}.lyra.live/events`;
  console.log("Setup Lyra blockchain events SignalR with... ", url);
  try {
    const connection = new HubConnectionBuilder()
      .withUrl(url)
      .withAutomaticReconnect()
      .build();

    yield connection.start();

    const { cancel } = yield race({
      task: call(watchSignalR, connection),
      cancel: take(actionTypes.SIGNALR_DISCONNECT)
    });

    if (cancel) {
      console.log("SignalR channel cancelled.");
      yield call(() => connection.stop());
    }
  } catch (error) {
    console.log("SignalR error", error);
  }
}
*/
export default function* blockchainSaga() {
  //console.log("blockchainSaga is running.");
  //yield takeEvery(actionTypes.SIGNALR_CONNECT, setupSignalR);
}
