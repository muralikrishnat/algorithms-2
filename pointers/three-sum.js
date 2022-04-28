console.clear();
var arr = [3, 4, 1, 6, 2];

function getSubArr(index, arr) {
    let tmpcount = 0;
    for (let i = 0, len = arr.length; i < len; i++) {
        if (index > 0 && index !== i && i < index) {
            if (Math.max(...arr.slice(i, index + 1)) === arr[index]) {
                tmpcount += 1;
            }
        }
        if (index !== index + i && index + i <= len) {
            if (Math.max(...arr.slice(index, index + i)) === arr[index]){
                tmpcount += 1;
            }
        }
    }
    return tmpcount;
}
let outArr = [];
for (let i = 0, len = arr.length; i < len; i++) {
    console.group(i);
    outArr.push(getSubArr(i, arr));
    console.groupEnd(i);
}
console.log(outArr);



var threeSum = function(nums) {
  let matchedSet = new Set();
  let arr = [];
  let len = nums.length;
  nums.sort((a, b) => a-b);
  if (nums[0] > 0){
    return [];
  }
  for(let i = 0; i < len - 2; i++) {
    let iNum = nums[i];
    
    let start = i + 1;
    let end = len - 1;
    while(start < end) {
      if (nums[start] + nums[end] < iNum * -1) {
        start++;
      } else if (nums[start] + nums[end] > iNum * -1) {
        end--;
      } else {
        let set = [nums[i], nums[start], nums[end]];
        set.sort((a, b) => a - b);
        let setKey = set[0] + ':' + set[1]+ ':' + set[2];
        if (!matchedSet.has(setKey)) {
          arr.push(set);
          matchedSet.add(setKey);
        }
        start++;
        end--;
      }
    }
  }
  return arr;
};

console.log(threeSum([ -4, -1, -1, 0, 1, 2 ]));
