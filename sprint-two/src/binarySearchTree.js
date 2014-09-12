var makeBinarySearchTree = function(value){
   var newTree = {};
   newTree.left = undefined;
   newTree.right = undefined;
   newTree.value = value;

   _.extend(newTree, binaryTreeMethods);

   return newTree;
};

var binaryTreeMethods = {};

// O(log(n))
binaryTreeMethods.insert = function(value){
  //consider refactor of keyword 'this'
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
  insertValue.call(this);
};

// O(log(n))
binaryTreeMethods.contains = function(value){
  var result = false;
  var checkTree = function(node) {
    if (this.value === value) {
      result = true;
    } else {
      if (this.value < value) {
        if (this.right !== undefined) {
          checkTree.call(this.right);
        }
      } else {
        if (this.left !== undefined) {
          checkTree.call(this.left);
        }
      }
    }
  }
  checkTree.call(this);
  return result;
};

// O(n)
binaryTreeMethods.depthFirstLog = function(callback){

  var treeCallback = function(node){
    callback.call(this.value,this.value);
    if(this.right !== undefined){
      treeCallback.call(this.right);
    }
    if(this.left !== undefined){
      treeCallback.call(this.left);
    }
  };

  treeCallback.call(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
