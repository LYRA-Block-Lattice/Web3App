import { put, takeLatest, takeEvery, getContext } from "redux-saga/effects";
import { push } from "redux-first-history";
import * as actionTypes from "../actionTypes";

function* getOrders(action) {
  const market = yield getContext("Market");
  const orders = yield market.fetchOrders();
  yield put({
    type: actionTypes.MARKET_GET_ORDERS_SUCCESS,
    payload: orders.data
  });
}

export default function* marketSaga() {
  console.log("marketSaga is running.");

  yield takeLatest(actionTypes.MARKET_GET_ORDERS, getOrders);
}
