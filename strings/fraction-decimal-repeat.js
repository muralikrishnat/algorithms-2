
var fractionToDecimal = function(numerator, denominator) {
  let res = '';
  let rNum = (numerator / denominator) + '';
  let [d,f] = rNum.split('.');
  if (f) {
    var getRepeat = (str) => {
      let len = str.length;
      let p1 = 0, p2 = null;
      let nr = '', rp = '';
      while(p1 < len) {
        let c1 = str[p1];
        if(p2) {
          if (p2 === len - 1) {
            console.log(p1, p2, str.substr(p1 + 1, p2));
            rp = str.substr(p1 + 1, p2);
            break;
          } else {
            let c2 = str[p2];
            if(c1 === c2) {
              p1++;
              p2++;
            }
          }
        } else {
          let found = false;
          for(let i = p1 + 1; i < len; i++) {
            let c2 = str[i];
            if(c1 === c2) {
              found = true;
              p2 = i;
              break;
            }
          }
          if(found) {
            p1++;
            p2++;
          } else {
            nr += c1;
            p1++;
          }
        }
      }
      return nr + (rp ? '(' + rp + ')' : '');
    }
    return d + '.' + getRepeat(f);
  } else {
    return d;
  }
};

// console.log(fractionToDecimal(2, 2));
console.log(fractionToDecimal(4, 333));


// console.log(getRepeat('348181818181'));
// console.log(getRepeat('81818181818181818181'));
// console.log(getRepeat('123123'));
// console.log(getRepeat('12345454545454545'));
// console.log(getRepeat('34211111111111111'));
// console.log(getRepeat('583333333333333'));
// console.log(getRepeat('123456123456123456'));
// console.log(getRepeat('123456123456123456'));

/*
https://en.wikipedia.org/wiki/Repeating_decimal
*/
