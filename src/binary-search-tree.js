const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.tree = null;
  }

  root() {
    if (this.tree === undefined) return null;
    
    return this.tree;
  }

  add(data) {
    this.tree = addNewRoot(this.tree, data);

    function addNewRoot(node, data) {
      if(!node) return new Node(data);
      
      if(node.data === data) return node;

      if(data < node.data) node.left = addNewRoot(node.left, data);
      if(data > node.data) node.right = addNewRoot(node.right, data);

      return node;
    }
  }

  has(data) {
    return searchNodeValue(this.tree, data);

    function searchNodeValue(node, data) {
      if(!node) {
        return false;
      }

      if(node.data === data) {
        return true;
      }

      if(data < node.data) {
        return searchNodeValue(node.left, data);
      } else {
        return searchNodeValue(node.right, data);
      }
    }
  }

  find(data) {
    return findNode(this.tree, data);
    
    function findNode(node, data) { 
      if(!node) return null;
      
      if(node.data === data) return node;
     
      if(data < node.data) return findNode(node.left, data); 
      if(data > node.data) return findNode(node.right, data);
    }
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    if(!this.tree) return null;

    let node = this.tree;
    while(node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if(!this.tree) return null;

    let node = this.tree;
    while(node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};