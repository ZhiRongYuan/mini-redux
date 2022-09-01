/*
 * Author: yuanzhirong
 * Date: 2022-08-11 21:14:52
 * LastEditors: yuanzhirong
 * LastEditTime: 2022-08-26 16:22:59
 * Description:
 */
import { useCallback } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { useSelector, useDispatch } from "../react-redux";

const ReactReduxHookDemo = (props) => {
  const count = useSelector(({ countState }) => {
    return countState.count;
  });

  const dispatch = useDispatch();
  const increaseHandler = useCallback(() => {
    dispatch({ type: "INCREASE", amount: 2 });
  }, []);

  const decreaseHandler = useCallback(() => {
    dispatch({ type: "DECREASE", amount: 2 });
  }, []);

  const AsyncIncreaseHandler = useCallback(() => {
    dispatch((dispatch, getState) => {
      setTimeout(() => {
        console.log("update async state");
        dispatch({ type: "INCREASE", amount: 3 });
      }, 3000);
    });
  }, []);

  const SagaAsyncIncreaseHandler = useCallback(() => {
    dispatch({ type: "RESET_SAGA", payload: 10 });
  }, []);

  return (
    <div>
      <h3>ReactReduxHookDemo</h3>
      <button onClick={increaseHandler}>点击+2 ---- {count}</button>
      <button onClick={decreaseHandler}>点击-2 ---- {count}</button>
      <button onClick={AsyncIncreaseHandler}>异步+3 ---- {count}</button>
      <button onClick={SagaAsyncIncreaseHandler}>
        Saga异步 重置数据---- {count}
      </button>
    </div>
  );
};

export default ReactReduxHookDemo;
