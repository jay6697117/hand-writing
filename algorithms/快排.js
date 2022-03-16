// https://www.ruanyifeng.com/blog/2011/04/quicksort_in_javascript.html
const quickSort = array => {
  const length = array.length;
  if (length <= 1) {
    return array;
  }

  console.log('array 0:', array);
  console.log('length', length);
  const midIndex = Math.floor(length / 2);
  const midValue = array.splice(midIndex, 1)[0];
  console.log('array 1:', array);
  console.log('length', length);
  let leftArray = [];
  let rightArray = [];
  let index = 0;

  while (index < length - 1) {
    const curValue = array[index];

    if (curValue <= midValue) {
      leftArray.push(curValue);
    } else {
      rightArray.push(curValue);
    }

    index++;
  }

  // return quickSort(leftArray).concat([ midValue ], quickSort(rightArray))
  return quickSort(leftArray).concat(midValue, quickSort(rightArray));
};

const arr = [-10, 10, 1, 34, 5, 1];

console.log(quickSort(arr));
