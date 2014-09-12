var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

// O(1)
HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //check if there is an entry in the hash index already
  if (this._storage.get(i) !== undefined) {
    var currentHash = this._storage.get(i);
    currentHash.push([k,v]);
    this._storage.set(i,currentHash);
  } else { //nothing in the hash index yet
    this._storage.set(i,[[k,v]]);
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
  this._storage.each(function(value,key,collection){
    if (i === key){
      value[0][1] = null;
      //deletion might not be ideal
      //loop through the arrays, looking for the correct value
    }
    //return that mofo
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
