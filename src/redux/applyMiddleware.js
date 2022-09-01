/*
 * Author: yuanzhirong
 * Date: 2022-08-11 21:41:31
 * LastEditors: yuanzhirong
 * LastEditTime: 2022-08-26 21:37:51
 * Description:
 */
import compose from "./compose";

export default function applyMiddleware(...middlewares) {
  return (createStore) => (reducer) => {
    const store = createStore(reducer);
    let dispatch = store.dispatch;

    const midAPI = {
      getState: store.getState,
      dispatch: (action) => dispatch(action),
    };

    const middlewareChain = middlewares.map((middleware) => middleware(midAPI));
    dispatch = compose(...middlewareChain)(store.dispatch);

    return {
      ...store,
      dispatch,
    };
  };
}
