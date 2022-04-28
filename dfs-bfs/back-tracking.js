var letterCombinations = function(digits) {
    if(digits.length === 0) return [];
    let numMap = {
      '2': 'abc',
      '3': 'def',
      '4': 'ghi',
      '5': 'jkl',
      '6': 'mno',
      '7': 'pqrs',
      '8': 'tuv',
      '9': 'wxyz',
    };
    
    let strings = digits.split('').map(x => {
      return numMap[x];
    });
  
    // for(let i =0; i < 3; i++) {
    //   for(let j =0; j < 3; j++) {
    //     for(let k =0; k < 3; k++) {
    //       console.log('abc'[i], 'def'[j], 'ghi'[k]);
    //       console.count('perm');
    //     }
    //   }
    // }
  
    let res = [];
    let recIndex =0 , recLimit = 100;
    var backtrack = (digitIndex, str) => {
      console.count('backtrack')
      if (recIndex < recLimit) {
        if (str.length === digits.length) {
          res.push(str);
        }
        if (digitIndex < digits.length) {
          let digitStr = numMap[digits[digitIndex]];
          for(let i = 0; i < digitStr.length; i++) {
            backtrack(digitIndex + 1, str + digitStr[i]);
          }
        }
        recIndex++;
      }
    }
  
    backtrack(0, "", 0);
    return res;
  };
  
  console.log(letterCombinations('999'));