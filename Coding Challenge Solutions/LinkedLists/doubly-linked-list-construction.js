/*
Challenge: 
Finish all the functions for the doubly Linked List
*/

// This is an input class. Do not edit.
class Node {
	constructor(value) {
		this.value = value;
		this.prev = null;
		this.next = null;
	}
}

// Feel free to add new properties and methods to the class.
class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	// Time: O(1), Space: O(1)
	setHead(node) {
		// If there is no head, means nothing in the doubly linked list yet, set up the node to be both head & tail
		if (this.head === null) {
			this.head = node;
			this.tail = node;
			return;
		}
		this.insertBefore(this.head, node);
	}

	// Time: O(1), Space: O(1)
	setTail(node) {
		// edge case where the linked list is empty
		if (this.tail === null) {
			this.setHead(node);
			return;
		}

		this.insertAfter(this.tail, node);
	}

	// Time: O(1), Space: O(1)
	insertBefore(node, nodeToInsert) {
		// Prevent the edge case from happening
		if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
		// before we insert the node to its new place, we need to remove it from the linked list first
		this.remove(nodeToInsert);

		// set up the prev and next for new node
		nodeToInsert.prev = node.prev;
		nodeToInsert.next = node;

		if (node.prev === null) {
			this.head = nodeToInsert;
		} else {
			// need to reset the prev node's next connection to the node we insert
			node.prev.next = nodeToInsert;
		}

		// set up the prev node for old node
		node.prev = nodeToInsert;
	}

	// Time: O(1), Space: O(1)
	insertAfter(node, nodeToInsert) {
		// edge case, prevent it from happening
		if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
		// remove the node from linked list first
		this.remove(nodeToInsert);

		// take care of the connections for nodeToInsert
		nodeToInsert.prev = node;
		nodeToInsert.next = node.next;

		// means the node is the last node (tail)
		if (node.next === null) {
			this.tail = nodeToInsert;
		} else {
			node.next.prev = nodeToInsert;
		}

		node.next = nodeToInsert;
	}

	insertAtPosition(position, nodeToInsert) {
		// Write your code here.
	}

	removeNodesWithValue(value) {
		// Write your code here.
	}

	// Time: O(1), Space: O(1)
	remove(node) {
		// take care of two edge cases where the node we want to remove is either the head or tail
		if (node === this.head) {
			this.head = this.head.next;
		}
		if (node === this.tail) {
			this.tail = this.tail.prev;
		}

		// call the helper function to remove it
		this.removeNodeBindings(node);
	}

	// Helper function for the remove
	removeNodeBindings(node) {
		if (node.prev !== null) node.prev.next = node.next;
		if (node.next !== null) node.next.prev = node.prev;
		// disconnect itself with other nodes
		node.prev = null;
		node.next = null;
	}

	containsNodeWithValue(value) {
		// Write your code here.
	}
}

// Do not edit the lines below.
exports.Node = Node;
exports.DoublyLinkedList = DoublyLinkedList;
