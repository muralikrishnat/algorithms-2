var generateMatrix = function(n) {
    var res = [], v = (r, c) => { return 'R' + r + 'C' + c; };
    var vcells = {}, cellNo = 1, maxCell = n*n;
    var nextCell = (row, col, dir) => {
      console.count('nextCell');
      if(!res[row]) {
        res[row] = [];
      }
      res[row][col] = cellNo++;
      if (cellNo > maxCell) return;
      let d = dir, r = row, c = col;
      vcells[v(r, c)] = true;
      switch(dir) {
        case 'R':
          if (c < n - 1 && !vcells[v(r, c+1)]) {
            c = c + 1;
          } else {
            d = 'D';
            r = r + 1;
          }
          break;
        case 'D':
          if (r < n - 1 && !vcells[v(r + 1, c)]) {
            r = r + 1;
          } else {
            d = 'L';
            c = c - 1;
          }
          break;
        case 'L':
          if (c > 0 && !vcells[v(r, c - 1)]) {
            c = c - 1;
          } else {
            d = 'U';
            r = r - 1;
          }
          break;
        case 'U':
          if (r > 0 && !vcells[v(r - 1, c)]) {
            r = r - 1;
          } else {
            d = 'R';
            c = c + 1;
          }
          break;
      }
      if (!vcells[v(r, c)]) {
        nextCell(r, c, d);
      }
    }
    nextCell(0, 0, 'R');
    return res;
  };
  
  console.log(generateMatrix(4));
  