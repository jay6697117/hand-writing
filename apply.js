/**
 *
 * @param {*} ctx 函数执行上下文this
 * @param {*} args  参数列表
 * @returns 函数执行的结果
 */
Function.prototype.myApply = function (ctx, args) {
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

  const fnName = Symbol('key');

  ctx[fnName] = this;

  const result = ctx[fnName](...args);
  console.log('result:', result)
  delete ctx[fnName];
  console.log('ctx 1:', ctx);
  return result;
};

function fn(name, sex) {
  console.log(this, name, sex);
  return { name, sex };
}

// fn.myApply(null, ['前端胖头鱼', 'boy']);
fn.myApply({ name: '前端胖头鱼', sex: 'boy' }, ['前端胖头鱼', 'boy']);
