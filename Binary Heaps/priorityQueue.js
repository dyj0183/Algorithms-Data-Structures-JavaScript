/*
 * Note: priority queue is just a concept, and it can be implemented in different ways such as using array/list
 * However, using array to implement it is a naiv solution because it is not efficient O(n)
 * Therefore, most people would use Binary Heaps to implement priority queue because it is O(log(n))
 */

// We are gonna write a "Min Binary Heap" because lower number means higher priority, ex: 1 is the highest in the priority
class PriorityQueue {
	constructor() {
		this.values = [];
	}

	enqueue(val, priority) {
		let newNode = new Node(val, priority);
		this.values.push(newNode);
		// Compare against the parent node by looking into the priority, if it is higher priority, then move up
		this.bubbleUp();
	}

	bubbleUp() {
		let idx = this.values.length;
		const node = this.values[idx];

        // Index can't be less than 0
		while (idx > 0) {
			// This is the formula to find the parent node index 
			let parentIdx = Math.floor((idx - 1) / 2);
            let parentNode = this.values[parentIdx];

            // If the node's priority is greater or equal to parent node's priority, then no need to swap, leave the loop  
            if (parentNode.priority <= node.priority) break;
            // Otherwise, swap the node and update the current node's index
            this.values[parentIdx] = node;
            this.values[idx] = parentNode;
            idx = parentIdx;
		}
	}
}

class Node {
	constructor(val, priority) {
		this.val = val;
		this.priority = priority;
	}
}
