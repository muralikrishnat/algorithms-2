function Node(v, c) {
    this.val = v;
    this.childs = c || [];
  }
  
  var depthMap = new Map();
  function parseNode(node, depth) {
    let val = node.val;
    let mapVal = {
      sum: val,
      count: 1,
      val: val / 1
    };
    if (depthMap.has(depth)) {
      let d = depthMap.get(depth);
      mapVal.sum += d.sum;
      mapVal.count += 1;
      mapVal.val = mapVal.sum / mapVal.count;
    }
    depthMap.set(depth, mapVal);
    node.childs.forEach(item => {
      parseNode(item, depth + 1);
    });
  }
  
  function GetAverageSum(node) {
    parseNode(node, 0);
    return Array.from(depthMap.values()).map(x => x.val);
  }
  
  
  
  
  var l31 = new Node(7);
  var l32 = new Node(15);
  var l22 = new Node(20, [l31, l32]);
  var l21 = new Node(9);
  var root = new Node(3, [l21, l22]);
  console.log(GetAverageSum(root));
  