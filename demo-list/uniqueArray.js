// 1. ... 扩展符
// console.log([...new Set([1, 1, 2, 2])]);

// 2.Array.from去重
// console.log(Array.from(new Set([1, 1, 2, 2])));

// 3. indexOf去重另一个版本
// const uniqueArray = array => {
//   return array.filter((item, index) => {
//     console.log('array.indexOf(item) === index:', array.indexOf(item) === index);
//     return array.indexOf(item) === index;
//   });
// };
// console.log(uniqueArray([1, 2, 2]));

// console.log([1, 2, 2].indexOf(2));

// 4. indexOf去重
// const uniqueArray1 = array => {
//   let result = [];

//   array.forEach((item, index) => {
//     console.log('result.indexOf(item):', item, result.indexOf(item));
//     if (result.indexOf(item) === -1) {
//       result.push(item);
//     }
//   });

//   return result;
// };

// console.log(uniqueArray1([1, 2, 2]));
