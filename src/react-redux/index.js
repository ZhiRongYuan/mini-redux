/*
 * Author: yuanzhirong
 * Date: 2022-08-11 20:23:14
 * LastEditors: yuanzhirong
 * LastEditTime: 2022-08-26 14:09:40
 * Description:
 */
import React, { useContext, useEffect, useLayoutEffect, useState } from "react";

const Context = React.createContext();

export function Provider({ store, children }) {
  return <Context.Provider value={store}>{children}</Context.Provider>;
}

export const connect =
  (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => (props) => {
    const store = useContext(Context);
    const { getState, dispatch, subscribe } = store;

    const [state, setState] = useState(mapStateToProps(getState()));

    let dispatchProps = { dispatch };
    dispatchProps = mapDispatchToProps(dispatch);

    useLayoutEffect(() => {
      const unsubscribe = subscribe(() => {
        const newState = mapStateToProps(getState());
        setState(newState);
      });
      return () => {
        unsubscribe();
      };
    }, []);

    return (
      <WrappedComponent
        {...props}
        dispatch={dispatch}
        {...state}
        {...dispatchProps}
      />
    );
  };

export function useSelector(selector) {
  const store = useContext(Context);
  const [state, setState] = useState(selector(store.getState()));
  const { subscribe } = store;
  useEffect(() => {
    const unsubscribe = subscribe(() => {
      setState(selector(store.getState()));
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return state;
}

export function useDispatch() {
  const store = useContext(Context);
  const { dispatch } = store;
  return dispatch;
}
