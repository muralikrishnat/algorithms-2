var compareVersion = function(version1, version2) {
    let l1 = version1.length, l2 = version2.length;
    let loopIndex = 0;
    var checkrevi = (v1, v2, r1, r2) => {
      let s1 = '', s2 = '';
      if(r1 < l1) {
        for(let i = r1; i < l1;i++) {
          if (v1[i] === '.') {
            break;
          }
          s1 += v1[i];
        }
      }
      if (r2 < l2) {
        for(let i = r2; i < l2;i++) {
          if (v2[i] === '.') {
            break;
          }
          s2 += v2[i];
        }
      }
      r1 += s1.length + 1;
      r2 += s2.length + 1;
      s1 = s1 - 0;
      s2 = s2 - 0;
      if(s1 === s2) {
        if (r1 < l1 || r2 < l2) {
          return checkrevi(v1, v2, r1, r2);
        } else {
          return 0;
        }
      } else if (s1 < s2) {
        return -1;
      } else {
        return 1;
      }
    };
    let res = checkrevi(version1, version2, 0, 0);
    console.log(res);
    return res;
  };
  
  // compareVersion('1.02.04','1.02'); // 1
  // compareVersion('1.1','1.02'); // -1
  compareVersion('1.0.1','1'); // 1
  