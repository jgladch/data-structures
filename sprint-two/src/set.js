var makeSet = function(){
  var set = Object.create(setPrototype);
  // set._storage = undefined;
  return set;
};

var setPrototype = {};

// O(1)
setPrototype.add = function(item){
  if (!(item in this)){
    this[item] = item;
  }
};

// O(1)
setPrototype.contains = function(item){
  for (var x in this) {
    if (this[x] === item) {
      return true;
    }
  }
  return false;
};

// O(n)
setPrototype.remove = function(item){
  delete this[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
