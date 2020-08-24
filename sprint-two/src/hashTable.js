var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (!bucket) {
    bucket = [];
    this._storage.set(index, bucket);
  }
  var flag = false;
  for (var a = 0; a < bucket.length; a++) {
    var tuple = bucket[a];
    if (tuple[0] === k) {
      flag = true;
      tuple[1] = v;
      break;
    }
  }
  if (flag === false) {
    bucket.push([k, v]);
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var a = 0; a < bucket.length; a++) {
    var tuple = bucket[a];
    if (tuple[0] === k) {
      return tuple[1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var flag = false;
  for (var a = 0; a < bucket.length; a++) {
    var tuple = bucket[a];
    if (tuple[0] = k) {
      flag = true;
      bucket.splice(a, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */




