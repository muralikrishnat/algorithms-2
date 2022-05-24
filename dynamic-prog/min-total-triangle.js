var minimumTotal = function(triangle) {
    let row =[], min = Infinity;
    let len = triangle.length;
    for(let i = len - 2; i >= 0; i--) {
      let row = triangle[i];
      let cLen = triangle[i].length
      let nRow = [];
      let pRow = triangle[i + 1];
      for(let c = cLen - 1; c >= 0; c--) {
        let num = row[c];
        let tsum = Math.min(num + pRow[c], num + pRow[c+1]);
        row[c] = tsum;
      }
    }
    return triangle[0][0];
  };
  
  var input = [
    [1],
    [2, 3],
    [4, 5, 6],
    [7,8,9,10], 
    [11,12,13,14,15]
  ]
  console.log(minimumTotal(input));
  // console.log(minimumTotal([[2],[3,4]]));
  
  /*
    1 => 1 => 1
    2, 3 =>  3, 4 => 3
    4,5,6 = > 7, 8, 9, 10 = > 7
    7,8,9,10 => 14, 15,16,17,18,19,20 = > 14 
    11,12
  */
  