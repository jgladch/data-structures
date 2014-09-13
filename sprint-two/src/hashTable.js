var HashTable = function(){
  this._count = 0;
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.reindex = function(reindexType) {
  var oldValues = [];

  this._storage.each(function(value, key, collection) {
    if (value !== undefined) {
      for (var x = 0; x < value.length; x++) {
        oldValues.push(value[x]);
      }
      value = undefined;
    }
  });

  if (reindexType === 'increase'){
    var newLimit = this._limit * 2;
  } else if (reindexType === 'decrease') {
    var newLimit = this._limit / 2;
  }
  this._limit = newLimit;
  this._storage = makeLimitedArray(newLimit);

  for (var y = 0; y < oldValues.length; y++) {
    var i = getIndexBelowMaxForKey(oldValues[y][0], this._limit);
    this._storage.set(i, [ oldValues[y][0], oldValues[y][1] ]);
  }

};

// O(1)
HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage.get(i) !== undefined) {
    var currentHash = this._storage.get(i);
    currentHash.push([k,v]);
    this._storage.set(i,currentHash);
  } else {
    this._storage.set(i,[[k,v]]);
  }
  this._count += 1;

  if (this._count / this._limit >= 0.75) {
    this.reindex('increase');
  }
};

// O(1)
HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var temp = this._storage.get(i);

  if (temp.length === 1){
    return temp[0][1];
  } else {
    for (var x = 0; x < temp.length; x++){
      if (k === temp[x][0]){
        return temp[x][1];
      }
    }
  }
};

// O(n)
HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var target = this._storage.get(i);
  if (target.length > 1) {
    for (var x = 0; x < target.length; x++) {
      if (target[x][0] === k) {
        target.splice(x,1);
      }
    }
  } else {
    target.splice(0,1);
  }
  this._count -= 1;

  if (this._count / this._limit < 0.25 && this._limit > 8) {
    this.reindex('decrease');
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
