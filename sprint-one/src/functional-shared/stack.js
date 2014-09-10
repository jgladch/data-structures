var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage: {},
    counter: 0
  };

  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {
  push:  function(value) {
    // debugger;
    this.storage[this.counter] = value;
    this.counter += 1;
    return;
  }, pop: function() {
    var val = this.storage[this.counter - 1];
    this.counter -= 1;
    if (this.counter < 0) {
      this.counter = 0;
    }
    return val;
  }, size: function() {
    return this.counter;
  }
};
