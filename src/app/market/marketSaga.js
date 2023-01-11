import { put, takeLatest, takeEvery, getContext } from "redux-saga/effects";
import * as actionTypes from "../actionTypes";

function* getOrders(action) {
  const market = yield getContext("Market");
  const orders = yield market.fetchOrders();
  yield put({
    type: actionTypes.MARKET_GET_ORDERS_SUCCESS,
    payload: orders.data
  });
}

function* getDealer(action) {
  const market = yield getContext("Market");
  const brief = yield market.fetchDealer();
  yield put({
    type: actionTypes.MARKET_GET_DEALER_OK,
    payload: brief
  });
}

function* findDao(action) {
  const bc = yield getContext("Blockchain");
  const dao = yield bc.searchDao(action.payload);
  yield put({
    type: actionTypes.BLOCKCHAIN_FIND_DAO_OK,
    payload: dao.data
  });
}

export default function* marketSaga() {
  console.log("marketSaga is running.");

  yield takeEvery(actionTypes.MARKET_GET_ORDERS, getOrders);
  yield takeEvery(actionTypes.BLOCKCHAIN_FIND_DAO, findDao);
}
