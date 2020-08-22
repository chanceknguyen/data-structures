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
    } else {
      for (var a = 0; a < tree.children.length; a++) {
        search(tree.children[a], target);
      }
    }

  };
  search(this, target);/// return flagg is true what is flag at this point

  return flag;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
