var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var queueCount = 0;

  var position = [];
  // Implement the methods below///

  someInstance.enqueue = function(value) {
    queueCount++;

    position.push(queueCount);
    storage[queueCount] = value;

  };

  someInstance.dequeue = function() {
    if (queueCount > 0) {
      var removed = storage[position[0]];
      delete storage[position[0]];
      position.shift();
      return removed;
    }
  };

  someInstance.size = function() {
    return position.length;
  };

  return someInstance;
};
