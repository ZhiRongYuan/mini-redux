/*
 * Author: yuanzhirong
 * Date: 2022-08-10 15:08:28
 * LastEditors: yuanzhirong
 * LastEditTime: 2022-08-29 17:43:38
 * Description:
 */
// eslint-disable-next-line

import logo from "./logo.svg";
import ReduxDemo from "./example/ReduxDemo";
import ReactReduxDemo from "./example/ReactReduxDemo";
import ReactReduxHookDemo from "./example/ReactReduxHookDemo";

import "./App.css";

function App() {
  return (
    <div className="App">
      <ReduxDemo />
      <ReactReduxDemo />
      <ReactReduxHookDemo />
    </div>
  );
}

export default App;
