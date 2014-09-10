var makeStack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value){
    storage[size] = value;
    size += 1;
    return;
  };

  someInstance.pop = function(){
    var val = storage[size-1];
    size -= 1;
    if (size < 0) {
      size = 0;
    }
    return val;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
