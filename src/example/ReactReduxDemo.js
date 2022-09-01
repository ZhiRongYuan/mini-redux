/*
 * Author: yuanzhirong
 * Date: 2022-08-10 15:08:27
 * LastEditors: yuanzhirong
 * LastEditTime: 2022-08-12 18:17:32
 * Description:
 */
import { Component } from "react";
// import { connect } from "react-redux";
import { connect } from "../react-redux";

const ReactReduxDemo = (props) => {
  const { count, dispatch, increaseHandler } = props;
  return (
    <div>
      <h3>ReactReduxDemo</h3>
      <button onClick={increaseHandler}>increaseHandler:{count}</button>
      <button
        onClick={() => {
          dispatch({ type: "DECREASE", amount: 1 });
        }}
      >
        dispatch: {count}
      </button>
    </div>
  );
};

//mapStateToProps mapDispatchToProps
export default connect(
  ({ countState }) => {
    return {
      count: countState.count,
    };
  },
  (dispatch) => {
    return {
      dispatch,
      increaseHandler: () => dispatch({ type: "INCREASE", amount: 2 }),
      decreaseHandler: () => dispatch({ type: "DECREASE", amount: 2 }),
    };
  }
)(ReactReduxDemo);
