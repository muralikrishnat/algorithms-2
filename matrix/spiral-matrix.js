var spiralOrder = function(matrix) {
    let res = [], rLen = matrix.length, cLen = matrix[0].length;
    let cellTotal = rLen * cLen;
    var vCells = {}, cellV = (r, c) => { return (matrix[r] || {} )[c]; };
    var walk = (r, c, dir) => {
      console.log('walk: ', cellV(r, c));
      res.push(cellV(r, c));
      if (res.length === cellTotal) return;
      // Directions R, D, L, U
      if (dir === 'R') {
        if (c < cLen - 1) {
          vCells['R' + r + 'C' + c] = true;
          if (!vCells['R' + r + 'C' + (c + 1)]) {
            walk(r, c + 1, 'R');
          } else {
            if (!vCells['R' + (r + 1) + 'C' + c]) {
              walk(r + 1, c, 'D');
            }
          }
        } else {
          walk(r + 1, c, 'D');
        }
      }
      if (dir === 'D') {
        if (r < rLen - 1) {
          vCells['R' + r + 'C' + c] = true;
          if (!vCells['R' + (r + 1) + 'C' + (c)]) {
            walk(r + 1, c, 'D');
          } else {
            if (!vCells['R' + (r + 0) + 'C' + (c - 1)]) {
              walk(r, c - 1, 'L');
            }
          }
        } else {
          walk(r, c - 1, 'L');
        }
      }
      if(dir === 'L') {
        if (c > 0) {
          vCells['R' + r + 'C' + c] = true;
          if (!vCells['R' + (r + 0) + 'C' + (c - 1)]) {
            walk(r, c - 1, 'L');
          } else {
            if (!vCells['R' + (r - 1) + 'C' + (c - 0)]) {
              walk(r - 1, c, 'U');
            }
          }
        } else {
          walk(r - 1, c, 'U');
        }
      }
      if (dir === 'U') {
        if (r > 0) {
          vCells['R' + r + 'C' + c] = true;
          if (!vCells['R' + (r - 1) + 'C' + c]) {
            walk(r - 1, c, 'U');
          } else {
            if (!vCells['R' + (r) + 'C' + (c + 1)]) {
              walk(r, c + 1, 'R');
            }
          }
        } else {
          walk(r, c + 1, 'R');
        }
      }
    }
    walk(0, 0, 'R');
    return res;
  };
  var input = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15],
    [16,17,18,19,20],
    [21,22,23,24,25]
  ];
  console.log(spiralOrder(input));
  /*
    Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
    Output: [1,2,3,6,9,8,7,4,5]
  
    Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
    Output: [1,2,3,4,8,12,11,10,9,5,6,7]
  
  */