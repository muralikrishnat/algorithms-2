var printMatrix = (matrix) => {
    for(let i =0; i < matrix.length; i++) {
      let row = matrix[i];
      console.log(row.join(' '), '\n');
    }
  }
  var cellName = (r, c) => {
    return 'R' + r + 'C' + c;
  }
  var isNearby = (r, c, ir, ic) => {
    return (r === ir && (c == ic - 1 || c == ic + 1)) || 
      (c === ic && (r === ir - 1 || r === ir + 1));
  }
  var checkMatrix = (m, n, ops) => {
    var visitedCells = {};
    var start = 0, len = ops.length, res = [];
    var que = [], queIndex = 0;
    que.push({
      isLandNo: 1,
      r: ops[queIndex][0],
      c: ops[queIndex][1],
      index: queIndex
    });
    while(que.length > 0) {
      let { isLandNo, r, c, index } = que.shift();
      console.log(r, c, isLandNo, index);
      res[index] = isLandNo;
      let aCells = [];
      visitedCells[cellName(r, c)] = true;
      for(let i = 0; i < len; i++) {
        let [ir, ic] = ops[i];
        if (isNearby(r, c, ir, ic) && !visitedCells[cellName(ir, ic)]) {
          aCells.push([ir, ic, i]);
        }
      }
      if (aCells.length > 0) {
        aCells.forEach(cell => {
          que.push({
            isLandNo: isLandNo,
            r: cell[0],
            c: cell[1],
            index: cell[2]
          });
        }); 
      } else {
        queIndex += 1;
        if (queIndex < len) {
          let opToCheck = ops[queIndex];
          let [or, oc] = opToCheck;
          if (!visitedCells[cellName(or, oc)]) {
            que.push({
              isLandNo: isLandNo + 1,
              r: ops[queIndex][0],
              c: ops[queIndex][1],
              index: queIndex
            });
          }
        }
      }
    }
    console.log(res);
  }
  
  checkMatrix(3, 3, [[2,2], [0,0], [1,2], [2,0], [1,0],[0,2] ]);
  /*
    1, 0, 2
    1, 0, 2
    1, 0, 2
  */