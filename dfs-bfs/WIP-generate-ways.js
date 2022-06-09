/**
 * @param {string} expression
 * @return {number[]}
 */
 var diffWaysToCompute = function(expression) {
    let nStack = [], slen = expression.length;
    let w1 = '', olen = 0;
    for(let i = 0; i < slen; i++) {
      let c = expression[i];
      if(c === '*' || c === '-' || c === '+') {
        nStack.push(w1 - 0);
        nStack.push(c);
        w1 = '';
        olen++;
        olen++;
      } else {
        w1 += c;
      }
      if(i === slen - 1) {
        nStack.push(w1 - 0);
        olen++;
      }
    }
    let res = [];
    var exp = (index) => {
    }
    var dfs = (index) => {
      console.count('dfs');
      if(index < olen) {
        let n1 = nStack[index++];
        let op = nStack[index++];
        console.log(n1 + op + '(' + exp(index) + ')');
        dfs(index);
      }
    };
    dfs(0);
  };
  
  console.log(diffWaysToCompute('2-1-11'));
  