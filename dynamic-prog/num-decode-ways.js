var numDecodings = function(s) {
    let dp = {}, len = s.length;
    dp[len] = 1;
    for(let i = len - 1; i >= 0; i--) {
      let char = s[i];
      if(char === '0') {
        dp[i] = 0;
        continue;
      }
      dp[i] = dp[ i + 1];
      if (i + 1 < len) {
        let char2 = s[i+1];
        if(char === '1' || (char === '2' && '0123456'.indexOf(char2) >= 0)) {
          dp[i] += dp[i+2];
        }
      }
    }
    return dp[0];
  };
  console.log(numDecodings('11106'));