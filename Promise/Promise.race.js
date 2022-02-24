const random = Math.floor(Math.random() * 6);
console.log('random:', random);

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('成功...'), random * 1000);
});

const p = Promise.race([
  p1,
  new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error('失败...')), 3000);
  })
]);

p.then(console.log).catch(console.error);
