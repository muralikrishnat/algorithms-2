// var printMatrix = (matrix, min, max) => {
//   console.group('matrix');
//   for(let r = min.r; r <= max.r; r++) {
//     let row = [];
//     for(let c = min.c; c <= max.c; c++) {
//       row.push(matrix[r][c]);
//     }
//     console.log(row.join('\t') + '\n');
//   }
//   console.groupEnd('matrix');
// }
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
    let res = false;
    let m = matrix.length, n = matrix[0].length;
    let min = matrix[0][0], max = matrix[m-1][n-1];
    if(target < min || target > max) return false;
    if(target === min || target === max) return true;
  
    let que = [];
    que.push({
      min: {
        r: 0,
        c: 0
      },
      max: {
        r: m - 1,
        c: n - 1
      }
    });
    while(que.length > 0) {
      console.count('while');
      let { min, max } = que.shift();
      if (max.r - min.r === 1 || 
          max.c - min.c === 1 || 
          max.r - min.r === 0 || 
          max.c - min.c === 0) {
        if(min.r === max.r || min.c === max.c) {
          if(min.r === max.r) {
            if(max.c - min.c === 1) {
              if(target === matrix[min.r][min.c] ||
                target === matrix[min.r][max.c]
              ) {
                res = true;
                break;
              } else {
                continue;
              }
            }
            if(target < matrix[min.r][min.c]) {
              continue;
            } else if (target > matrix[max.r][max.c]) {
              continue;
            } else {
              let cc = min.c + Math.floor((max.c - min.c )/ 2);
              let cVal = matrix[min.r][cc];
              if(target == cVal) {
                res = true;
                break;
              } else if (target < cVal) {
                que.push({
                  min: min,
                  max: { r: min.r, c: cc }
                });
              } else {
                que.push({
                  min: { r: min.r, c: cc },
                  max: { r: min.r, c: max.c }
                });
              }
            }
          } else {
            if(max.r - min.r === 1 && min.c === max.c) {
              if(target === matrix[min.r][min.c] ||
                target === matrix[max.r][min.c]) {
                  res = true;
                  break;
              } else {
                continue;
              }
            }
            if(target < matrix[min.r][min.c]) {
              continue;
            }
            if(target > matrix[max.r][max.c]) {
              continue;
            }
            if(target === matrix[min.r][min.c] ||
              target === matrix[max.r][min.c]) {
                res = true;
                break;
            }
            if(target > matrix[min.r][min.c] && 
              target < matrix[max.r][min.c]) {
              let rc = min.r + Math.floor((max.r - min.r )/ 2);
              let cVal = matrix[rc][min.c];
              if(target == cVal) {
                res = true;
                break;
              } else if (target < cVal) {
                que.push({
                  min: min,
                  max: { r: rc, c: min.c }
                });
              } else {
                que.push({
                  min: { r: rc, c: min.c},
                  max: { r: max.r, c: min.c }
                });
              }
            }
          }
        } else {
          if(target < matrix[min.r][min.c]) {
            continue;
          }
          if(target > matrix[max.r][max.c]) {
            continue
          }
          if(target === matrix[min.r][min.c] ||
            target === matrix[max.r][max.c] ) {
              res = true;
              break;
          }
          if(max.r - min.r === 1) {
            if (target === matrix[min.r][min.c] ||
              target === matrix[min.r][max.c] ||
              target === matrix[max.r][min.c] ||
              target === matrix[max.r][max.c]
            ) {
              res = true;
              break;
            }
            if (target > matrix[min.r][min.c] && 
              target < matrix[min.r][max.c]) {
                que.push({
                  min: {
                    r: min.r,
                    c: min.c
                  },
                  max: {
                    r: min.r,
                    c: max.c
                  }
                });
            }
            if(target > matrix[max.r][min.c] &&
              target < matrix[max.r][max.c]) {
                que.push({
                  min: {
                    r: max.r,
                    c: min.c
                  },
                  max: {
                    r: max.r,
                    c: max.c
                  }
                });
            }
          }
  
          if(max.c - min.c === 1) {
            if(target === matrix[min.r][min.c] ||
              target === matrix[max.r][max.c] ||
              target === matrix[min.r][max.c] ||
              target === matrix[max.r][min.c]
            ) {
              res = true;
              break;
            }
            if (target > matrix[min.r][min.c] &&
              target < matrix[max.r][min.c]
            ) {
              que.push({
                min: min,
                max: { r: max.r, c: min.c }
              });
            }
            if(target > matrix[min.r][max.c] &&
              target < matrix[max.r][max.c]) {
                que.push({
                  min: { r: min.r, c: max.c },
                  max: { r: max.r, c: max.c }
                });
            }
          }
        }
        
      } else {
        let rc = min.r + Math.floor((max.r - min.r + 1) / 2);
        let cc = min.c + Math.floor((max.c - min.c + 1) / 2);
        let cVal = matrix[rc][cc];
        if(target < matrix[min.r][min.c]) {
          continue;
        }
        if(target > matrix[max.r][max.c]) {
          continue;
        }
        if(target === matrix[min.r][min.c] ||
          target === matrix[max.r][max.c]) {
          res = true;
          break;
        }
        // printMatrix(matrix, min, max);
        // console.log('val', rc, cc, cVal);
        if(target === cVal) {
          res = true;
          break;
        } else {
          let isLower = target < cVal;
          let min1, max1, min2, max2;
          if (isLower) {
            min1 = min;
            max1 = { r: rc - 1, c: max.c };
            min2 = {r: rc, c: min.c}; 
            max2 = { 
              r: max.r,
              c: cc - 1 < 0 ? cc : cc - 1
            };
          } else {
            min1 = { r: min.r, c: cc + 1};
            max1 = { r: rc, c: max.c };
            min2 = { r: rc + 1, c: min.c};
            max2 = { r: max.r, c: max.c };
          }
          // printMatrix(matrix, min1, max1);
          // printMatrix(matrix, min2, max2);
          que.push({
            min: min1,
            max: max1
          });
          que.push({
            min: min2,
            max: max2
          });
        }
      }
    }
    return res;
  };
  
  let gen = [], m = 10, n = 10, num = 1;
  for(let i = 0; i < m; i++) {
    let row = [];
    for(let j = 0; j < n; j++) {
      row.push(num++);
    }
    gen.push(row);
  }
  var input = [
    [  1,  2,  3,  4,  5,  6,  7,  8,  9 ],
    [ 10, 11, 12, 13, 14, 15, 16, 17, 18 ],
    [ 19, 20, 21, 22, 23, 24, 25, 26, 27 ],
    [ 28, 29, 30, 31, 32, 33, 34, 35, 36 ],
    [ 37, 38, 39, 40, 41, 42, 43, 44, 45 ],
    [ 46, 47, 48, 49, 50, 51, 52, 53, 54 ]
  ];
  // console.log(gen);
  // 9, 13, 15, 31, 45, 46
  for(let r = 0; r < input.length; r++) {
    for(let c = 0; c < input[0].length; c++) {
      // console.log(input[r][c], searchMatrix(input, input[r][c]));
    }
  }
  console.log(26, searchMatrix(gen, 54)); // 7 times
  
  var matrixPart = (matrix, min, max) => {
    let m = matrix.length, n = matrix[0].length;
    console.log(matrix[min.r][min.c], matrix[max.r][max.c]);
  
    // printMatrix(matrix, min, { r: max.r, c: n - 1 });
    // printMatrix(matrix, {r: max.r, c: min.c}, { r: n - 1, c: max.c - 1 });
  
    // console.log('\n');
  
    // printMatrix(matrix, {r: min.r, c: max.c + 1 }, { r: max.r + 1, c: n - 1 });
    // printMatrix(matrix, {r: max.r + 1, c: min.c }, { r: m, c: n - 1 });
  }
  // matrixPart(input, {r:0,c:0}, { r: 2, c: 2});