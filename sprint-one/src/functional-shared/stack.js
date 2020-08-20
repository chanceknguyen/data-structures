var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  /////
  var result = {
  };
  result.storage = {};
  result.counterStack = 0;
  _.extend(result, stackMethods);
  return result;
};

var stackMethods = {
  size: function() {
    return this.counterStack;
  },
  push: function(value) {
    this.counterStack++;///******* */
    this.storage[this.counterStack] = value;
  },
  pop: function(value) {
    if (this.counterStack > 0) {
      var pop = this.storage[this.counterStack];
      this.counterStack--;
      return pop;
    }
  }
};





