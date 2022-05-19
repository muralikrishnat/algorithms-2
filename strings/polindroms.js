var checkString = (str) => {
    let len = str.length, res = new Set();
    let start = 0;
    var checkPoli = (index, pad) => {
      while(index - pad >= 0 && index + pad < len) {
        if (str[index - pad] === str[index + pad]) {
          res.add(str.slice(index - pad, index + pad + 1));
        } else {
          break;
        }
        pad += 1;
      }
    }
    while(start < len) {
      res.add(str[start]);
      let poli = checkPoli(start, 1);
      start++;
    }
  
    console.log(res);
    console.log(res.size);
  }
  checkString('cabadabac');