var decodeStr = (s) => {
    let res = 0, len = s.length;
    let charMap = {
      '1': 'A', '2': 'B', '3': 'C','4': 'D','5': 'E',
      '6': 'F','7': 'G','8': 'H','9': 'I','10': 'J',
      '11': 'K','12': 'L','13': 'M','14': 'N','15': 'O',
      '16': 'P','17': 'Q','18': 'R','19': 'S','20': 'T',
      '21': 'U','22': 'V','23': 'W','24': 'X','25': 'Y','26': 'Z'
    };
    var dfs = (nStr, rest, len, nLen) => {
      console.log('dfs', nStr);
      if (len === 0) {
        res += 1;
        return;
      }
      let char = rest[0];
      if (char === '2') {
        dfs(nStr + char, [...rest].slice(1), len - 1);
        let nChar = rest[1];
        if(nChar && charMap[char + nChar]) {
          dfs(nStr + char + nChar, [...rest].slice(2), len - 2);
        }
      } else if (char === '1') {
      } else if(char === '0') {
  
      } else {
        dfs(nStr + char, rest.slice(1), len - 1);
      }
    };
    dfs("", s, len, 0);
    return res;
    // let dp = [];
    // for(let i = len - 1; i >= 0; i--) {
    //   let char = s[i];
    //   let nChar = s[i+1];
    //   let pChar = s[i-1];
    //   if (char === '0') {
    //   } else if(charMap[char]) {
    //     dp[i] = 1;
    //   } else {
    //     console.log('edge else');
    //   }
    // }
    // console.log('RES', dp[0]);
    // return dp[0];
  }
  
  [
    {
      input: '11106',
      out: 2,
      active: 0
    },
    {
      input: '222',
      out: 3,
      active: 1
    },
    {
      input: '229',
      out: 2,
      active: 0
    }
  ].forEach((x, i) => {
    if (x.active) {
      let out = decodeStr(x.input);
      console.group('Test #' + i);
      console.log('E: ', x.out);
      console.log('A: ', out);
      console.groupEnd('Test #' + i);
    }
  });