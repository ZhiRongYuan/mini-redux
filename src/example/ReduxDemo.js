/*
 * Author: yuanzhirong
 * Date: 2022-08-11 19:06:30
 * LastEditors: yuanzhirong
 * LastEditTime: 2022-08-29 17:43:24
 * Description:
 */
import React from "react";
import store from "../store";

class App extends React.Component {
  constructor() {
    super();
    console.log(store.getState());
    this.state = {
      // count: store.getState().count,
      count: store.getState().countState.count,
      number: store.getState().numberState,
    };
  }

  componentWillMount() {
    this.unsubscribe = store.subscribe(() => {
      // console.log(store.getState());
      this.setState({
        // count: store.getState().count,
        count: store.getState().countState.count,
        number: store.getState().numberState,
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div>
        <h3>ReduxDemo</h3>
        <p>{this.state.count}</p>
        <p>{this.state.number}</p>
        <button onClick={() => store.dispatch({ type: "INCREASE", amount: 2 })}>
          +
        </button>
        <button onClick={() => store.dispatch({ type: "DECREASE", amount: 2 })}>
          -
        </button>
        <button onClick={() => store.dispatch({ type: "ADD" })}>+</button>
      </div>
    );
  }
}

export default App;
