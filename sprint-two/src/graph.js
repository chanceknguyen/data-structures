

// Instantiate a new graph
var Graph = function() {
  this.newGraph = {};
  this.nodes = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.newGraph[node] = [];
  this.nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var a = 0; a < this.nodes.length; a++) {
    if (this.nodes[a] === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var a = 0; a < this.newGraph[node].length; a++) {
    var current = this.newGraph[node][a];
    for (var b = 0; b < this.newGraph[current]; b++) {
      if (this.newGraph[current][b] === node) {
        this.newGraph[current].splice(b, 1);
      }
    }
  }
  delete this.newGraph[node];
  for (var a = 0; a < this.nodes.length; a++) {
    if (this.nodes[a] === node) {
      this.nodes.splice(a, 1);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (a = 0; a < this.newGraph[fromNode].length; a++) {
    if (this.newGraph[fromNode][a] === toNode) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.newGraph[fromNode].push(toNode);
  this.newGraph[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var a = 0; a < this.newGraph[fromNode].length; a ++ ) {
    if (this.newGraph[fromNode][a] === toNode) {
      this.newGraph[fromNode].splice(a, 1);
    }
  }
  for (var i = 0; i < this.newGraph[toNode].length; i++) {
    if (this.newGraph[toNode][i] === fromNode) {
      this.newGraph[toNode].splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.nodes.length; i++) {
    cb(this.nodes[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


