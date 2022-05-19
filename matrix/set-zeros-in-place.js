var setZeroes = function(matrix) {
    let m = matrix.length, n = matrix[0].length;
    let vCells = {}, v = (r, c) => { return 'R' + r + 'C' + c;};
    var walk = (row, col, dir) => {
      if (!(row >= 0 && row < m && col >= 0 && col < n)) {
        return;
      }
      if (matrix[row][col] !== 0) {
        matrix[row][col] = 0;
        vCells[v(row, col)] = true;
      }
      let r = row, c = col;
      switch(dir) {
        case 'L':
          c = c - 1;
          break;
        case 'U':
          r = r - 1;
          break;
      }
      if (r >= 0 && r < m && c >= 0 && c < n) {
        walk(r, c, dir);
      }
    };
    let zr = new Set(), zc = new Set();
    for(let r = 0; r < m; r++) {
      for(let c = 0; c < n; c++) {
        let val = matrix[r][c];
        if(val === 0 && !vCells[v(r,c)]) {
          if (!zr.has(r)) {
            walk(r, c - 1, 'L');
          }
          if (!zc.has(c)) {
            walk(r - 1, c, 'U');
          }
          zr.add(r);
          zc.add(c);
        } else {
          if (zr.has(r)) {
            matrix[r][c] = 0;
          }
          if (zc.has(c)) {
            matrix[r][c] = 0;
          }
        }
      }
    }
    console.log(matrix);
  };
  
  var input = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];
  setZeroes(input);