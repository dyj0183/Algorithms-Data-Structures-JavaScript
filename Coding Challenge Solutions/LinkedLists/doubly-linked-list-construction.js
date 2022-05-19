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

	setTail(node) {
		// Write your code here.
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

	insertAfter(node, nodeToInsert) {
		// Write your code here.
	}

	insertAtPosition(position, nodeToInsert) {
		// Write your code here.
	}

	removeNodesWithValue(value) {
		// Write your code here.
	}

	remove(node) {
		// Write your code here.
	}

	containsNodeWithValue(value) {
		// Write your code here.
	}
}

// Do not edit the lines below.
exports.Node = Node;
exports.DoublyLinkedList = DoublyLinkedList;
