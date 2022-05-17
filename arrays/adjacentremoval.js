var adjacentRemoval = (str, k) => {
    let start = 0, len = str.length;
    let charMap = {};
    let newStr = [], lastChar = '', lastCount = 0;
    while(start < len) {
      let char = str[start];
      if (lastChar === char) {
        lastCount += 1;
        if (lastCount === k) {
          for(let i = 0; i < k - 1; i++) {
            newStr.pop();
          }
          if (newStr.length > 0) {
            lastChar = newStr[newStr.length - 1].char;
            lastCount = newStr[newStr.length - 1].count;
          } else {
            lastChar = '';
            lastCount = 0;
          }
        } else {
          newStr.push({
            char,
            count: lastCount
          });
        }
      } else {
        lastChar = char;
        lastCount = 1;
        newStr.push({
          char,
          count: lastCount
        });
      }
      start++;
    }
    console.log(newStr.map(x => x.char).join(''));
  }
  console.log(adjacentRemoval('deeedbbcccbdaa', 3));