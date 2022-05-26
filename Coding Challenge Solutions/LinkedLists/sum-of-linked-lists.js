// This is an input class. Do not edit.
class LinkedList {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
	let listOneTotal = "";
	while (linkedListOne !== null) {
		listOneTotal += linkedListOne.value.toString();
		linkedListOne = linkedListOne.next;
	}
	console.log(listOneTotal);
	return linkedListOne;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.sumOfLinkedLists = sumOfLinkedLists;
