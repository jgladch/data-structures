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
  this._count = 0;

  for (var y = 0; y < oldValues.length; y++) {
    this.insert(oldValues[y][0],oldValues[y][1]);
  }
};

// O(1)
HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);

  if (bucket !== undefined) {
    var found = false;
    for (var x = 0; x < bucket.length; x++) {
      if (bucket[x][0] === k) {
        bucket[x][1] = v;
        found = true;
      }
    }
    if (!found) { bucket.push([k,v]); }
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
  var bucket = this._storage.get(i);

  if (bucket.length === 1){
    return bucket[0][1];
  } else {
    for (var x = 0; x < bucket.length; x++){
      if (k === bucket[x][0]){
        return bucket[x][1];
      }
    }
  }
  return null;
};

// O(n)
HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if (bucket.length > 1) {
    for (var x = 0; x < bucket.length; x++) {
      if (bucket[x][0] === k) {
        bucket.splice(x,1);
      }
    }
  } else {
    bucket.splice(0,1);
  }
  this._count -= 1;

  if (this._count / this._limit < 0.25 && this._limit > 8) {
    this.reindex('decrease');
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
