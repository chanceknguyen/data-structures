var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var result = {};
  result.storage = {};
  result.queueCount = 0;
  result.line = [];
  _.extend(result, queueMethods);
  return result;
};

var queueMethods = {};
queueMethods.size = function() {
  return this.line.length;
};
queueMethods.enqueue = function(value) {
  this.queueCount++;
  this.line.push(this.queueCount);
  this.storage[this.queueCount] = value;
};
queueMethods.dequeue = function(value) {
  var gone = this.storage[this.line[0]];
  delete this.storage[this.line[0]];
  this.line.shift();
  return gone;
};

