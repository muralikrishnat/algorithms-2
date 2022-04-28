var replaceWithIndexes = (str, indexes) => {
    let start = indexes.length - 1;
    while(start >= 0) {
      let { s, e } = indexes[start];
      str = str.substr(0, s) + '<b>' + str.substr(s, e - s + 1) + '</b>' + str.substr(e + 1);
      start--;
    }
    return str;
  }
  var boldTagReplace = (str, words) => {
    // Finding words
    let indexes = [];
    for(let i =0; i < words.length; i++) {
      let word = words[i];
      let wordIndex = str.indexOf(word);
      if(wordIndex >= 0) {
        indexes.push({
          s: wordIndex,
          e: (wordIndex + word.length) - 1
        });
      }
    }
  
    // merging indexes
    indexes.sort((a, b) => a.s - b.s);
    let left = 0, indexLen = indexes.length;
    let resIndexes = [];
    while(left < indexLen - 1) {
      let cur = indexes[left];
      let next = indexes[left + 1];
      if ((
        cur.s >= next.s && cur.s <= next.e
      ) || (
        cur.e >= next.s && cur.e <= next.e
      )) {
        // direct overlap
        resIndexes.push({
          s: Math.min(cur.s, next.s),
          e: Math.max(cur.e, next.e)
        });
        left = left + 2;
      } else {
        // finding near by indexes
        if (cur.e === next.s - 1) {
          resIndexes.push({
            s: cur.s,
            e: next.e
          });
          left = left + 2;
        } else {
          resIndexes.push(cur);
          if (left === indexLen - 2) {
            resIndexes.push(next);
          }
        }
      }
      left++;
    }
  
  
    //replacing indexes
    return replaceWithIndexes(str, resIndexes);
  }
  
  console.log(boldTagReplace('abc123ghertch', ["abc", "123", "ert"]));