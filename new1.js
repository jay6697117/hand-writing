function create(fn, ...args) {
  console.log('args:', args)
  // 创建一个空的对象
  let obj = {};
  // 链接到原型
  obj.__proto__ = fn.prototype;
  // 绑定 this，执行构造函数
  let result = fn.apply(obj, args);
  console.log('result:', result)
  // 确保 new 出来的是个对象
  return typeof result === 'object' ? result : obj;
}

function Person(name, sex) {
  this.name = name;
  this.sex = sex;
  // return { a: 1, b: 2, c: 3, d: 4, e: 5 };
}

const p1 = create(Person, 'zjh', 33);
console.log('p1:', p1);
