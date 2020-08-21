var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.counter = 0;
  this.line = [];
};

Queue.prototype.size = function() {
  return this.line.length;
};

Queue.prototype.enqueue = function(value) {
  this.counter++;
  this.line.push(this.counter);
  this.storage[this.counter] = value;
};

Queue.prototype.dequeue = function(value) {
  if (this.line.length > 0) {
    var gone = this.storage[this.line[0]];
    delete this.storage[this.line[0]];
    this.line.shift();
    return gone;
  }
};


