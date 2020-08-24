var BinarySearchTree = function(value) {
  var bTree = {};
  bTree.value = value;
  bTree.left = null;
  bTree.right = null;
  _.extend(bTree, bTreeMethods);
  return bTree;
};

var bTreeMethods = {};
bTreeMethods.insert = function(value) {
  var branch;
  var search = function(tree, target) {
    if (target > tree.value) {
      branch = tree.right;
      if (branch === null) {
        tree.right = BinarySearchTree(target);
        return tree.right;
      } else {
        search(branch, target);
      }
    } else {
      branch = tree.left;
      if (branch === null) {
        tree.left = BinarySearchTree(target);
        return tree.left;
      } else {
        search(branch, value);
      }
    }
  };
  search(this, value);
};

bTreeMethods.contains = function(value) {
  var branch;
  var flag = false;
  var search = function(tree, target) {
    if (target === tree.value) {
      flag = true;
      return true;

    }
    if (target > tree.value) {
      branch = tree.right;
      if (branch === null) {
        return false;
      } else {
        search(branch, target);
      }
    } else {
      branch = tree.left;
      if (branch === null) {
        return false;
      } else {
        search(branch, target);
      }
    }
  };
  search(this, value);
  return flag;

};

bTreeMethods.depthFirstLog = function(cb) {
  var branch;
  var results = [];
  var search = function(tree, cb) {
    results.push(cb(tree.value));
    if (tree.left) {
      search(tree.left, cb);
    }
    if (tree.right) {
      search(tree.right, cb);
    }
  };
  search(this, cb);
  return results;

};
/*
 * Complexity: What is the time complexity of the above functions?
 */
