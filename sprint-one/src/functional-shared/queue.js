var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage: {},
    currentSize: 0,
    counter: 0,
    index: 0
  };

  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.index] = value;
    this.currentSize += 1;
    this.index += 1;
  },
  dequeue: function(){
    if ( this.currentSize === 0 ) {
      return;
    } else {
      var val = this.storage[this.counter];
      this.counter += 1;
      this.currentSize -= 1;
      return val;
    }
  },
  size: function() {
    return this.currentSize;
  }
};



