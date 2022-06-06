var Trie = function() {
    this.root = new Map();
  };
  
  /** 
   * @param {string} word
   * @return {void}
   */
  Trie.prototype.insert = function(word) {
    let len = word.length;
    let m = this.root;
    for(let i = 0; i < len; i++) {
      let c = word[i];
      if(m.has(c)) {
        m = m.get(c);
      } else {
        m.set(c, new Map());
        m = m.get(c);
      }
    }
    m.set('END', true);
  };
  
  /** 
   * @param {string} word
   * @return {boolean}
   */
  Trie.prototype.search = function(word) {
    let len = word.length;
    let m = this.root;
    for(let i = 0; i < len; i++) {
      let c = word[i];
      if(m && m.has && m.has(c)) {
        m = m.get(c);
      } else {
        m = null;
        break;
      }
    }
    if(m && m.has('END')) {
      return true;
    }
    return false;
  };
  
  /** 
   * @param {string} prefix
   * @return {boolean}
   */
  Trie.prototype.startsWith = function(prefix) {
    let len = prefix.length;
    let m = this.root;
    for(let i = 0; i < len; i++) {
      let c = prefix[i];
      if(m && m.has && m.has(c)) {
        m = m.get(c);
      } else {
        m = null;
        break;
      }
    }
    if(m) {
      return true;
    }
    return false;
  };
  
  /** 
   * Your Trie object will be instantiated and called as such:
   * var obj = new Trie()
   * obj.insert(word)
   * var param_2 = obj.search(word)
   * var param_3 = obj.startsWith(prefix)
   */
  