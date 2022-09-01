/*
 * Author: yuanzhirong
 * Date: 2022-08-11 19:07:44
 * LastEditors: yuanzhirong
 * LastEditTime: 2022-08-26 15:44:33
 * Description:
 */
export default function createStore(reducer, enhancer) {
  if (enhancer) {
    return enhancer(createStore)(reducer);
  }

  let state;
  let listeners = [];

  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  }

  function subscribe(listener) {
    listeners.push(listener);

    return () => {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  }

  dispatch({ type: "@@redux/INIT" });

  return {
    getState,
    dispatch,
    subscribe,
  };
}
