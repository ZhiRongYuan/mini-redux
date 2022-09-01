/*
 * Author: yuanzhirong
 * Date: 2022-08-25 19:33:14
 * LastEditors: yuanzhirong
 * LastEditTime: 2022-08-26 14:10:48
 * Description:
 */
const CountService = {
  reset: (amount) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(amount);
      }, 2000);
    });
  },
};

export default CountService;
