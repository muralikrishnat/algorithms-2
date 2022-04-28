console.clear();

var wordBreak = function(s, wordDict) {
  let que = [], isValid = false;
  que.push({
    index: 0,
    str: s,
    words: wordDict.filter(x => x.indexOf(s[0]) === 0)
  });
    let loopIndex = 0, loopMax = 100000;
  console.log('mac', loopMax);
  while (que.length > 0 && loopIndex < loopMax) {
    let { str, index, words } = que.shift();
    for(let i = 0;i < words.length; i++){
      let restStr = str.replace(new RegExp(words[i], ''), ' ');
      if (restStr.trim().length === 0) {
        isValid = true;
        break;
      }
      let nextWords = wordDict.filter(x => x.indexOf(restStr.trim()[0]) === 0);
      que.push({
        str: restStr,
        words: nextWords
      });
    }
    loopIndex++;  
  }
  return isValid;
};

console.log(wordBreak("bccdbacdbdacddabbaaaadababadad", ["cbc","bcda","adb","ddca","bad","bbb","dad","dac","ba","aa","bd","abab","bb","dbda","cb","caccc","d","dd","aadb","cc","b","bcc","bcd","cd","cbca","bbd","ddd","dabb","ab","acd","a","bbcc","cdcbd","cada","dbca","ac","abacd","cba","cdb","dbac","aada","cdcda","cdc","dbc","dbcb","bdb","ddbdd","cadaa","ddbc","babb"]));