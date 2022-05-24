var s1 = 'bcc';
var s2 = 'bca';

var t = 'bcbacc';

function checkInterleaving(s1, s2, t) {
  let res = false;
  let len = t.length, s1Len = s1.length, s2Len = s2.length;
  if(len !== s1Len + s2Len) return false;
  let dp = [];
  for(let  i =0; i <= s1Len; i++) {
    dp[i] = [];
    for(let j =0; j <= s2Len; j++) {
      dp[i][j] = 0;
    }
  }
  dp[s1Len][s2Len] = 1;
  for(let i = s1Len; i >= 0; i--) {
    for(let j = s2Len; j >= 0; j--) {
      if (i < s1Len && s1[i] == t[i + j] && dp[i + 1][j]) {
        dp[i][j] = 1;
      }
      if (j < s2Len && s2[j] == t[i + j] && dp[i][j + 1]) {
        dp[i][j] = 1;
      }
    } 
  }
  return dp[0][0] === 1;
}

console.log(checkInterleaving(s1, s2, t));



var isInterleave = function(s1, s2, s3) {
  let res = false, len = s3.length;
  let s1len = s1.length, s2len = s2.length;
  if(s1len + s2len === len && len ===0) return true;
  if(s1len + s2len !== len) return false;
  let que = [];
  que.push({
    index: 0,
    s1Map: s1.split(''),
    s2Map: s2.split(''),
    s3len: len
  });
  while(que.length > 0) {
    let {index, s1Map, s2Map, s3len } = que.shift();
    if (s3len === 0) {
      res = true;
      break;
    }
    if (index < len) {
      let char = s3[index];
      let s1Char = s1Map[0];
      let s2Char = s2Map[0];
      if (char === s1Char && char === s2Char) {
        que.push({
          index: index + 1,
          s1Map: s1Map.slice(1),
          s2Map,
          s3len: s3len - 1
        });
        que.push({
          index: index + 1,
          s1Map,
          s2Map: s2Map.slice(1),
          s3len: s3len - 1
        });
      } else if (char === s1Char) {
        s1Map.shift();
        que.push({
          index: index + 1,
          s1Map,
          s2Map,
          s3len: s3len - 1
        });
      }  else if (char === s2Char) {
        s2Map.shift();
        que.push({
          index: index + 1,
          s1Map,
          s2Map,
          s3len: s3len - 1
        });
      } else {
        
      }
    }
  }
  return res;
};

console.log(isInterleave("a","", "a")); // true