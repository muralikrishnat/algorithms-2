function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  };
  var printGraph = (node) => {
    let vis = {}, adjList = {};
    let que = [];
    que.push({ nodeItem: node });
    while(que.length > 0) {
      let { nodeItem } = que.shift();
      if(!vis['V' + nodeItem.val]) {
        vis['V' + nodeItem.val] = true;
        adjList[nodeItem.val] = []
        nodeItem.neighbors.forEach(item => {
          adjList[nodeItem.val].push(item.val);
          que.push({ nodeItem: item});
        });
      }
    }
    console.log(adjList);
  }
  var cloneGraph = function(node) {
    if(!node) return node;
    let vis = {}, cloneNodeMap = {};
    let que = [], cloneNode = null;
    que.push({ nodeItem: node });
    while(que.length > 0) {
      let { nodeItem } = que.shift();
      
      if(!vis['V' + nodeItem.val]) {
        vis['V' + nodeItem.val] = true;
        if (!cloneNodeMap[nodeItem.val]) {
          cloneNodeMap[nodeItem.val] = new Node(nodeItem.val);
        }
        if (!cloneNode) {
          cloneNode = cloneNodeMap[nodeItem.val];
        }
        nodeItem.neighbors.forEach(item => {
          if (!cloneNodeMap[item.val]) {
            cloneNodeMap[item.val] = new Node(item.val);
          }
          cloneNodeMap[nodeItem.val].neighbors.push(cloneNodeMap[item.val]);
          que.push({ nodeItem: item});
        });
      }
    }
    return cloneNode;
  };
  
  
  let node1 = new Node(1);
  let node2 = new Node(2);
  let node3 = new Node(3);
  let node4 = new Node(4);
  node1.neighbors.push(node2);
  node1.neighbors.push(node4);
  
  node2.neighbors.push(node1);
  node2.neighbors.push(node3);
  
  node3.neighbors.push(node2);
  node3.neighbors.push(node4);
  
  node4.neighbors.push(node1);
  node4.neighbors.push(node3);
  
  console.log(cloneGraph());
  