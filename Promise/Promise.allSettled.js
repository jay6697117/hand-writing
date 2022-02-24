const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('成功1...'), 3000);
});

const p2 = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error('失败2...')), 2000);
});

const p3 = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error('失败3...')), 1000);
});

Promise.allSettled([p1, p2, p3])
  .then(res => {
    console.log('res:', res);
    console.log('res[1].reason:', res[1].reason);
    console.log('res[1].reason.message:', res[1].reason.message);
    console.log('res[1].reason.stack:', res[1].reason.stack);
    console.log(`res[1].reason.hasOwnProperty('message'):`, res[1].reason.hasOwnProperty('message'));
    console.log(`res[1].reason.hasOwnProperty('stack'):`, res[1].reason.hasOwnProperty('stack'));
  })
  .catch(err => {
    console.log('err:', err);
  });
