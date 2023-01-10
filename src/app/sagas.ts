import { all, call, spawn } from "redux-saga/effects";
import persistSaga from "./api/persistSaga";
import walletSaga from "./api/walletSaga";

export default function* rootSaga() {
  console.log("rootSaga is running.");
  const sagas = [persistSaga, walletSaga];

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
