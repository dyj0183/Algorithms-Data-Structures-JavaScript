// This is an input class. Do not edit.
class LinkedList {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

function removeKthNodeFromEnd(head, k) {
	let linkedListLength = 0;
	let node = head;
	while (node !== null) {
		linkedListLength++;
		node = node.next;
	}
	// edge case, the k doesn't exist
	if (linkedListLength < k || k < 1) {
		return;
	}

	let removedPosition = linkedListLength - k + 1;
	let currentPosition = 1;
	let removedNode = head;
	let prevOfRemovedNode = null;
	while (removedPosition !== currentPosition && node !== null) {
		currentPosition++;
		prevOfRemovedNode = removedNode;
		removedNode = removedNode.next;
	}

	prevOfRemovedNode.next = removedNode.next;

	console.log(linkedListLength);
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.removeKthNodeFromEnd = removeKthNodeFromEnd;
