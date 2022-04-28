console.clear();
function maxCandies(arr, k) {
  // Write your code here
  let eatCandies = 0;
  arr.sort((a,b) => b - a);
  for(let i = 0;i < k; i++) {
    console.log('before: ', arr);
    eatCandies += arr[0];
    arr[0] = Math.floor(arr[0]/2);
    arr.sort((a,b) => b - a);
  }
  return eatCandies;
}

maxCandies([2, 1, 7, 4, 2], 3);