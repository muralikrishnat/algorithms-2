console.clear();
function minimumBribe(arr) {
    let len = arr.length;
    for(let i = 0; i < len; i++) {
        let num = arr[i];
        if (i > 0) {
            let lastNum = arr[i - 1];
            let prevDif = num - lastNum;
            if (prevDif !== 1) {
                console.log(num - lastNum);  
            }
        }
    }
}

// minimumBribe([1, 2, 3, 4, 5]);

minimumBribe([1, 2, 3, 5, 4, 6]);


var rotate = function(matrix) {
    let res = [], n = matrix.length;
    for(let c = 0; c < n; c++) {
      let row = [];
      for(let r = n -1; r>= 0; r--) {
        row.push(matrix[r][c]);
      }
      res.push(row);
    }
    for(let r = 0; r < n; r++) {
      for(let c = 0; c < n; c++) {
        matrix[r][c] = res[r][c];
      }
    }
    return matrix;
  };
  console.log(rotate([[1,2,3], [4,5, 6], [7,8,9]]));
  /*
    00 01 02
    10 11 12
    20 21 22
  
    20 10 00
    21 11 01
    22 12 02
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]
    [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3]
    ]
    Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
  Output: [[7,4,1],[8,5,2],[9,6,3]]
  */