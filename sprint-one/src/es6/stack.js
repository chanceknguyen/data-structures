class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.counter = 0;
  }
  size() {
    return this.counter;
  }

  push(value) {
    this.counter++;
    this.storage[this.counter] = value;
  }

  pop(value) {
    if (this.counter > 0 ) {
      var popped = this.storage[this.counter];
      delete this.storage[this.counter];
      this.counter--;
      return popped;
    }
  }


}


