var multiply = function(num1, num2) {
    let len1 = num1.length, len2 = num2.length;
    let resArr = [];
    for(let i = len1 - 1; i >= 0; i--) {
      let n1 = num1[i] - 0, carry = 0;
      let res = [];
      for(let j = len2 - 1; j >= 0; j--) {
        let n2 = num2[j] - 0;
        let t = (n1 * n2) + carry;
        carry = 0;
        if (t > 9) {
          carry = Math.floor(t / 10);
          res.push(t % 10);
        } else {
          res.push(t);
        }
      }
      if (carry) {
        res.push(carry);
      }
      resArr[resArr.length] = res;
    }
    let resLen = resArr.length;
    let newRes = [], digLen = 0;
    for(let i = 0; i < resLen; i++) {
      let nAr = [...(new Array(i)).fill(0), ...resArr[i]];
      digLen = Math.max(digLen, nAr.length);
      newRes.push(nAr);
    }
    let carry = 0, resNum = '';
    for(let i = 0; i < digLen; i++) {
      let t = newRes.reduce((a, b) => {
        return a + (b[i] || 0);
      }, carry);
      carry = 0;
      if (t > 9) {
        carry = Math.floor(t / 10);
        resNum = (t % 10) + resNum;
      } else {
        resNum = t + resNum;
      }
    }
    if (carry) {
      resNum = carry + resNum;
    }
    let s = 0, sLen = resNum.length;
    while(resNum[s] === '0' && s < sLen - 1) {
      s++;
    }
    return resNum.slice(s);
  };
  
  console.log(multiply('1000', '0'));
  // console.log(multiply('100', '400'));
  