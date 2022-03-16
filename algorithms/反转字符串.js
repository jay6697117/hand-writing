// 方法1：双指针
// 时间复杂度 O(n) 空间复杂度 O(1)
function fn(str) {
  const n = str.length;
  const arr = str.split('');
  console.log('n:', n);
  console.log('arr', arr);

  for (let l = 0, r = n - 1; l < r; l++, r--) {
    [arr[l], arr[r]] = [arr[r], arr[l]];
  }

  return arr.join('');
}

console.log('输出:', fn('hello'));
