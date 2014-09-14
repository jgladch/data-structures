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
    if (node.value > value){
      if (node.left === undefined){
        node.left = makeBinarySearchTree(value);
      } else {
        insertValue(node.left);
      }
    } else {
      if (node.right === undefined){
        node.right = makeBinarySearchTree(value);
      } else {
        insertValue(node.right);
      }
    };
  };
  insertValue.call(this, this);
};

// O(log(n))
binaryTreeMethods.contains = function(value){
  var result = false;
  var checkTree = function(node) {
    if (node.value === value) {
      result = true;
    } else {
      if (node.value < value) {
        if (node.right !== undefined) {
          checkTree(node.right);
        }
      } else {
        if (node.left !== undefined) {
          checkTree(node.left);
        }
      }
    }
  }
  checkTree.call(this, this);
  return result;
};

// O(n)
binaryTreeMethods.depthFirstLog = function(callback){

  var treeCallback = function(node){
    callback(node.value);
    if(node.right !== undefined){
      treeCallback(node.right);
    }
    if(node.left !== undefined){
      treeCallback(node.left);
    }
  };

  treeCallback.call(this,this);
};

binaryTreeMethods.breadthFirstLog = function(callback) {

  var treeCallback = function(array){
    var nextArray = [];
    for (var x = 0; x < array.length; x++){
      callback(array[x].value);
      if(array[x].left !== undefined) {
        nextArray.push(array[x].left);
      }
      if(array[x].right !== undefined) {
        nextArray.push(array[x].right);
      }
    }
    if (nextArray.length > 0){
      treeCallback(nextArray);
    }
  };
  treeCallback([this]);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
