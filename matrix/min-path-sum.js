var minPathSum = function(grid) {
    let paths = {},rLen = grid.length, cLen = grid[0].length;
    if (rLen === 1 && cLen === 1) return grid[0][0];
    var walk = (row, col) => {
      if (row === rLen - 1 && col === cLen - 1) return grid[row][col];
      if (paths['R' + row + 'C' + col]) {
        return paths['R' + row + 'C' + col];
      }
      let shortPath = Math.min(...[
        { r:row, c:col + 1 }, 
        { r:row + 1, c:col }
      ].map(({r, c}) => {
        if (r < rLen && c < cLen) {
          return walk(r, c);
        } else {
          return Infinity;
        }
      }));
      paths['R' + row + 'C' + col] = grid[row][col] + shortPath;
      return paths['R' + row + 'C' + col];
    }
    return walk(0, 0);
  };
  // var input = [[1,3,1],[1,5,1],[4,2,1]];
  var input = [[1,2,3],[4,5,6]];
  console.log(minPathSum(input));
  /*
  [
    [1,3,1],
    [1,5,1],
    [4,2,1]]
  
    1
      1
        5
          1
            1 => end
          2
            1 => end
        4
          2
            1 => end
      3
        1
          1
            1 => end
        5
          1
            1 => end
          2
            1 => end
      
  7
  */