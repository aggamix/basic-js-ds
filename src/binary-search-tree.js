const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  coinstructor() {
    this.tree = null;
  }

  root() {
    if (this.tree === undefined) {
      return null;
    } else {
      return this.tree;
    }
  }

  add(data) {
    this.tree = addNewRoot(this.tree, data);

    function addNewRoot(node, data) {
      if(!node) {
        return new Node(data);
      }
      
      if(node.data === data) {
        return node; 
      }

      if(data < node.data) {
        node.left = addNewRoot(node.left, data);
      } else {
        node.right = addNewRoot(node.right, data);
      }

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

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    if(!this.tree) {
      return undefined;
    }

    let node = this.tree;
    while(node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if(!this.tree) {
      return undefined;
    }

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