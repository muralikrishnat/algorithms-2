
var NestedIterator = function(nestedList) {
    this.index = 0;
  
    // flatten all
    var arr = [], len = nestedList.length;
    var dfs = (index, list, len) => {
      if(index + 1 > len) return;
      if(!list[index]) return;
      let item = list[index];
      if(item.isInteger()) {
        arr = [...arr, item.getInteger()];
      } else {
        dfs(0, item.getList(), item.getList().length);  
      }
      dfs(index + 1, list);
    };
    dfs(0, nestedList, len);
    this.len = arr.length;
    this.items = arr;
  };
  
  NestedIterator.prototype.hasNext = function() {
    return this.index < this.len;
  };
  
  NestedIterator.prototype.next = function() {
    return this.items[this.index++];
  };
  
  /**
   * Your NestedIterator will be called like this:
   * var i = new NestedIterator(nestedList), a = [];
   * while (i.hasNext()) a.push(i.next());
  */
  function NestedInteger(arr) {
    this.isInteger = function() {
      return typeof arr === 'number';
    };
    this.getInteger = function() {
      return arr;
    };
    this.getList = function() {
      return arr;
    };
  };
  let n1 = new NestedInteger([
    new NestedInteger(1),
    new NestedInteger([new NestedInteger(2), new NestedInteger(3)])
  ]);
  n1 = new NestedInteger(
    [
      new NestedInteger(1),
      new NestedInteger([
        new NestedInteger(2)
      ])
    ]
  );
  var n2 = new NestedInteger(
    [
      new NestedInteger(
        [
          new NestedInteger(3),
          new NestedInteger([
            new NestedInteger(4)
          ])
        ]
      )
    ]
  );
  // n2 = new NestedInteger(2)
  var i = new NestedIterator([n1, n2]), a = [];
  while (i.hasNext()) {
    let n = i.next();
    a.push(n);
    // console.log('num: ', n);
  }
  console.log(a);
  
  /*
    [[1, [2,3]], 4]
  
    stack [0] [[1,[2,3]]]
  
  */
  