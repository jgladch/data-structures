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
  // if ( this.nodes[node] !== undefined ) {
  //   return true;
  // } else {
  //   return false;
  // }
  return (this.nodes[node] !== undefined) ? true : false;
};

Graph.prototype.removeNode = function(node){
  //splice will cause a skipped index
  var edgeNodes = this.nodes[node].edges;

  // for (var x = 0; x < this.nodes.length; x++) {
  //   if (this.nodes[x].value === node) {
  //     this.nodes.splice(x,1);
  //   }
  // }

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
  // var result = false;
  // for (var y = 0; y < this.nodes.length; y++) {
  //   if (this.nodes[y].value === fromNode) {
  //     var originNode = this.nodes[y];
  //   }
  // }
  // for (var x = 0; x < originNode.edges.length; x++) {
  //   if (originNode.edges[x].value === toNode) {
  //     result = true;
  //   }
  // }
  // return result;
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
  // for (var x = 0; x < this.nodes.length; x++){
  //   if (this.nodes[x].value === fromNode) {
  //     from = this.nodes[x];
  //   }
  // }
  // for (var z = 0; z < this.nodes.length; z++){
  //   if (this.nodes[z].value === toNode) {
  //     to = this.nodes[z];
  //   }
  // }
  for (var y = 0; y < from.edges.length; y++){
    if (from.edges[y] === to) { from.edges.splice(y,1) }
  }
  for (var s = 0; s < to.edges.length; s++){
    if (to.edges[s] === from) { to.edges.splice(s,1) }
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
