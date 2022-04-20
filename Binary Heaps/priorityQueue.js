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

    insert(val, priority) {
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        // compare against the parent node by looking into the priority, if it is higher priority, then move up
        this.bubbleUp();
    }

    bubbleUp() {

    }
}

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}