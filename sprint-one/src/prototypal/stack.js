var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var result = Object.create(stackMethods);////**** */
  result.storage = {};
  result.count = 0;
  return result;
};

var stackMethods = {};///
stackMethods.size = function() {
  return this.count;
};
stackMethods.push = function(value) {
  this.count++;
  this.storage[this.count] = value;
};
stackMethods.pop = function(value) {
  if (this.count > 0) {
    var popped = this.storage[this.count];
    delete this.storage[this.count];
    this.count--;
    return popped;
  }

};



