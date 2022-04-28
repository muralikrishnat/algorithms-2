
var combinationSum = function(candidates, target) {
    let res = [], len = candidates.length;
    
    let que = [];
    for(let i=0; i < len; i++) {
      let cand = candidates[i];
      que.push({
        cand,
        index: i,
        arr: [cand],
        sum: cand
      });
    }
    while(que.length > 0) {
      console.count('while');
      let { cand, index, arr, sum } = que.shift();
      if (sum === target) {
        res.push(arr);
      } else if (sum < target){
        for(let i = index; i < len; i++) {
          console.count('while');
          let candR = candidates[i];
          let newArr = [...arr, candR];
          if (sum + candR <= target) {
            que.push({
              cand: candR,
              index: i,
              arr: newArr,
              sum: sum + candR
            });
          }
        }
      }
    }
    return res;
  };
  
  /*
    similar to coin denomination logic
  
    parse all the candidates
    and find the sum with same number (maximum )
  */
  console.log('bfs: ', combinationSum([2,3,6,7], 7));
  
  
  function getTarget(arr, target) {
    let len = arr.length;
    let res = [];
  
    let loopIndex = 0, loopLimit = 10;
    var dfs = (start, cur = [], total) => {
      console.count('dfs');
      if (total > target) {
        return;
      }
      if (total === target) {
        res.push(cur);
        return;
      }
      if(start < len) {
        let num = arr[start];
        dfs(start, [...cur, num], total + num);
        dfs(start + 1, cur, total);
      }
    }
    dfs(0, [], 0)
    return res;
  }
  
  console.log('dfs: ', getTarget([2, 3, 6, 7], 7));