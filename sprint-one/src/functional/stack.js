var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var stackCount = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    //storage[keysArray.length + 1] = value;
    stackCount++;
    storage[stackCount] = value;
  };

  someInstance.pop = function() {
    if (stackCount > 0) {
      var popped = storage[stackCount];
      delete storage[stackCount];
      stackCount--;
      return popped;
    }
  };

  someInstance.size = function() {
    return stackCount;
  };
  console.log(someInstance);
  return someInstance;
};
