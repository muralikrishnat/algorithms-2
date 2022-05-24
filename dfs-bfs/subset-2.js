let out = ((nums) => {
    let res = [[]], len = nums.length;
    nums.sort((a, b) => a-b);
    let resSet = new Set();
    var k = (n) => { return n.reduce((a, b) => b +'-'+ a,''); };
    var dfs = (index, cur) => {
      if (index < len) {
        let prev=null;
        for(let i = index; i < len; i++) {
          let num = nums[i];
          if (prev !== num) {
            let n = [...cur, num];
            if (!resSet.has(k(n))) {
              res.push(n);
              resSet.add(k(n));
            }
            dfs(i + 1, n);
          }
          prev = num;
        }
      }
    }
    dfs(0, []);
    return res;
  })([1,2,3,4,0]);
  console.log(out);
  