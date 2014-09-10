var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var counter = 0;
  var index = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[index] = value;
    size += 1;
    index += 1;
  };

  someInstance.dequeue = function(){
    if ( size === 0 ) {
      return;
    } else {
      var val = storage[counter];
      counter += 1;
      size -= 1;
      return val;
    }
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
