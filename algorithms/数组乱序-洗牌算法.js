// const shuffleFn = arr => {
//   let res = [];
//   let random;
//   while (arr.length > 0) {
//     // console.log('arr.length:', arr.length)
//     random = parseInt(Math.random() * arr.length);
//     console.log('random:', random);
//     res.push(arr.splice(random, 1)[0]);
//   }
//   return res;
// };
// const res = shuffleFn([2, 3, 6, 2, 6, 2]); // [6, 3, 2, 2, 2, 6]
// console.log('res:', res);

// 3.Fisher–Yates 洗牌算法 最优的真随机
// 就是将数组从后向前遍历，然后将当前元素与随机位置的元素进行交换。
// 只需要通过一次遍历即可将数组随机打乱顺序，性能极为优异~
function shuffleFn(arr) {
  let m = arr.length;
  while (m > 0) {
    let index = Math.floor(Math.random() * m);
    m -= 1;
    console.log('m index:', m, index);
    console.log('------------');
    [arr[m], arr[index]] = [arr[index], arr[m]];
    // const temp = arr[m];
    // arr[m] = arr[index];
    // arr[index] = temp;
  }
  return arr;
}

const res = shuffleFn([1, 2, 3, 4, 5, 6]);
console.log('res:', res);
