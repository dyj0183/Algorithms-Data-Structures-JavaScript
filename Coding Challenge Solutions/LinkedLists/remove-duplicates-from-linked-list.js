/*
Challenge: 
Return the modified version of the Linked List that doesn't contain any nodes with duplicate values. 
The given singly Linked List's nodes are in sorted order.

Sample Input:
1 -> 1 -> 1 -> 3 -> 3 -> 4 -> 5 -> 5 -> 6 -> 6 

Sample Output: 
1 -> 3 -> 4 -> 5 -> 6
*/

// My solution
// Time: O(n), Space: O(1)

// This is an input class. Do not edit.
class LinkedList {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

function removeDuplicatesFromLinkedList(linkedList) {
	// a copy of linkedList, changing currentNode will also change linkedList
	let currentNode = linkedList;

	while (currentNode !== null) {
		let nextDistinctNode = currentNode.next;
		// keep looping until we are done going through the same value of nodes
		while (
			nextDistinctNode !== null &&
			nextDistinctNode.value === currentNode.value
		) {
			// this gives us the next distinct node
			nextDistinctNode = nextDistinctNode.next;
		}
		// skip all the duplicated nodes and point to the next node with different value
		currentNode.next = nextDistinctNode;
		currentNode = nextDistinctNode;
	}

	return linkedList;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;
