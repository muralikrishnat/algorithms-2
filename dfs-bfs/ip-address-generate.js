var restoreIpAddresses = function(s) {
    let res = [], len = s.length;
    if (len > 12 || len < 4) return res;
    if (len === 12) {
      let ip = [];
      for(let i = 0; i < 4; i++) {
        let part = s.slice(i * 3, (i * 3) + 3);
        if (part - 0 >= 0 && part - 0 <= 255) {
          ip.push(part);
        } else {
          ip = [];
          break;
        }
      }
      if(ip.length === 0) return [];
      return [ip.join('.')];
    }
    if (len === 4) {
      let ip = [];
      for(let i = 0; i < 4; i++) {
        let part = s.slice(i * 1, (i * 1) + 1);
        if (part - 0 >= 0 && part - 0 <= 255) {
          ip.push(part);
        } else {
          ip = [];
          break;
        }
      }
      if(ip.length === 0) return [];
      return [ip.join('.')];
    }
    let que = [];
    que.push({
      ip: [],
      part: 0,
      rpart: 3,
      index: 0,
    });
    while(que.length > 0) {
      let { ip, part, index, rpart } = que.shift();
      if (part === 0 || part === 1 || part === 2 || part === 3) {
        for(let i = 1; i <= 3; i++) {
          let plen = index + i;
          let resLen = len - (plen);
          let spart = s.substr(index, i);
          let respart = s.substr(index + i);
          if (resLen >= rpart && resLen <= rpart * 3 && (spart - 0) <= 255) {
            if (!(spart.length > 1 && spart[0] === '0')) {
              let ip2 = [...ip];
              ip2.push(spart);
              que.push({
                ip: ip2,
                part: part + 1,
                rpart: rpart - 1,
                index: plen,
              });
            }
          }
        }
      }
      if(part === 4) {
        res.push(ip.join('.'));
      }
    }
    return res;
  };
  // console.log(restoreIpAddresses('25525511135'));
  console.log(restoreIpAddresses('10.10.2.3'.split('.').join('')));
  
  [
    '0.0.0.0',
    '1.1.1.11',
    '1.1.11.1',
    '1.11.1.1',
    '11.1.1.1',
  
    '1.1.1.911',
    '1.1.19.11',
  
    '1.1.11.11',
    '1.11.11.11',
    '11.11.11.11',
    '11.11.11.111',
    '11.11.111.111',
    '11.111.111.111',
  
    '111.111.111.111',
    '1.1.1.111',
  ].forEach(x => {
    let len = x.split('.').join('').length;
    // console.log(len, len % 4, len / 4);
  });