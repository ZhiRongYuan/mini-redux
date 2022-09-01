/*
 * Author: yuanzhirong
 * Date: 2022-08-12 17:15:59
 * LastEditors: yuanzhirong
 * LastEditTime: 2022-08-12 17:28:48
 * Description:
 */
const createStore = (reducer) => {
  let state;
  let listeners = [];
  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(state, action);
    listeners.map((func) => func());
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
};

export default createStore;
