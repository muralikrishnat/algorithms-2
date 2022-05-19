var merge = function(intervals) {
    intervals.sort((a, b) => a[0]-b[0]);
    let index = 0, prev = intervals[index++], len = intervals.length;
    let res = [];
    if(len === 1) return intervals;
    while(index < len) {
      let [ss, se] = prev;
      let [cs, ce] = intervals[index];
      if (se >= cs) {
        prev = [Math.min(ss, cs),Math.max(ce, se)];
        if (index === len - 1) {
          res.push(prev);
        }
      } else {
        res.push(prev);
        prev = [cs, ce];
        if (index === len - 1) {
          res.push([cs, ce]);
        }
      }
      index++;
    }
    return res;
  };
  
  console.log(merge([[1,4],[0,4]]));