function updateCount() {
  var count = 0;
  function getCount(param) {
    console.log('param:', param);
    count = param;
    console.log(count);
  }
  return getCount; //外部函数返回
}
var count = updateCount();
count(815); //815
count(816); //816
