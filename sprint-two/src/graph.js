var Graph = function(){
  this.nodes = []; //may be []?
};

Graph.prototype.addNode = function(newNode, toNode){
  var newVertex = {
    value: newNode,
    edges: []
  };
  if (this.nodes.length === 1) {
    newVertex.edges.push(this.nodes[0]);
    this.nodes[0].edges.push(newVertex);
  }
  if (toNode !== undefined) {
    for (var x = 0; x < this.nodes.length; x++){
      if (this.nodes[x].value === toNode) {
        newVertex.edges.push(this.nodes[x]);
      }
    }
  }
  this.nodes.push(newVertex);
};

Graph.prototype.contains = function(node){
  var result = false;
  for (var x = 0; x < this.nodes.length; x++){
    if (this.nodes[x].value === node){
      result = true;
    }
  }
  return result;
};

Graph.prototype.removeNode = function(node){
  //splice will cause a skipped index
  for (var x = 0; x < this.nodes.length; x++) {
    if (this.nodes[x].value === node) {
      this.nodes.splice(x,1);
    }
  }
};

Graph.prototype.getEdge = function(fromNode, toNode){
  var result = false;
  for (var y = 0; y < this.nodes.length; y++) {
    if (this.nodes[y].value === fromNode) {
      var originNode = this.nodes[y];
    }
  }
  for (var x = 0; x < originNode.edges.length; x++) {
    if (originNode.edges[x].value === toNode) {
      result = true;
    }
  }
  return result;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  var from;
  var to;
  for (var x = 0; x < this.nodes.length; x++){
    if (this.nodes[x].value === fromNode) {
      from = this.nodes[x];
    }
  }
  for (var z = 0; z < this.nodes.length; z++){
    if (this.nodes[z].value === toNode) {
      to = this.nodes[z];
    }
  }
  from.edges.push(to);
  to.edges.push(from);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var from;
  var to;
  for (var x = 0; x < this.nodes.length; x++){
    if (this.nodes[x].value === fromNode) {
      from = this.nodes[x];
    }
  }
  for (var z = 0; z < this.nodes.length; z++){
    if (this.nodes[z].value === toNode) {
      to = this.nodes[z];
    }
  }
  for (var y = 0; y < from.edges.length; y++){
    if (from.edges[y].value === toNode) { from.edges.splice(y,1) }
  }
  for (var s = 0; s < to.edges.length; s++){
    if (to.edges[s].value === fromNode) { to.edges.splice(s,1) }
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
