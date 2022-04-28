var reverse = function(x) {
    const limit = 2147483648;
    const k = x < 0 ? -1 : 1;
    const n = Number(String(''));
    return n > limit ? 0 : n * k;
  };
  
  console.log(reverse(11111333));
  
  
  
  /**
   * @param {string} s
   * @return {number}
   */
   var myAtoi = function(s) {
    let isNeg = false, signRead = false;
    let str = '';
    for(let i =0; i < s.length; i++){
      let charS = s[i];
      
      if (charS === '-' || charS === '+') {
        if (signRead || str.length > 0) {
          break;
        }
        signRead = true;
        isNeg = charS === '-';
      } else {
        if (str.length === 0) {
          if (charS !== ' ' && isNaN(charS - 0)) {
            break;
          }
        }
  
        if (charS === ' ') {
          if (str.length > 0 || signRead) {
            break;
          }
        } else {
          if (!isNaN(charS - 0)) {
            str += charS;
          } else {
            if (str.length > 0) {
              break;
            }
          }
        }
      }
      
    }
    let num = ((isNeg ? -1 : 1) * Number(str));
    if (isNeg && -(2**31) > num) {
      return -(2**31);
    } else {
      return num < (2**31 - 1) ? num : (2**31 - 1);
    }
  };
  
  // -2147483648
  console.log(myAtoi("     +    43"));