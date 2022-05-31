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
  