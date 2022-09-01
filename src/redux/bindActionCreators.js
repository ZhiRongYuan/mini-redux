/*
 * Author: yuanzhirong
 * Date: 2022-08-11 21:42:01
 * LastEditors: yuanzhirong
 * LastEditTime: 2022-08-11 21:42:01
 * Description:
 */
function bindActionCreator(creator, dispatch) {
  return (...args) => dispatch(creator(...args));
}
export default function bindActionCreators(creators, dispatch) {
  let obj = {};

  for (const key in creators) {
    obj[key] = bindActionCreator(creators[key], dispatch);
  }

  return obj;
}
