import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import { put, takeLatest, takeEvery, getContext } from "redux-saga/effects";
import * as actionTypes from "../actionTypes";

let connection;

function* Setup(action) {
  const url = `https://${process.env.REACT_APP_NETWORK_ID}.lyra.live/events`;
  //const url = `https://localhost:4504/events`;
  console.log("Setup SignalR with... ", url);
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
      connection.on("OnEvent", (message) => {
        console.log("SignalR OnEvent", message);
      });
    } catch (error) {
      console.log("SignalR error", error);
      connection = undefined;
    }
  }
}

export default function* blockchainSaga() {
  console.log("blockchainSaga is running.");

  yield takeEvery(actionTypes.SIGNALR_CONNECT, Setup);
}
