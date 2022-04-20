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
		let idx = this.values.length - 1;
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

    // Remove the root node in the values array
	dequeue() {
		const maxNode = this.values[0];
		const endNode = this.values.pop();

		// If there is no more item in the values after we pop, means it is done, simply return maxNode
		if (this.values.length > 0) {
			// Remove the root node, and replace it with the last node
			this.values[0] = endNode;
			this.sinkDown();
		}
		return maxNode;
	}

	// Use the root node to compare against the child node's priority, if the priority is lower, than swap
	sinkDown() {
		let idx = 0;
		const length = this.values.length;
		const node = this.values[0];

		while (true) {
			// This is the formula to find both left and right children nodes' index
			let leftChildIdx = 2 * idx + 1;
			let rightChildIdx = 2 * idx + 2;
			let leftChildNode, rightChildNode;
			let swap = null;

			// Make sure the index is inside the boundry
			if (leftChildIdx < length) {
				leftChildNode = this.values[leftChildIdx];
				if (leftChildNode.priority < node.priority) {
					swap = leftChildIdx;
				}
			}

			// Make sure the index is inside the boundry
			if (rightChildIdx < length) {
				rightChildNode = this.values[rightChildIdx];
				// If swap is not null, means left node priority is higher than node, so we need to compare the priority between left and right to see who should go up
				if (
					(swap === null && rightChildNode.priority < node.priority) ||
					(swap !== null && rightChildNode.priority < leftChildNode.priority)
				) {
					swap = rightChildIdx;
				}
			}

			// No need to swap, root node has the highest priority (lowest priority number)
			if (swap === null) break;

			this.values[idx] = this.values[swap];
			this.values[swap] = node;
			idx = swap;
		}
	}
}

class Node {
	constructor(val, priority) {
		this.val = val;
		this.priority = priority;
	}
}

// Play with it and see how it works
let ER = new PriorityQueue();
ER.enqueue("headache", 5);
ER.enqueue("car accident", 3);
ER.enqueue("broken arm", 1);
console.log(ER);
console.log(ER.dequeue());
console.log(ER);
