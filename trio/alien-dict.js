var wordSet = {};
var wordChain = (() => {
  var root = null;
  var wordStack = {};
  var WordNode = function(w, next, prev) {
    this.w = w;
    this.next = next;
    this.prev = prev;
  }
  var chain = function() {};
  chain.prototype.add = (char1, char2) => {
    if (!wordStack[char1] && !wordStack[char2]) {
      wordStack[char2] = new WordNode(char2);
      wordStack[char1] = new WordNode(char1, wordStack[char2]);
      wordStack[char2].prev = wordStack[char1];
    } else if (wordStack[char1] && !wordStack[char2]) {
      let nextChar = wordStack[char1].next;
      wordStack[char2] = new WordNode(char2, nextChar);
      wordStack[char1].next = wordStack[char2];
      wordStack[char2].prev = wordStack[char1];
    } else if (!wordStack[char1] && wordStack[char2]) {
      wordStack[char1] = new WordNode(char1, wordStack[char2]);
      wordStack[char2].prev = wordStack[char1];
    } else {
      if (!wordStack[char1].next) {
        wordStack[char1].next = wordStack[char2];
        let prev = wordStack[char1];
        while(prev) {
          root = prev;
          prev = prev.prev;
        }
      }
    }
  };
  chain.prototype.get = () => {
    let cur = root, res = '';
    while(cur) {
      res = res + (res.length > 0 ? ' => ': '') + cur.w;
      cur = cur.next;
    }
    return res;
  }
  return new chain();
})();
var compareWords = (word1, word2) => {
  let start = 0, len1 = word1.length, len2 = word2.length;
  let len = len1 > len2 ? len1 : len2; 
  while(start < len) {
    let char1 = word1[start];
    let char2 = word2[start];
    if (char1 && char2 && char1 !== char2) {
      wordChain.add(char1, char2);
    }
    start++;
  }
}
var getDict = (words) => {
  let len = words.length;
  let word1 = words[0];
  let start = 1;
  let stack = [];
  while(start < len) {
    let curWord = words[start];
    console.group(word1 + ':' + curWord);
    compareWords(word1, curWord);
    console.groupEnd(word1 + ':' + curWord);
    word1 = curWord;
    start++;
  }
  return wordChain.get();
}
let expect = 'wertf';
console.log(getDict(["wrt","wrf","er","ett","rftt"]));
