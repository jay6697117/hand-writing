const value = new Promise((resolve, reject) => {
  resolve(123);
}).then(res => res);
console.log('value', value);
console.log('结果:', Promise.resolve(value));
