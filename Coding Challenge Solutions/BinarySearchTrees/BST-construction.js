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

	// After removing the node's value, replace with the smallest node value on its right if there is one, otherwise, replace with the one on its left
	// This is a complicated function because there are many different scenarios
	remove(value, parentNode = null) {
		let currentNode = this;
		while (currentNode !== null) {
			if (value > currentNode.value) {
				parentNode = currentNode;
				currentNode = currentNode.right;
			} else if (value < currentNode.value) {
				parentNode = currentNode;
				currentNode = currentNode.left;
			} else {
				// Found the matched node value, next step is to find the node to replace it
				if (currentNode.left !== null && currentNode.right !== null) {
					currentNode.value = currentNode.right.getMinValue();
					// Call this function again to remove the smallest node on the right side
					currentNode.right.remove(currentNode.value, currentNode);
				} else if (parentNode === null) {
					if (currentNode.left !== null) {
						currentNode.value = currentNode.left.value;
						currentNode.right = currentNode.left.right;
						currentNode.left = currentNode.left.left;
					} else if (currentNode.right !== null) {
						currentNode.value = currentNode.right.value;
						currentNode.left = currentNode.right.left;
						currentNode.right = currentNode.right.right;
					} else {
						// single node tree, do nothing
					}
				} else if (parentNode.left === currentNode) {
					parentNode.left =
						currentNode.left !== null ? currentNode.left : currentNode.right;
				} else if (parentNode.right === currentNode) {
					parentNode.right =
						currentNode.left !== null ? currentNode.left : currentNode.right;
				}
				break;
			}
		}
		// Do not edit the return statement of this method.
		return this;
	}

	getMinValue() {
		let currentNode = this;
		while (currentNode.left !== null) {
			currentNode = currentNode.left;
		}
		return currentNode.value;
	}
}

// Do not edit the line below.
exports.BST = BST;
