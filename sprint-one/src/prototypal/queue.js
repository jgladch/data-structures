var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);

  someInstance.storage = {};
  someInstance.currentSize = 0;
  someInstance.counter = 0;
  someInstance.currentIndex = 0;

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.currentIndex] = value;
  this.currentSize += 1;
  this.currentIndex += 1;
};

queueMethods.dequeue = function() {
  if (this.currentSize === 0) {
    return;
  } else {
    var val = this.storage[this.counter];
    this.counter += 1;
    this.currentSize -= 1;
    return val;
  }
};

queueMethods.size = function() {
  return this.currentSize;
};
