var res = [];
var sortNums = (nums) => {
  let len = nums.length, pivot = nums[0];
  if (len === 1 || len === 0) {
    return nums;
  }
  let left = [], right = [];
  for(let i = 1; i < len; i++) {
    let num = nums[i];
    if (num <= pivot) {
      left.push(num);
    } else {
      right.push(num);
    }
  }
  return [...sortNums(left), pivot, ...sortNums(right)];
}
var sum4 = (nums, target) => {
  let arr = sortNums(nums);
  let first = 0,len = arr.length;
  let res = [];
  while(first < len - 3) {
    let num = arr[first];
    let second = first + 1;
    while(second < len - 2) {
      let num2 = arr[second];
      let left = second + 1, end = len - 1;
      while(left < end) {
        let num3 = arr[left], num4 = arr[end];
        let tot = num + num2 + num3 + num4;
        if (tot === target) {
          res.push([num, num2, num3, num4]);
          left++;
        } else if (tot > target) {
          end--;
        } else {
          left++;
        }
      }
      second++;
    }
    first++;
  }
  return res;
}
sum4([1,0,-1,0,-2,2], 0)