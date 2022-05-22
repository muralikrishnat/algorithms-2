var searchMatrix = function(matrix, target) {
    let res = false;
    let m = matrix.length, n = matrix[0].length;
    let start = 0, end = m - 1;
    var checkRow = (r) => {
      let found = false;
      for(let i = 0; i < n; i++) {
        if (matrix[r][i] === target) {
          found = true;
          break;
        }
      }
      return found;
    };
    if (m === 1) {
      res = checkRow(0);
      return res;
    }
    while(start < end) {
      if(end - start === 1) {
        let n1 = matrix[start][n-1];
        let n2 = matrix[end][n-1];
        if (n1 === target) {
          res = true;
          break;
        }
        if(n2 === target) {
          res = true;
          break;
        }
        if (target < n1) {
          res = checkRow(start);
          break;
        } else if (target < n2) {
          res = checkRow(end);
          break;
        } else {
          res = false;
          break;
        }
      }
      let mid = start + Math.floor((end - start) / 2);
      let num = matrix[mid][n-1];
      if(num === target) {
        res = true;
        break;
      } if (num < target) {
        start = mid;
      } else {
        end = mid;
      }
    }
    return res;
  };
  
  console.log(searchMatrix([[1]],1));