var isOverlap = (a, b) => {
    console.log('compare:', a, b);
    let [ns,ne] = a;
    let [cs,ce] = b;
    let isStartMerge = ns >= cs && ns <= ce;
    if (isStartMerge) {
      return true;
    }
    let isEndMerge = ne >= cs && ne <= ce;
    if (isEndMerge) {
      return true;
    }
    if(isEndMerge && isStartMerge) {
      return true;
    }
    if (cs >= ns && cs <= ne && ce >= ns && ce <= ne) {
      return true;
    }
    return false;
  }
  // console.log(isOverlap([3, 5],[1, 40]));
  var insert = function(intervals, newInterval) {
    let index = 0, len = intervals.length;
    let res = [];
    while (index < len) {
      let [ns,ne] = newInterval || [];
      let [cs,ce] = intervals[index];
      let isMerger = isOverlap([ns,ne], [cs, ce]);
      console.log([ns,ne], [cs,ce], isMerger)
      if (!isMerger) {
        if (newInterval && !(ns > ce)) {
          res.push(newInterval);
          newInterval = null;
        }
        res.push([cs, ce]);
      } else {
        if (newInterval) {
          newInterval = [Math.min(ns, cs), Math.max(ce, ne)];
        } else {
          res.push([cs, ce]);
        }
      }
      index++;
    }
    if (newInterval) {
      res.push(newInterval);
    }
    return res;
  };
  console.log(insert([[0,0],[1,4],[6,8],[9,11]],[0,9]));
  /*
    include
    1,10   2, 5    1,10
    fullclude
    2,5    1, 7.  1, 7
    between
    1,5   2,7     1, 7
    2,7   1,5     1, 7
  
  
    1, 2  3, 4    1, 4
  
    Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
    Output: [[1,5],[6,9]]
  
    Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]],[4,8]
  Output: [[1,2],[3,10],[12,16]]
  */