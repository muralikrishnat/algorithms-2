var exist = function(board, word) {
    let searchIndex = [];
    let m = board.length, n = board[0].length;
    let len = word.length;
    if(len > m * n) return false;
    let starts = [], wrds = new Map();
    for(let i = 0; i < len; i++) {
      let char = word[i], count = 0;
      if(wrds.has(char)) {
        count = wrds.get(char);
      }
      wrds.set(char, count + 1);
    }
    for(let r = 0; r < m; r++) {
      for(let c = 0; c < n; c++) {
        let char = board[r][c];
        if(wrds.has(char)) {
          let count = wrds.get(char);
          count -= 1;
          wrds.set(char, count);
          if (count === 0) {
            wrds.delete(char);
          }
        }
        if (char === word[0]) {
          starts.push({r, c});
        }
      }
    }
    if(wrds.size !== 0) return false;
    var getNext = (row, col) => {
      
    };
    var nextChar = (row, col, index, vis, path) => {
      // console.group(row +':' + col + ':' + index);
      let vis2 = {...vis};
      let char = board[row][col], w = word[index];
      if (char === w) {
        path.push(row + ':' + col + ':' + char);
        console.log('P =', path.join(' => '));
  
      }
      // console.groupEnd(row +':' + col + ':' + index);
    };
    for(let entry of starts) {
      nextChar(entry.r, entry.c, 0, {}, []);
    }
  }
  var input2 = [
    ["A","A","A","A","A","A"],
    ["A","A","A","A","A","A"],
    ["A","A","A","A","A","A"],
    ["A","A","A","A","A","A"],
    ["A","A","A","A","A","B"],
    ["A","A","A","A","B","A"]
  ];
  var word2 = "AAAAAAAAAAAAABB";
  var input = [
    ["A","B","C","E"],
    ["S","F","C","S"],
    ["Z","D","E","E"]
  ];
  var word = "ABCCED";
  var input = [
    ["A","B"],
    ["C","D"]
  ];
  var word = "ACDB";
  console.log(exist(input, word));