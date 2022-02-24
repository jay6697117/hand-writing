// https://github.com/mqyqingfeng/Blog/issues/11
/**
 *
 * @param {*} ctx 函数执行上下文this
 * @param  {...any} args 参数列表
 * @returns 函数执行的结果
 */
Function.prototype.myCall = function (ctx, ...args) {
  console.log('ctx 0:', ctx);
  console.log('args:', args);
  console.log('this:', this);
  console.log('this === fn:', this === fn);
  // ctx为空情况兼容
  if (!ctx) {
    // 判断是window环境还是node环境，让ctx为空情况下赋值window/global
    ctx = typeof window !== 'undefined' ? window : global;
  }

  // 暴露处理 ctx有可能传非对象
  ctx = Object(ctx);
  console.log('ctx 1:', ctx);
  const fnName = Symbol('key');
  console.log('fnName:', fnName);
  ctx[fnName] = this;
  console.log('ctx 2:', ctx);
  const result = ctx[fnName](...args);
  console.log('result:', result);
  delete ctx[fnName];
  console.log('ctx 3:', ctx);
  return result;
};

function fn(name, sex) {
  console.log('this:', this);
  console.log('name:', name);
  console.log('sex:', sex);
  console.log('----------------------------');
  return 'fn执行成功';
}

// fn.myCall(null, '前端胖头鱼1', 'boy1');
fn.myCall({ name: '前端胖头鱼2', sex: 'boy2' }, '前端胖头鱼2', 'boy2');
