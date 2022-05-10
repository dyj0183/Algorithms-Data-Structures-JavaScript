// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
class BST {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}

	// Insert a new node with the vlaue to the Binary Search Tree
	// Time: O(log(n)), Space: O(1)
	insert(value) {
		let currentNode = this;

		// Keep looping until it finds the correct spot to insert
		while (true) {
			// Two possibilities; 1, greater or equal to
			if (value >= currentNode.value) {
				// If the right still has another node, we want to keep tracking down
				if (currentNode.right !== null) {
					currentNode = currentNode.right;
				} else {
					// Otherwise if we reach the end, create a new node and append to the right
					currentNode.right = new BST(value);
					break;
				}
			} else if (value < currentNode.value) {
				// 2, less than
				// If the left still has another node, we want to keep tracking down
				if (currentNode.left !== null) {
					currentNode = currentNode.left;
				} else {
					// Otherwise if we reach the end, create a new node and append to the left
					currentNode.left = new BST(value);
					break;
				}
			}
		}

		// Do not edit the return statement of this method.
		return this;
	}

	// Check if the node with the value exists in the tree
	contains(value) {
		let currentNode = this;
		// Loop until reaching the end of the tree (null) or finding the matched node
		while (currentNode !== null) {
			if (value < currentNode.value) {
				currentNode = currentNode.left;
			} else if (value > currentNode.value) {
				currentNode = currentNode.right;
			} else {
				// Found the matched node, return true
				console.log(`found matched: ${currentNode.value}`);
				return true;
			}
		}

		return false;
	}

	remove(value) {
		// Write your code here.
		// Do not edit the return statement of this method.
		return this;
	}
}

// Do not edit the line below.
exports.BST = BST;
