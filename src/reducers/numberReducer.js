/*
 * Author: yuanzhirong
 * Date: 2022-08-11 20:16:27
 * LastEditors: yuanzhirong
 * LastEditTime: 2022-08-11 20:21:05
 * Description:
 */
export function numberReducer(state = 0, action) {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "DEDUCT":
      return state - 1;
    default:
      return state;
  }
}
