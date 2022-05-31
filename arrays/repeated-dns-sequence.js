/**
 * @param {string} s
 * @return {string[]}
 */
 var findRepeatedDnaSequences = function(s) { 
    let len = s.length;
    let start = 0;
    let genMaps = {}, res = new Set();
    while(start + 9 < len) {
      let ch = s[start];
      let genS = s.slice(start, start + 10);
      if(genMaps[ch]) {
        let genList = genMaps[ch];
        if (genList.has(genS)) {
          res.add(genS);
        }
      }
      if(!genMaps[ch]) {
        genMaps[ch] = new Set();
      }
      genMaps[ch].add(genS);
      start++;
    }
    return Array.from(res.keys());
  };
  
  console.log(findRepeatedDnaSequences("AAAAAAAAAAA"));
  console.log(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"));
  console.log(findRepeatedDnaSequences("AAAAAAAAAAAAA"));
  /*
  "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
  "AAAAAAAAAAAAA"
  */