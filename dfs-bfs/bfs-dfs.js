function ListNode({ v, c }) {
    this.val = v;
    this.childs = c || [];
  }
  
  /*
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
  */
  var grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  let recIndex = 0, recLimit = 20;
  function dfs(row, col, visitedCells = {}, rowCount, colCount) {
    if (recIndex < recLimit) {
      let cellName = 'R' + row + 'C' + col;
      console.log('Cell', grid[row][col]);
      if (!visitedCells[cellName]) {
        visitedCells[cellName] = true;
        
        //RIGHT
        if (col + 1 < colCount) {
          let nextCellName = 'R' + (row) + 'C' + (col + 1);
          if (!visitedCells[nextCellName]) {
            dfs(row, col + 1, visitedCells, rowCount, colCount);
          }
        }
        //DOWN
        if (row + 1 < rowCount) {
          let nextCellName = 'R' + (row + 1) + 'C' + (col);
          if (!visitedCells[nextCellName]) {
            dfs(row + 1, col, visitedCells, rowCount, colCount);
          }
        }
        //LEFT
        if (col - 1 >= 0) {
          let nextCellName = 'R' + (row) + 'C' + (col - 1);
          if (!visitedCells[nextCellName]) {
            dfs(row, col - 1, visitedCells, rowCount, colCount);
          }
        }
        //UP
        if (row - 1 >= 0) {
          let nextCellName = 'R' + (row - 1) + 'C' + (col);
          if (!visitedCells[nextCellName]) {
            dfs(row - 1, col, visitedCells, rowCount, colCount);
          }
        }
  
      }
  
      recIndex++;
    }
  }
  function bfs() {
    let que = [];
    let rowCount = grid.length, colCount = grid[0].length;
    let visitedCells = {};  
  
    que.push({
      row: 0,
      col: 0
    });
    let loopIndex = 0, loopLimit = 100;
    while(que.length > 0 && loopIndex < loopLimit) {
      let { row, col } = que.shift();
      
      let cellName = 'R' + row + 'C' + col;
      if (!visitedCells[cellName]) {
        console.log('cell', grid[row][col]);
        visitedCells[cellName] = true;
        // RIGHT
        if (col + 1 < colCount) {
          let rightCellName = 'R' + row + 'C' + (col + 1);
          if (!visitedCells[rightCellName]) {
            que.push({
              row: row,
              col: col + 1
            });
          }
        }
        // DOWN
        if (row + 1 < rowCount) {
          let downCellName = 'R' + (row + 1) + 'C' + col;
          if (!visitedCells[downCellName]) {
            que.push({
              row: row + 1,
              col: col
            });
          }
        }
      }
  
      loopIndex++;
    }
  }
  
  
  dfs(0, 0, {}, grid.length, grid[0].length);