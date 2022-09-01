/*
 * Author: yuanzhirong
 * Date: 2022-08-26 10:33:51
 * LastEditors: yuanzhirong
 * LastEditTime: 2022-08-26 17:07:09
 * Description:
 */
import { call, put, takeEvery, take, fork } from "redux-saga/effects";

import CountService from "../services/count";

function* countResetHandle(action) {
  try {
    const res1 = yield call(CountService.reset, action.payload);
    yield put({ type: "RESET", payload: res1 });
  } catch (err) {
    yield put({ type: "RESET", payload: 0 });
  }
}

function* countSaga() {
  yield takeEvery("RESET_SAGA", countResetHandle);
}

export default countSaga;
