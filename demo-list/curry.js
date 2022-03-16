function curry(fn) {
  let judge = (...args) => {
    console.log('args', args);
    if (args.length == fn.length) return fn(...args);
    return (...arg) => {
      console.log('arg:', arg);
      return judge(...args, ...arg);
    };
  };
  return judge;
}

function add(a, b, c) {
  return a + b + c;
}

let addCurry = curry(add);
console.log('addCurry(1)(2)(3):', addCurry(1)(2)(3));
