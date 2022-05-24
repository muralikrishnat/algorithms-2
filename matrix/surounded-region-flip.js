var solve = (board) => {
    let rLen = board.length, cLen = board[0].length;
    var checked = {}, v = (r, c) => { return 'R' + r + 'C' + c;};
    var walk = (r, c) => {
      if (!checked[v(r, c)] && board[r][c] === 'O') {
        checked[v(r, c)] = true;
        [
          { dr: -1, dc: 0 },
          { dr: 0, dc: 1 },
          { dr: 1, dc: 0 },
          { dr: 0, dc: -1 }
        ].forEach(({ dr, dc }) => {
          if (r + dr > 0 && r + dr <= rLen - 2 && c + dc > 0 && c + dc <= cLen - 2) {
            walk(r + dr, c + dc);
          }
        });
      }
    };
    for(let c = 1 ; c < cLen - 1; c++) {
      let tChar = board[0][c];
      if (tChar === 'O') {
        checked[v(0, c)] = true;
        walk(1, c);
      }
      let bChar = board[rLen - 1][c];
      if(bChar === 'O') {
        checked[v(rLen - 1, c)] = true;
        walk(rLen - 2, c);
      }
    }
    for(let r = 1 ; r < rLen - 1; r++) {
      let tChar = board[r][0];
      if (tChar === 'O') {
        checked[v(r, 0)] = true;
        walk(r, 1);
      }
      let bChar = board[r][cLen - 1];
      if(bChar === 'O') {
        checked[v(r, cLen - 1)] = true;
        walk(r, cLen - 2);
      }
    }
  
    // Flip
    for(let r = 1; r < rLen - 1; r++) {
      for(let c = 1; c < cLen - 1; c++) {
        if(!checked[v(r, c)]) {
          board[r][c] = 'X';
        }
      } 
    }
  }
  // var board = [
  //   ["X","X","X","X","X"],
  //   ["X","O","O","X","X"],
  //   ["X","X","O","O","X"],
  //   ["X","X","O","X","X"],
  //   ["X","X","O","X","X"]
  // ];
  var board = [
    ["X","O","X","O","X","O"],
    ["O","X","O","X","O","X"],
    ["X","O","X","O","X","O"],
    ["O","X","O","X","O","X"]
  ];
  solve(board);
  console.log(board);
  
  var out = [
    ["X","O","X","O","X","O"],
    ["O","X","X","X","X","X"],
    ["X","X","X","X","X","O"],
    ["O","X","O","X","O","X"]
  ];