new Promise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    console.log(2);
    // resolve();
  });
  resolve();
})
  .then(() => {
    console.log(3);
  })
  .then(res0 => {
    console.log('res0:', res0);
    const p = new Promise((resolve, reject) => {
      console.log(4);
      // resolve();
    });
    return p.then(res2 => {
      console.log('res2:', res2);
      //promise，没执行
      console.log(5);
    });
  })
  .then(res1 => {
    console.log('res1:', res1);
    console.log(6);
  });
console.log(7);
