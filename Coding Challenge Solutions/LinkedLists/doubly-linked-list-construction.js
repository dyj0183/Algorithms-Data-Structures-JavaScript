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

	// If the position is at p, Time: O(p), Space: O(1)
	insertAtPosition(position, nodeToInsert) {
		if (position === 1) {
			this.setHead(nodeToInsert);
			return;
		}

		let node = this.head;
		let currentPosition = 1;
		// find out the node of the position
		while (node !== null && currentPosition++ !== position) node = node.next;

		if (node !== null) {
			this.insertBefore(node, nodeToInsert);
		} else {
			this.setTail(nodeToInsert);
		}
	}

	// Time: O(n), Space: O(1)
	// Remove all the nodes with the value in the linked list
	removeNodesWithValue(value) {
		let node = this.head;
		while (node !== null) {
			const nodeToRemove = node;
			node = node.next;
			if (nodeToRemove.value === value) this.remove(nodeToRemove);
		}
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

	// Time: O(n), Space: O(1)
	containsNodeWithValue(value) {
		let node = this.head;
		// If find the node with the matched value, then the while loop will stop
		while (node !== null && node.value !== value) node = node.next;
		// If there is no match, we might get null (which should return false), so we do another check here
		return node !== null;
	}
}

// Do not edit the lines below.
exports.Node = Node;
exports.DoublyLinkedList = DoublyLinkedList;
