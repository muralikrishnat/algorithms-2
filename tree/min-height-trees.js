/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
 var findMinHeightTrees = function(n, edges) {
    let ed = {}, elen = edges.length;
    for(let i = 0; i < elen; i++) {
      let [n1, n2] = edges[i];
      if(!ed[n1]) {
        ed[n1] = [];
      }
      ed[n1].push(n2);
      if(!ed[n2]) {
        ed[n2] = [];
      }
      ed[n2].push(n1);
    }
    var depth = (ni, level, vis) => {
      let lst = ed[ni];
      if(!ed[ni]) return level;
      let len = lst.length;
      if (len === 0) return level;
      let nLevel = level;
      for(let i = 0; i < len; i++) {
        let n3 = lst[i];
        if(!vis[n3]) {
          let nVis = {...vis};
          nVis[n3] = true;
          let n2Level = depth(n3, level + 1, nVis);
          nLevel = Math.max(nLevel, n2Level);
        }
      }
      return nLevel;
    };
    let minList = {}, min = Infinity;
    for(let i =0; i < n; i++) {
      let vis = {};
      vis[i] = true;
      let dp = depth(i, 0, vis);
      if(!minList[dp]) {
        minList[dp] = [];
      }
      minList[dp].push(i);
      min = Math.min(min, dp);
    }
    return minList[min];
  };
  console.log(findMinHeightTrees(1, []));
  // console.log(findMinHeightTrees(4, [[1,0],[1,2],[1,3]]));
  // console.log(findMinHeightTrees(6, [[3,0],[3,1],[3,2],[3,4],[5,4]]));