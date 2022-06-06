var combinationSum3 = function(k, n) {
    let res = [];
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let comb = [], sum = 0, mSum = 0;
    var dp = {};
    for(let i = 0; i < k; i++) {
      sum += i + 1;
      mSum += 9 - i;
      comb.push(i+1);
    }
    if(n < sum) {
      return [];
    }
    if(mSum < n) {
      return [];
    }
   
  
    var dfs = (index, start, nc, sum) => {
      if(index === k) {
        if(sum === n) {
          res.push(nc);
        }
      }
      if (index < k) {
        for(let i = start; i <= 9 - ( k - index - 1); i++) {
          let n2 = [...nc];
          n2.push(i);
          if(sum + i <= n) {
            dfs(index + 1, i + 1, n2, sum + i); 
          }
        }
      }
    };
    dfs(0, comb[0], [], 0);
    return res;
  };
  
  console.log(combinationSum3(3,99));