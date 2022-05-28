var evalRPN = function(tokens) {
    let len = tokens.length;
    let ops = new Set();ops.add('+');ops.add('-');ops.add('/');ops.add('*');
    let index = len - 1;
    var evalNum = (o, n1, n2) => {
      let res = null;
      switch(o) {
        case '+':
          res = n1 + n2;
          break;
        case '-':
          res = n1 - n2;
          break;
        case '/':
          res = n1 / n2;
          if (res < 0) {
            res = Math.ceil(res);
          } else {
            res = Math.floor(res);
          }
          break;
        case '*':
          res = n1 * n2;
          break;
        default:
          break;
      }
      return res;
    };
    var dfs = () => {
      let char = tokens[index--];
      if(!ops.has(char)) {
        return char - 0;
      }
      let s = dfs();
      let f = dfs();
      return evalNum(char, f, s);
    }
    return dfs();
  };
  
  // evalRPN(["3","1","2","+","/"]);
  // evalRPN(["1","2","3","+","+"]);
  // "2","3","+"
  // console.log(evalRPN(["10","2","3","+","+"]));
  // evalRPN(["13","5","/"]);
  console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]));
  // console.log(evalRPN(["4","13","5","/","+"])); //(4 + (13 / 5)) = 6
  
  /*
    2, 3, +, 5, 6, +, +
    
    + 
  */
  
  // console.log(6 / -1);