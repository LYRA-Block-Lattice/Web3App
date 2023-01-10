import { all, call, spawn } from "redux-saga/effects";
import marketSaga from "./market/marketSaga";
import persistSaga from "./storage/persistSaga";
import walletSaga from "./wallet/walletSaga";

export default function* rootSaga() {
  console.log("rootSaga is running.");
  const sagas = [persistSaga, walletSaga, marketSaga];

  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.log(e);
          }
        }
      })
    )
  );
}
