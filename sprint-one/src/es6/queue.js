class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.counter = 0;
    this.line = [];
  }
  size() {
    return this.line.length;
  }
  enqueue(value) {
    this.counter++;
    this.line.push(this.counter);
    this.storage[this.counter] = value;
  }
  dequeue(value) {
    if (this.line.length > 0) {
      var gone = this.storage[this.line[0]];
      delete this.storage[this.line[0]];
      this.line.shift();
      return gone;
    }
  }
}
