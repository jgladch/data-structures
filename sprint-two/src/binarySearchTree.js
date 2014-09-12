var makeBinarySearchTree = function(value){
   var newTree = {};
   newTree.left = undefined;
   newTree.right = undefined;
   newTree.value = value;

   _.extend(newTree, binaryTreeMethods);

   return newTree;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(value){
  // check the value of the current node
  // if the parameter value is greater than the node's value
  // go right
  // else
  // go left
  //
  // if the left/right value is !== undefined
  // recursion

  var insertValue = function(node){
    if (this.value > value){
      if (this.left === undefined){
        this.left = makeBinarySearchTree(value);
      } else {
        insertValue.call(this.left);
      }
    } else {
      if (this.right === undefined){
        this.right = makeBinarySearchTree(value);
      } else {
        insertValue.call(this.right);
      }
    };
  };
  var tree = this;
  insertValue.call(tree);
};

binaryTreeMethods.contains = function(value){

};

binaryTreeMethods.depthFirstLog = function(callback){

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
