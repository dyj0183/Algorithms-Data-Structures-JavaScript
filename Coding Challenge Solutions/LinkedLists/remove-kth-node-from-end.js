/*
Challenge: 
remove the kth node from the end of a singly linked list

Sample Input:
head = 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9
k = 4 

Sample Output: 
0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 7 -> 8 -> 9
the 4th node from the end (number "6") is removed
*/

// This is an input class. Do not edit.
class LinkedList {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

// use the technique of having two pointers to traverse through the entire singly linked list and find the right one
function removeKthNodeFromEnd(head, k) {
    let counter = 1;
    let first = head;
    let second = head;

    // first part, move the second pointer to have the right space (k) between itself and the first pointer (head)
    while (counter <= k) {
        second = second.next;
        counter++;
    }

    // edge case, if the second pointer is null, means already reach the end, so head node is the one we want to remove
    if (second === null) {
        head.value = head.next.value;
        head.next = head.next.next;
        return;
    }

    // otherwise, keep going until the second pointer hits the end (null), then we find the node (first pointer) we would like to remove
    while (second.next !== null) {
        second = second.next;
        first = first.next;
    }
    
    first.next = first.next.next;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.removeKthNodeFromEnd = removeKthNodeFromEnd;
