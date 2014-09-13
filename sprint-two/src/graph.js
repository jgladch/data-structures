var Graph = function(){
  this.nodes = {};
};

//O(1)
Graph.prototype.addNode = function(newNode, toNode){
  var newVertex = {
    edges: {}
  };

  var  keys = Object.keys(this.nodes);

  if (keys.length === 1){
    newVertex.edges[keys[0]] = this.nodes[keys[0]];
    this.nodes[keys[0]].edges[newNode] = newVertex;
  }

  if (toNode !== undefined) {
    newVertex.edges[toNode] = this.nodes[toNode];
  }
  this.nodes[newNode] = newVertex;
};
//O(1)
Graph.prototype.contains = function(node){
  return (this.nodes[node] !== undefined) ? true : false;
};
//O(n)
Graph.prototype.removeNode = function(node){
  var edgeNodes = this.nodes[node].edges;

  for (var x in edgeNodes) {
    delete edgeNodes[x].edges[node];
  }

  delete this.nodes[node];
};
//O(1)
Graph.prototype.getEdge = function(fromNode, toNode){
  return (this.nodes[fromNode].edges[toNode] === undefined) ? false : true;
};
//O(1)
Graph.prototype.addEdge = function(fromNode, toNode){
  var from = this.nodes[fromNode];
  var to = this.nodes[toNode];

  from.edges[toNode] = to;
  to.edges[fromNode] = from;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var from = this.nodes[fromNode];
  var to = this.nodes[toNode];

  delete from.edges[toNode];
  delete to.edges[fromNode];

  if (Object.keys(from.edges).length === 0){
    this.removeNode(fromNode);
  }
  if (Object.keys(to.edges).length === 0){
    this.removeNode(toNode);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
