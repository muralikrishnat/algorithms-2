console.clear();
var longestConsecutive = function(nums) {
  var map = {};
  var max = 0;
  var start = 0;
  var end = 0;
  var num = 0;
  var len = nums.length;
  for (var i = 0; i < len; i++) {
    num = nums[i];
    if (map[num]) continue;
    start = map[num - 1] ? map[num - 1].start : num;
    end = map[num + 1] ? map[num + 1].end : num;
    map[num] = { start: num, end: num };
    map[start].end = end;
    map[end].start = start;
    max = Math.max(end - start + 1, max);
  }
  return max;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));

var minSubArrayLen = function(target, nums) {
  let len = nums.length, sum = 0;
  let l =0, r = 0, res = Infinity;
  for(let i = 0; i < len; i++) {
    let num = nums[i];
    sum += num;
    while(sum >= target){
      res = Math.min(i - l + 1, res);
      sum = sum - nums[l];
      l++;
    }
  }
  console.log(res);
};


minSubArrayLen(7, [2,3,1,2,4,3]);