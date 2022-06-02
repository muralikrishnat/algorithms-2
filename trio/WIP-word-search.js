
var WordDictionary = function() {
    this.map = new Map();
  };
  
  /** 
   * @param {string} word
   * @return {void}
   */
  WordDictionary.prototype.addWord = function(word) {
    let len = word.length;
    let m = this.map;
    for(let i = 0; i < len; i++) {
      let c = word[i];
      let g = new Map();
      if(m.has(c)) {
        g = m.get(c);
      }
      m.set(c, g);
      m = m.get(c);
    }
    if(m) {
      m.set('end', true);
    }
  };
  
  /** 
   * @param {string} word
   * @return {boolean}
   */
  WordDictionary.prototype.search = function(word) {
    let m = null, len = word.length;
    var searchMap = (index, map) => {
      if (!map) return;
      let c = word[index];
      if(index === len - 1) {
        if(c === '.') {
          let foundEnd = false;
          for(let [k, v] of map) {
            console.log(v.has);
            if(v && v.has && v.has('end')) {
              foundEnd = v;
              break;
            }
          }
          if(foundEnd) {
            m = foundEnd;
          }
        } else {
          if(map.has(c)) {
            let m1 = map.get(c);
            if(m1.has('end')) {
              m = m1;
            }
          }
        }
      }
      if(index < len - 1) {
        if(c === '.') {
          for(let [k, v] of map) {
            searchMap(index + 1, map.get(k));
          }
        } else {
          searchMap(index + 1, map.get(c));
        }
      }
    };
    searchMap(0, this.map);
    if(m) {
      return true;
    }
    return false;
  };
  
  /** 
   * Your WordDictionary object will be instantiated and called as such:
   * var obj = new WordDictionary()
   * obj.addWord(word)
   * var param_2 = obj.search(word)
   */
  
  var obj = new WordDictionary()
  obj.addWord('a');
  obj.addWord('a');
  console.log(obj.search('.'));
  console.log(obj.search('a'));
  console.log(obj.search('a.'));
  console.log(obj.search('aa'));
  // console.log(obj.search('bat'));
  // console.log(obj.search('ba.'));