var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  // O(1)
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

  // O(1)
  list.removeHead = function(){
    //save current head (var x) so we can return it
    var returnHead = list.head;
    //move head to where the current head's next value points to
    list.head = list.head.next;
    //return var x
    return returnHead.value;
  };

  // O(n)
  list.contains = function(target){
    var result = false;
    var checkNodes = function(node){
      if (node.value === target){
        result = true;
      } else {
        if (node.next !== null){
          node = node.next;
          checkNodes(node);
        }
      }
    };
    checkNodes(list.head);
    return result;
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
