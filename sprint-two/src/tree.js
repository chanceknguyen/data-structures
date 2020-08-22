var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var flag = false;
  var search = function(tree, target) {
    if (tree.value === target) {
      flag = true;
      // break; ****** commented for commiting purposes/ this is where we were*********
    }
    // for (var ) ****** commented for commiting purposes/ this is where we were*********
  };
  search(this, target);
  return flag;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
