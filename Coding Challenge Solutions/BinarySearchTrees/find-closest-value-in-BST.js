/*
Question:
Write a function that takes in a Binary Search Tree and a target integer and returns the closest value
to that target value contained in the BST.

Sample Input:


Sample Output: 

*/

// Average Time: O(log(n)), Space: O(1) because we are not using recursion (recursion would be O(log(n)))
// Worst: a one line tree (looks like a linked list), might need to go through all of the nums, so O(n) for time complexity
function findClosestValueInBst(tree, target) {
	return findClosestHelper(tree, target, tree.value);
}

function findClosestHelper(tree, target, closest) {
	let currentNode = tree;

	// If it is equal to null, means no more node left to check
	while (currentNode !== null) {
		if (Math.abs(currentNode.value - target) < Math.abs(closest - target)) {
			closest = currentNode.value;
		}

		// We are checking the closest number, so we can take advantage of BST, only need to check one side
		if (target < currentNode.value) {
			currentNode = currentNode.left;
		} else if (target > currentNode.value) {
			currentNode = currentNode.right;
		} else {
			// Leave the loop because we already found the closest (the same number in this case)
			break;
		}
	}
	return closest;
}

// This is the class of the input tree. Do not edit.
class BST {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;
