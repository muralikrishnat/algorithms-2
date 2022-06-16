/**
 * @param {string} preorder
 * @return {boolean}
 */
 var isValidSerialization = function(preorder) {
    let nodes = preorder.split(','), len = nodes.length;
    if(len === 1 && nodes[0] === '#') return true;
    let nStack = [],stackIndex = 0, s = 0;
    let res = true, nodesStarted = false;
    while(s < len) {
      let nVal = nodes[s];
      if(nodesStarted && stackIndex === 0) {
        res = false;
        break;
      }
      if(nVal !== '#') {
        nodesStarted = true;
        if(nStack[stackIndex - 1]) {
          nStack[stackIndex - 1].count += 1;
          if(nStack[stackIndex - 1].count === 2) {
            nStack.pop();
            stackIndex--;
          }
        }
        nStack.push({ val: nVal, count: 0 });
        stackIndex++;
      } else {
        // found #
        if(!nStack[stackIndex - 1]) {
          res = false;
          break;
        }
        nStack[stackIndex - 1].count += 1;
      }
      if(nStack[stackIndex - 1] && nStack[stackIndex - 1].count === 2) {
        nStack.pop();
        stackIndex--;
      }
      if(s === len - 1) {
        if(nStack.length === 1 && nStack[0].count === 2) {
          nStack.pop();
          stackIndex--;
        }
      }
      s++;
    }
    return nStack.length === 0 && res === true;
  };
  
  // console.log(isValidSerialization("9,3,4,#,#,1,#,#,2,#,6,#,#"));
  console.log(isValidSerialization("#"));
  // console.log(isValidSerialization("9,3,4,#,#,1,#,#,#,2,#,6,#,#"));