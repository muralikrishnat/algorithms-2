var maximalSquare = function(matrix) {
    let res = 0, m = matrix.length, n = matrix[0].length;
  
    let dp = {}, v = (r, c) => { return 'R' + r + 'C' + c;};
  
    var dfs = (r, c) => {
      if(dp[v(r,c)]) {
        return dp[v(r,c)];
      }
      let cellV = matrix[r][c];
      if(cellV === '0') {
        return 0;
      }
      if(r < m && c < n) {
        let rv = c + 1 < n ? dfs(r, c+1) : 0;
        let dv = r + 1 < m ? dfs(r+1, c) : 0;
        let cv = (r+1 < m && c +1 < n) ? dfs(r+1, c+1) : 0;
        let out = Math.min(rv, dv, cv) + 1;
        dp[v(r,c)] = out;
        res = Math.max(out, res);
        return out;
      }
      return 1;
    };
    
    for(let r = m - 1; r >= 0; r--) {
      for(let c = n - 1; c >= 0; c--) {
        let out = dfs(r, c);
        dp[v(r,c)] = out;
        res = Math.max(res, out);
      }
    }
    return res * res;
  };
  
  var input3 = [
    ['1', '1'],
    ['1', '1'],
  ];
  // maximalSquare(input3);
  
  var input = [
    ['1', '1', '1'],
    ['1', '1', '1'],
    ['1', '1', '1']
  ];
  maximalSquare(input);
  
  var input2 = [
    ['0', '1', '1', '0'],
    ['1', '1', '1', '0'],
    ['1', '1', '1', '1'],
    ['1', '1', '1', '1']
  ];
  // maximalSquare(input2);
  
  