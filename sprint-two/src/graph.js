var Graph = function(){
  this.nodes = {};
};

Graph.prototype.addNode = function(newNode, toNode){
  var newVertex = {
    value: newNode,
    edges: []
  };

  var  keys = Object.keys(this.nodes);

  if (keys.length === 1){
    newVertex.edges.push(this.nodes[keys[0]]);
    this.nodes[keys[0]].edges.push(newVertex);
  }

  if (toNode !== undefined) {
    newVertex.edges.push(this.nodes[toNode]);
  }
  this.nodes[newNode] = newVertex;
};

Graph.prototype.contains = function(node){
  return (this.nodes[node] !== undefined) ? true : false;
};

Graph.prototype.removeNode = function(node){
  var edgeNodes = this.nodes[node].edges;

  for (var x = 0; x < edgeNodes.length; x++){
    for (var y = 0; y < edgeNodes[x].edges.length; y++){
      if ( edgeNodes[x].edges[y] === this.nodes[node]) {
        edgeNodes[x].edges.splice(y,1);
      }
    }
  }
  this.nodes[node] = undefined;
};

Graph.prototype.getEdge = function(fromNode, toNode){
  var result = false;
  for (var x = 0; x < this.nodes[fromNode].edges.length; x++) {
    if (this.nodes[fromNode].edges[x] === this.nodes[toNode]) {
      result = true;
    }
  }
  return result;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  var from = this.nodes[fromNode];
  var to = this.nodes[toNode];

  from.edges.push(to);
  to.edges.push(from);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var from = this.nodes[fromNode];
  var to = this.nodes[toNode];

  for (var y = 0; y < from.edges.length; y++){
    if (from.edges[y] === to) { from.edges.splice(y,1);}
  }
  for (var s = 0; s < to.edges.length; s++){
    if (to.edges[s] === from) { to.edges.splice(s,1);}
  }
  if (from.edges.length === 0){
    this.removeNode(fromNode);
  }
  if (to.edges.length === 0){
    this.removeNode(toNode);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
