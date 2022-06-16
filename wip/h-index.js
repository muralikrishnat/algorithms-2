/**
 * @param {number[]} citations
 * @return {number}
 */
 var hIndex = function(citations) {
    let len = citations.length;
    if(len === 1) {
      let n1 = citations[0];
      if(n1 === 0) {
        return 0;
      }
      return 1;
    }
    var sort = (arr) => {
      let len2 = arr.length;
      if(len2 === 0 || len2 === 1) return arr;
      let p = arr[0];
      let l = [], r = [];
      for(let i = 1; i < len2; i++) {
        let n = arr[i];
        if(n <= p) {
          l.push(n);
        } else {
          r.push(n);
        }
      }
      return [...sort(l), p, ...sort(r)];
    };
    let narr = sort(citations);
    let hi = -Infinity, amax = -Infinity;
    for(let i = 0; i < len; i++) {
      let num = narr[i];
      amax = Math.max(amax, num);
      let n2 = narr.slice(0,i);
      let max = Math.max(...n2);
      let n2Len = n2.length;
      if (max < num && n2Len === len - num) {
        hi = Math.max(hi, num);
      } else {
        if(len - n2Len === max) {
          hi = Math.max(hi, max);
        }
      }
    }
    return amax === 0 ? 0 : (hi === -Infinity) ? len : hi;
  };
  
  console.log(hIndex([3,0,6,1,5]));
  console.log(hIndex([1,3,1]));
  console.log(hIndex([100]));
  console.log(hIndex([0]));
  console.log(hIndex([0,0]));
  console.log(hIndex([10,11]));
  console.log(hIndex([10,11,13]));
  /*
    len - h
    1,2,3,4,5,6,7,8,9
  
    10 - 5 = 5 items < 5
    
    10 - 1 = 9 items < 1 false
    10 - 2 = 8 items < 2 false
  
  
    1,2,3,4,5,6,7,8,9,10
  
    1,1,3
  
    1 
      Math.max() = null < 1 false
      3 - 1 === null
    1
      Math.max(1) = 1 <= 1 true;
      3 - 1 === [1].length
      2 === 1
  
    0 
      Math.max([]) = null < 0 false
    3
      Math.max(0) = 0 < 3 &&
      6 - 3
  
    0,1,3,5,6
  
    0
      Math.max(0) = 0 < 0 true
      5 - 0 === [0]
      5 === 1
    
  
    1
      Math.max(0) = 0 < 1 true &&
      5 - 1 = 4 === [0].length false
    3
      Math.max(0,1) < 3 true &&
      5 - 3 = 2 === [0,2].length true
    5
      Math.max(0,1,3) 3 < 5 true &&
      5 - 5 = 0 === [0,1,3].length false
    4
      Math.max(0,1) 1 < 4 true 
      5 - 4 === [0,1].length
      1 === 2, 1 < 2
    
  */
  