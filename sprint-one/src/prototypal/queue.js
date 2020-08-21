var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var result = Object.create(queueMethods);
  result.storage = {};
  result.counter = 0;
  result.line = [];
  return result;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.line.length;
};

queueMethods.enqueue = function(value) {
  this.counter++;
  this.line.push(this.counter);
  this.storage[this.counter] = value;
};
queueMethods.dequeue = function(value) {
  if (this.line.length > 0) {
    var gone = this.storage[this.line[0]];
    delete this.storage[gone];//*** */
    this.line.shift();
    return gone;
  }
};



