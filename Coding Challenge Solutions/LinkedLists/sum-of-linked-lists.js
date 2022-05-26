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
		listOneTotal = linkedListOne.value.toString() + listOneTotal;
		linkedListOne = linkedListOne.next;
	}
	console.log(listOneTotal);

	let listTwoTotal = "";
	while (linkedListTwo !== null) {
		listTwoTotal = linkedListTwo.value.toString() + listTwoTotal;
		linkedListTwo = linkedListTwo.next;
	}
	console.log(listTwoTotal);

	let newTotal = Number(listOneTotal) + Number(listTwoTotal);
	console.log(newTotal);

	newTotal = newTotal.toString();

	let newLinkedList = new LinkedList(newTotal[newTotal.length - 1]);
	for (let i = newTotal.length - 2; i > -1; i--) {
		newLinkedList.next.value = newTotal[i];
		newLinkedList.next = newTotal[i];
		newLinkedList = newLinkedList.next;
	}

	console.log(newLinkedList);

	return linkedListOne;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.sumOfLinkedLists = sumOfLinkedLists;
