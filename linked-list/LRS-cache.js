var LRUCache = function(capacity) {
    this.cacheKey = {};
    this.capacity = capacity;
    this.count = 0;
    
    this.List = function(v, p, n, k) {
      this.val = v;
      this.prev = p || null;
      this.next = n || null;
      this.key = k;
    }
    var l = new this.List();
    var m = new this.List();
    l.next = m;
    m.prev = l;
    this.l = l;
    this.m = m;
  };
  
  LRUCache.prototype.get = function(key) {
    if (this.cacheKey[key]) {
      let node = this.cacheKey[key];
      let p = node.prev;
      let n = node.next;
      p.next = n;
      n.prev = p;
  
      let mp = this.m.prev;
      mp.next = node;
      node.prev = mp;
      node.next = this.m;
      this.m.prev = node;
      return node.val;
    } else {
      return -1;
    }
  };
  
  LRUCache.prototype.put = function(key, value) {
    if (this.cacheKey[key]) {
      let node = this.cacheKey[key];
      node.val = value;
      // delete from place
      let p = node.prev;
      let n = node.next;
      p.next = n;
      n.prev = p;
      // insert in recent
      let mp = this.m.prev;
      mp.next = node;
      node.prev = mp;
      node.next = this.m;
      this.m.prev = node;
    } else {
      if (this.count + 1 > this.capacity) {
        let ln = this.l.next;
        delete this.cacheKey[ln.key];
        this.l.next = ln.next;
        ln.next.prev = this.l;
        this.count -= 1;
      }
      let node = new this.List(value);
      node.key = key;
      this.cacheKey[key] = node;
      let p = this.m.prev;
      this.m.prev = node;
      p.next = node;
      node.prev = p;
      node.next = this.m;
      this.count += 1;
    }
  };