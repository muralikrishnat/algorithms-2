var arr = [1, 2, 4, 6, 3, 7, 8];

var findMissingNumbers = (arr) => {
  let n = arr.length;
  let sumTotal = ((n + 1) * (n + 2)) / 2;
  for(let i =0; i < arr.length;i++) {
    sumTotal -= arr[i];
  }
  return sumTotal;
}

console.log(findMissingNumbers(arr));