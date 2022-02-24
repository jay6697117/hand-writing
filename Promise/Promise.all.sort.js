// @目标月薪100k-请叫我菜鸡-张小灰
// 实现一个 run() 函数，可以批量异步的执行请求，但最终得到的结果顺序要和输入顺序保持一致（不能使用 Promise.all()
const isPromise = value => {
  if ((typeof value === 'object' && value !== null) || typeof value === 'function') {
    if (typeof value.then === 'function') {
      return true;
    } else {
      return false;
    }
  }
};

function run(fetchs = []) {
  // 实现 run 函数

  return new Promise((resolve, reject) => {
    let arr = [];
    let index = 0; //解决多个异步的并发问题，要使用计数器

    function processData(key, value) {
      arr[key] = value;
      index += 1;
      if (index === fetchs.length) {
        resolve(arr);
      }
    }

    for (let i = 0; i < fetchs.length; i++) {
      let current = fetchs[i];
      if (isPromise(current)) {
        current.then(data => {
          processData(i, data);
        }, reject);
      } else {
        processData(i, current);
      }
    }
  });
}

function delay(str) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(str);
    }, Math.random() * 1000);
  });
}

// 批量执行 5 个请求
run([delay('A'), delay('B'), delay('C'), delay('D'), delay('E')]).then(res => {
  console.log(res); // ["A", "B", "C", "D", "E"] 结果和输入顺序保持一致
});
