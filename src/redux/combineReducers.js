/*
 * Author: yuanzhirong
 * Date: 2022-08-11 19:47:48
 * LastEditors: yuanzhirong
 * LastEditTime: 2022-08-11 20:15:49
 * Description:
 */
const combineReducers = (reducers) => {
  return (state = {}, action) => {
    const newState = {};
    for (let key in reducers) {
      newState[key] = reducers[key](state[key], action);
    }
    return newState;
  };
};
export default combineReducers;
