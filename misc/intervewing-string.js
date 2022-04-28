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