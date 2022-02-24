// Promise.any([
//   fetch('https://json-server-demo-rho.vercel.app/users').then(res => res.json()),
//   fetch('https://v8.dev/blog').then(() => 'blog'),
//   fetch('https://v8.dev/docs').then(() => 'docs')
// ])
//   .then(res => {
//     // 只要有一个 fetch() 请求成功
//     console.log('res:', res);
//   })
//   .catch(err => {
//     // 所有三个 fetch() 全部请求失败
//     console.log('err:', err);
//   });

// (async () => {
//   const promises = ['https://json-server-demo-rho.vercel.app/users', 'https://v8.dev/blog', 'https://v8.dev/docs'];
//   try {
//     const res = await Promise.any([
//       // fetch('https://json-server-demo-rho.vercel.app/users').then(res => res.json()),
//       // fetch('https://json-server-demo-rho.vercel.app/users').then(res => 'home'),
//       // fetch('https://json-server-demo-rho.vercel.app/users').then(() => 'blog'),
//       // fetch('https://json-server-demo-rho.vercel.app/companies').then(() => 'docs')
//       fetch('https://v8.dev/').then(() => 'home'),
//       fetch('https://v8.dev/blog').then(() => 'blog'),
//       fetch('https://v8.dev/docs').then(() => 'docs')
//     ]);
//     console.log('res:', res);
//   } catch (err) {
//     console.dir('对象1');
//     console.dir(err);
//     console.dir('对象2');
//     console.log('err.message:', err.message);
//   }
// })();

const random = Math.floor(Math.random() * 6);
console.log('random:', random);

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('成功1...'), random * 1000);
  // setTimeout(() => reject(new Error('失败1...')), random * 1000);
});

const p2 = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error('失败2...')), 3000);
});

const p = Promise.any([p1, p2]);

p.then(console.log).catch(console.error);
