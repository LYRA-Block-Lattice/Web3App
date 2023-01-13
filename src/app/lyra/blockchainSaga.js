import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import { put, takeLatest, takeEvery, getContext } from "redux-saga/effects";
import * as actionTypes from "../actionTypes";

let connection;

function* Setup(action) {}

export default function* blockchainSaga() {
  console.log("blockchainSaga is running.");
  /*
  const url = `https://${process.env.REACT_APP_NETWORK_ID}.lyra.live/events`;
  console.log("Setup Lyra blockchain events SignalR with... ", url);
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
      connection.on("OnEvent", async (message) => {
        console.log("SignalR OnEvent", message);
        await put({ type: actionTypes.BLOCKCHAIN_EVENT, payload: message });
      });
    } catch (error) {
      console.log("SignalR error", error);
      connection = undefined;
    }
  }*/

  yield takeEvery(actionTypes.SIGNALR_CONNECT, Setup);
}
