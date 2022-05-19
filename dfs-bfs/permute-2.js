var permute = function(nums) {
    nums.sort((a, b) => a - b);
    let len = nums.length;
    if (len === 0) return [];
    if (len === 1) return [nums];
    if (len === 2) {
      let [n1, n2] = nums;
      if (n1 === n2) {
        return [[n1, n2]];
      }
      return [[n1, n2], [n2, n1]];
    }
    let res = [];
    var dfs = (cur, rest) => {
      let restLen = rest.length, curLen = cur.length;
      if (curLen === len) {
        res.push(cur);
        return;
      }
      let prev= null;
      for(let i = 0; i < restLen; i++) {
        let num = rest[i];
        if (prev !== num) {
          let rest2 = [...rest.slice(0, i), ...rest.slice(i + 1)];
          dfs([...cur, num], rest2);
          prev = num;
        }
      }
    };
    dfs([], nums);
    return res;
  };
  
  console.log(permute([1, 2, 2]));