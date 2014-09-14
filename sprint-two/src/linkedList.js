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
      var oldTail = list.tail;
      list.tail.next = newNode;
      list.tail = newNode;
      list.tail.previous = oldTail;
    }
    return;
  };

  list.removeTail = function(){
    //save current head (var x) so we can return it
    var returnTail = list.tail;
    //move head to where the current head's next value points to
    if (list.tail.previous !== null) {
      list.tail = list.tail.previous;
      list.tail.next = null;
    } else {
      list.head = null;
      list.tail = null;
    }
    //return var x
    return returnTail.value;
  };

  list.addToHead = function(value){
    var newNode = makeNode(value);
    if (list.head === null && list.tail === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      var oldHead = list.head;
      list.head.previous = newNode;
      list.head = newNode;
      list.head.next = oldHead;
    }
    return;
  };

  // O(1)
  list.removeHead = function(){
    //save current head (var x) so we can return it
    var returnHead = list.head;
    //move head to where the current head's next value points to
    if (list.head.next !== null) {
      list.head = list.head.next;
      list.head.previous = null;
    } else {
      list.head = null;
      list.tail = null;
    }
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
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
