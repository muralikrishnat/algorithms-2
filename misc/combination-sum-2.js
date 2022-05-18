var qs = (nums, target) => {
    let len = nums.length;
    if (len === 0 || len === 1) return nums;
    let l = [], r = [], s = 0, p = nums[s];
    while(p > target) {
      s++;
      p = nums[s];
    }
    if (!p) return [];
    for(let i = s + 1; i < len; i++) {
      let num = nums[i];
      if (num <= target) {
        if (num <= p) {
          l.push(num);
        } else {
          r.push(num);
        }
      }
    }
    return [...qs(l, target), p, ...qs(r, target)];
  }
  var combSum = (arr, target) => {
    let sNums = qs(arr, target);
    let res = [], len2 = sNums.length;
    var dfs = (cur, sum, rest) => {
      if (sum === target) {
        res.push(cur);
      }
      if (sum > target) {
        return;
      }
      if (rest.length === 0) return;
      let len = rest.length;
      let prev = null;
      for(let i = 0; i < len; i++) {
        let num = rest[i];
        if (prev !== num) {
          let rest2 = rest.slice(i + 1);
          dfs([...cur, num], sum + num, rest2);
        }
        prev = num;
      }
    }
    dfs([], 0, sNums);
    return res;
  }
  console.log(combSum([2,5,2,1,2],5));