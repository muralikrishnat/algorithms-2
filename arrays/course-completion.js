/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
 var canFinish = function(numCourses, prerequisites) {
    let pLen = prerequisites.length, len = numCourses;
    let adj = [];
    for(let i = 0; i < pLen; i++) {
      let [c, p] = prerequisites[i];
      let l = [];
      if(adj[c]) {
        l = adj[c];
      }
      l.push(p);
      adj[c] = l;
    }
  
    var res = true;
    let dp = [];
    var completeCourse = (index, path) => {
      if(dp[index]) {
        return dp[index];
      }
      if(!adj[index]) {
        dp[index] = true;
        return true;
      }
      let l = adj[index];
      let r = true, len = l.length;
      
      for(let i = 0; i < len; i++) {
        if(path[l[i]]) {
          r = false;
          break;
        }
        let np = {...path};
        np[l[i]] = true;
        let pr = dp[l[i]];
        if(!pr) {
          pr = completeCourse(l[i], np);
        }
        if(!(r && pr)) {
          r = false;
          break;
        }
      }
      dp[index] = r;
      return r;
    };
    for(let i = 0; i < len; i++) {
      let pre = adj[i];
      if(pre) {
        let p = {};
        p[i] = true;
        let cRes = dp[i];
        if(!dp[i]) {
          cRes = completeCourse(i, {...p});
        }
        if(!(res && cRes)) {
          res = false;
          break;
        }
      }
    }
    return res;
  };
  
  var input = [
    [0,3],
    [1,0],
    [1,2],
    [2,0],
    [3,1],
    [3,2]
  ];
  canFinish(4, input);
  
  // (() => {
  //   let arr = [true, true, false];
  //   let res = true;
  //   for(let i = 0; i < arr.length; i++) {
  //     if(!(res && arr[i])) {
  //       res = false;
  //       break;
  //     }
  //   }
  //   console.log(res);
  // })();
  /*
  
  */


  /**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
 var findOrder = function(numCourses, prerequisites) {
  let pre = {}, pLen = prerequisites.length;
  for(let i = 0; i < pLen; i++) {
    let [c, p] = prerequisites[i];
    let l = [], len = 0;
    if(pre[c]) {
      l = pre[c].l;
      len = pre[c].len;
    }
    l.push(p);
    len += 1;
    pre[c] = {l, len};
  }
  let done = [], dp = {};
  var finishC = (index, path) => {
    if(dp[index]) {
      return dp[index];
    }
    if(!pre[index]) {
      dp[index] = true;
      done.push(index);
      return dp[index];
    }
    let {l, len} = pre[index], r = true
    for(let i = 0; i < len; i++) {
      let cI = l[i];
      if(path[cI]) {
        r = false;
        break;
      } else {
        let nP = {...path};
        nP[l[i]] = true;
        if(r && finishC(l[i], nP)) {
        } else {
          r = false;
          break;
        }
      }
    }
    dp[index] = r;
    
    if(r) {
      done.push(index);  
    }
    return dp[index];
  };
  let res = true;
  for(let i = 0; i < numCourses; i++) {
    if(res && finishC(i, {})) {
    } else {
      res = false;
      break;
    }
  }
  return done.length === numCourses ? done: [];
};

findOrder(3, [[0,1],[0,2],[1,2]]);
// findOrder(4,[[1,0],[2,0],[3,1],[3,2]])
// findOrder(1,[])

/*
  pre
    0 = Done
    1 = [0]
    2 = [0]
    3 = [1,2]

*/
  