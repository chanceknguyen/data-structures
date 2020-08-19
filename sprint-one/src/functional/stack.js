var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var keysArray = Object.keys(storage);
  // Implement the methods below
  someInstance.push = function(value) {
    //storage[keysArray.length + 1] = value;
    return this[1] = 'beep';
  };

  someInstance.pop = function() {
  };

  someInstance.size = function() {
    if (keysArray.length < 1) {
      return 0;
    }
    return keysArray.length;
  };
  console.log(someInstance);
  return someInstance;
};
