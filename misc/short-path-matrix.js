// -2 Start
// -3 End
// 0 free cell
// -1 wall

// Parse matrix and find source and destination
// using BFS walk from source to destination
const input = [
    [-2, 0, -1, 0],
    [-1, 0, -1, 0],
    [0, 0, -1, 0],
    [0, 0, 0, -3]
  ];
  
  function findMinDistPath (input) {
    let cellsToWalk = [], 
      source = null, 
      dest = null,
      dist = 0,
      visited = {},
      rowCount = input.length,
      colCount = input[0].length;
    input.forEach((row, rowIndex) => {
      row.forEach((col, colIndex) => {
        let cellVal = input[rowIndex][colIndex];
        if (cellVal === -2) {
          source = {
            row: rowIndex,
            col: colIndex,
            dist: 0
          };
          visited[rowIndex + ':' + colIndex] = true;
          cellsToWalk.push(source);
        }
        if (cellVal === -3) {
          dest = {
            row: rowIndex,
            col: colIndex
          };
        }
        if (cellVal === -1) {
          visited[rowIndex + ':' + colIndex] = true;
        }
      });
    });
  
    while(cellsToWalk.length > 0) {
      let s = cellsToWalk.shift();
      if (input[s.row][s.col] === -3) {
        return s.dist;
      }
      visited[s.row + ':' + s.col] = true;
      // RIGHT
      if (s.col + 1 < colCount && !visited[s.row + ':' + (s.col + 1)]){
        cellsToWalk.push({
          row: s.row,
          col: s.col + 1,
          dist: s.dist + 1
        });
      }
      // DOWN
      if (s.row + 1 < rowCount && !visited[(s.row + 1) + ':' + s.col]){
        cellsToWalk.push({
          row: s.row + 1,
          col: s.col,
          dist: s.dist + 1
        });
      }
      // LEFT
      if (s.col - 1 >= 0 && !visited[s.row + ':' + (s.col - 1)]){
        cellsToWalk.push({
          row: s.row,
          col: s.col - 1,
          dist: s.dist + 1
        });
      }
      // TOP
      if (s.row - 1 >= 0 && !visited[(s.row - 1) + ':' + (s.col)]){
        cellsToWalk.push({
          row: s.row - 1,
          col: s.col,
          dist: s.dist + 1
        });
      }
    }
    return -1;
  }
  
  console.log(findMinDistPath(input));
  
  