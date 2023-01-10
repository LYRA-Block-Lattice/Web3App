import { put, takeLatest, takeEvery, getContext } from "redux-saga/effects";
import { push } from "redux-first-history";
import * as actionTypes from "../actionTypes";

function* getOrders(action) {
  // const market = yield getContext("market");
  // const orders = yield market.getOrders(action.payload);
  // yield put({ type: actionTypes.MARKET_ORDERS, payload: orders });
}

export default function* marketSaga() {
  console.log("marketSaga is running.");

  yield takeLatest(actionTypes.MARKET_GET_ORDERS, getOrders);
}
