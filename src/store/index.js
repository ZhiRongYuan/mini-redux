/*
 * Author: yuanzhirong
 * Date: 2022-08-10 15:08:28
 * LastEditors: yuanzhirong
 * LastEditTime: 2022-08-29 17:43:34
 * Description:
 */
// import { createStore, applyMiddleware, combineReducers } from "redux";
import { countReducer } from "../reducers/countReducer";
import { numberReducer } from "../reducers/numberReducer";
import { createStore, applyMiddleware, combineReducers } from "../redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga/rootSaga";
// import thunk from "redux-thunk";
// import logger from "redux-logger";

//创建saga中间件
const sagaMiddleware = createSagaMiddleware();

// const store = createStore(countReducer);

// 创建store
const store = createStore(
  combineReducers({
    countState: countReducer,
    numberState: numberReducer,
  }),
  // applyMiddleware(thunk, logger1)
  applyMiddleware(thunk, sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;

function logger1({ getState, dispatch }) {
  return (next) => (action) => {
    console.log("p", getState());
    const newState = next(action);
    console.log("n", getState());
    return newState;
  };
}

function logger2({ getState, dispatch }) {
  return (next) => (action) => {
    console.log("1");
    const newState = next(action);
    console.log("2");
    return newState;
  };
}

function thunk({ getState, dispatch }) {
  return function (next) {
    return function (action) {
      console.log("a");
      if (typeof action === "function") {
        return action(dispatch, getState);
      }
      next(action);
    };
  };
  // return (next) => (action) => {
  //   console.log("a");
  //   if (typeof action === "function") {
  //     return action(dispatch, getState);
  //   }
  //   next(action);
  // };
}
