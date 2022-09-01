/*
 * Author: yuanzhirong
 * Date: 2022-08-26 10:33:51
 * LastEditors: yuanzhirong
 * LastEditTime: 2022-08-26 14:10:42
 * Description:
 */
import { all } from "redux-saga/effects";

import countSaga from "./countSaga";

export default function* rootSaga() {
  yield all([countSaga()]);
}
