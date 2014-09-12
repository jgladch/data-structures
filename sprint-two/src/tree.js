var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value){
  var newTree = makeTree(value);
  this.children.push(newTree);
};

treeMethods.contains = function(target){
  var result = false;

  var checkTree = function(tree){
    if (tree.value === target){
      result = true;
    } else {
      //look at children (x)'s values
      //if none of those values === target
      // then recurse only if that child (x) has children
      if (tree.children.length > 0){
        for (var x = 0; x < tree.children.length; x++){
          checkTree(tree.children[x]);
        }
      }
    }
  }
  checkTree(this);
  return result;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
