var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.counter = 0;

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value){
  this.storage[this.counter] = value;
  this.counter += 1;
  return;
};

stackMethods.pop = function() {
  var val = this.storage[this.counter - 1];
  this.counter -= 1;
  if (this.counter < 0) {
    this.counter = 0;
  }
  return val;
};

stackMethods.size = function() {
  return this.counter;
};


