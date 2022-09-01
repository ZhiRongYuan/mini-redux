/*
 * Author: yuanzhirong
 * Date: 2022-08-11 21:41:41
 * LastEditors: yuanzhirong
 * LastEditTime: 2022-08-11 21:41:42
 * Description:
 */
export default function compose(...funcs) {
  if (funcs.length === 0) {
    return (arg) => arg;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(
    (a, b) =>
      (...args) =>
        a(b(...args))
  );
}
