/*
 * Author: yuanzhirong
 * Date: 2022-08-11 19:49:00
 * LastEditors: yuanzhirong
 * LastEditTime: 2022-08-29 17:41:41
 * Description:
 */
export function countReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "INCREASE":
      return { count: state.count + action.amount };
    case "DECREASE":
      return { count: state.count - action.amount };
    case "RESET":
      return { count: action.payload };
    default:
      return state;
  }
}
