/**
 * @param {number} n
 * @return {number}
 */
 var numSquares = function(n) {
    if(n === 1) return 1;
    if(n % Math.sqrt(n) === 0) return 1;
    let arr = [];
    let s = 1, num = 1, len = 0;
    while(num < n) {
      let sq = s * s; 
      if(sq <= n) {
        len++;
        arr.push(sq);
      }
      num = sq;
      s++;
    }
    let wI = 0, wL = n;
    let que = [];
    for(let i = 0; i < len; i++) {
      que.push({
        sum: arr[i],
        count: 1,
        nums: [arr[i]]
      });
    }
    let res = null;
    while(que.length > 0) {
      let { sum, count, nums } = que.shift();
      console.log(sum);
      if(sum === n) {
        res = count;
        break;
      }
      if(sum < n) {
        for(let i = 0; i < len; i++) {
          let n2 = arr[i], n3 = sum + n2;
          if(n3 <= n) {
            que.push({
              sum: sum + n2,
              count: count + 1,
              nums: [...nums, n2]
            });
          }
        }
      }
    }
    return res;
  };
  // console.log(numSquares(1));
  // console.log(numSquares(9));
  // console.log(numSquares(10));
  console.log(numSquares(12));
  // console.log(numSquares(14));
  // console.log(numSquares(15));
  // console.log(numSquares(16));
  // console.log(numSquares(100));
  // console.log(numSquares(196));
  // console.log(numSquares(1000));
  // console.log(numSquares(7168));
  // console.log(numSquares(2));
  
  /*
    12 = 4 + 4 + 4
    12 = 9 + 1 + 1 + 1
    1 + 1 + 1
  */