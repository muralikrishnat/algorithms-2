var checkRow = (board, r) => {
  let set = new Set(), res = true;
  for(let i =0; i < 9; i++) {
    let num = board[r][i];
    if (num !== '.') {
      if (set.has(num)) {
        res = false;
        break;
      }
      set.add(num); 
    }
  }
  return res;
}
var checkCol = (board, c) => {
  let set = new Set(), res = true;
  for(let i = 0; i < 9; i++) {
    let num = board[i][c];
    if (num !== '.') {
      if (set.has(num)) {
        res = false;
        break;
      }
      set.add(num); 
    }
  }
  return res;
}
var checkBox = (board, br, bc) => {
  let set = new Set(), res = true;
  for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
      let r = (3 * br) + i
      let c = (3 * bc) + j;
      let num = board[r][c];
      if (num !== '.') {
        if (set.has(num)) {
          res = false;
          break
        }
      }
    }
    if(!res) {
      break;
    }
  }
  return res;
}
var isValidBoard = (board) => {
  let res = true;
  for(let i =0; i < 9; i++) {
    if(!checkRow(board, i)) {
      res = false;
      break;
    }
  }
  for(let i =0; i < 9; i++) {
    if(!checkCol(board, i)) {
      res = false;
      break;
    }
  }
  for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
      if (!checkBox(board, i, j)) {
        res = false;
        break;
      }
    }  
  }
  return res;
}
var input = [["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];

console.log(isValidBoard(input));
