var LinkedList = function() {
  var list = {}; //{{node}}
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (!list.head) {
      list.head = newNode;
      list.tail = newNode;
    }
    if (list.head) {
      list.tail.next = newNode;
      list.tail = newNode;
    }
    //list.newNode = newNode;
  };

  list.removeHead = function() {
    var formerHead = list.head.value;
    list.head = list.head.next;
    return formerHead;

  };

  list.contains = function(target) {
    var current = list.head;
    // console.log('this is the current value',current.value);

    var search = function(node, target) {
      // console.log('this is the target', target);
      // console.log('this is the node value', node.value);
      // console.log('node value boolean', node.value === target);

      if (node.value === target) {

        return true;
      }
      if (node === list.tail && node.value !== target) {
        // console.log('this is the target', target);
        console.log('this is the value in the tail check', node.value);
        return false;
      }
      nextNode = node.next;
      return search(nextNode, target);
    };
    return search(current, target);
  };

  //recusion
  console.log(list);
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
