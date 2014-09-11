var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = makeNode(value);
    if (list.head === null && list.tail === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
    return;
  };

  list.removeHead = function(){
    //save current head (var x) so we can return it
    var returnHead = list.head;
    //move head to where the current head's next value points to
    list.head = list.head.next;
    //return var x
    return returnHead.value;
  };

  list.contains = function(target){
    //starting with list.head.valu
    // start at head until we get to a tail that is equal to null
    // for each node, check if the value === target
    // if it is equal to the target, return true
    // else return false

    var currentNode = list.head;
    // var result = false;
    while (currentNode.next !== null){
      if (currentNode.value === target){
        // result = true;
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }
    return false;

  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
