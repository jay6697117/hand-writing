const getType = param => {
  const r = Object.prototype.toString.call(param);
  return r.replace(/\[object\s(.*?)\]/, '$1').toLowerCase();
};

/*
// 备注: 为啥要加call
1. Object.prototype.toString.call(1)
结果: '[object Number]'
改变this指针指向

2. Object.prototype.toString(1)
结果: '[object Object]'
*/

// console.log(getType());
// console.log(getType(null));
// console.log(getType(1));
// console.log(getType('前端胖头鱼'));
// console.log(getType(true));
// console.log(getType(Symbol('前端胖头鱼')));
// console.log(getType({}));
// console.log(getType([]));

console.log('({}).toString():', ({}).toString())
