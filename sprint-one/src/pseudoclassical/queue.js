var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.currentSize = 0;
  this.counter = 0;
  this.currentIndex = 0;
};

Queue.prototype.enqueue = function(value){
  this.storage[this.currentIndex] = value;
  this.currentSize += 1;
  this.currentIndex += 1;
};

Queue.prototype.dequeue = function(){
  if ( this.currentSize === 0 ) {
    return;
  } else {
    var val = this.storage[this.counter];
    this.counter += 1;
    this.currentSize -= 1;
    return val;
  }
};

Queue.prototype.size = function(){
  return this.currentSize;
};



