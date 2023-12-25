const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList( l, k ) {
  while (l !== null && l.value === k) {
    l = l.next;
  }

  function removeNextList(node, k) {
    if (node === null) return null;

    if (node.value === k) return removeNextList(node.next, k);

    node.next = removeNextList(node.next, k);
    return node;
  }

  removeNextList(l, k);
  return l;
}

module.exports = {
  removeKFromList
};
