var simplifyPath = function(path) {
    let start = 0, len = path.length;
    let res = '', pStack = [], lastW = '', lastC = '';
    while(start < len) {
      let char = path[start];
      let kCode = char.charCodeAt(0);
      let nChar = path[start - 1];
      switch(char) {
        case '/':
          if (lastW.length > 0) {
            if (lastC === '.') {
              if (lastW.length === 1) {
                lastW = '';
              } else if (lastW.length === 2) {
                pStack.pop();
                lastW = '';
              } else {
                pStack.push(lastW);
                lastW = '';
              }
            } else {
              pStack.push(lastW);
              lastW = '';
            }
          }
          break;
        default:
          lastW += char;
          break;
      }
      lastC = char;
      start++;
    }
    if (lastC === '.') {
      if (lastW.length > 0) {
        if (lastW.length === 1) {
  
        } else if (lastW.length === 2) {
          pStack.pop();
        } else {
          pStack.push(lastW);
        }
      }
    } else {
      if (lastW) {
        pStack.push(lastW);
      }
    }
    res = pStack.join('/');
    return '/' + res;
  };
  console.log(simplifyPath('/root/..'));
  /*
  if ((kCode >= 65 && kCode <= 90) || (kCode >= 97 && kCode <= 122)) {
    /root/dir => /root/dir
    //root/ => /root
    /root/. => /root
    /root/.. => /root
    /root/... => /root/...
  */