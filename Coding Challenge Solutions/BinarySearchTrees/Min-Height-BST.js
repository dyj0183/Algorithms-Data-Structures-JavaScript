// write a function that takes in a non-empty sorted array of distinct integers, contructs a BST from
// the integers, and returns the root of the BST

// Time: O(n); Space: O(n)

function minHeightBst(array) {
	return buildMinHeightBst(array, null, 0, array.length - 1);
}
// Recursion Solution
function buildMinHeightBst(array, bst, startIdx, endIdx) {
	if (endIdx < startIdx) return;
	// math floor round down to the nearest integer
	const midIdx = Math.floor((startIdx + endIdx) / 2);
	const newBstNode = new BST(array[midIdx]);
	// when there is no head node yet
	if (bst === null) {
		bst = newBstNode;
	} else {
		if (array[midIdx] < bst.value) {
			bst.left = newBstNode;
			// this part is critical
			bst = bst.left;
		} else {
			bst.right = newBstNode;
			// this part is critical
			bst = bst.right;
		}
	}
	// go to the left side
	buildMinHeightBst(array, bst, startIdx, midIdx - 1);
	// go to the right side
	buildMinHeightBst(array, bst, midIdx + 1, endIdx);
	return bst;
}

class BST {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}

	insert(value) {
		if (value < this.value) {
			if (this.left === null) {
				this.left = new BST(value);
			} else {
				this.left.insert(value);
			}
		} else {
			if (this.right === null) {
				this.right = new BST(value);
			} else {
				this.right.insert(value);
			}
		}
	}
}

// Do not edit the line below.
exports.minHeightBst = minHeightBst;
