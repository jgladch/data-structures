var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.counter = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.counter] = value;
  this.counter += 1;
  return;
};

Stack.prototype.pop = function() {
  var val = this.storage[this.counter -1];
  this.counter -= 1;
  if (this.counter < 0) {
    this.counter = 0;
  }
  return val;
};

Stack.prototype.size = function() {
  return this.counter;
};

