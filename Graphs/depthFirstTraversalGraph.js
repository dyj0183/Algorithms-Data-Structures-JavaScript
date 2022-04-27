/*
 * Depth First Traversal - Recursive
 */
class Graph {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vertex) {
		// ex: food: []
		// Prevent duplicated vertex(key) from being added
		if (!this.adjacencyList[vertex]) {
			this.adjacencyList[vertex] = [];
		}
	}

	// Connect two vertex together (both ways)
	addEdge(vertex1, vertex2) {
		this.adjacencyList[vertex1].push(vertex2);
		this.adjacencyList[vertex2].push(vertex1);
	}

	// Remove the connection between two vertex
	removeEdge(vertex1, vertex2) {
		this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v) => {
			return v !== vertex2;
		});
		this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v) => {
			return v !== vertex1;
		});
	}

	removeVertex(targetVertex) {
		// First, remove this vertex from all edges (disconnect it with any related vertex)
		this.adjacencyList[targetVertex].forEach((vertex) =>
			this.removeEdge(targetVertex, vertex)
		);
		// Second, remove the empty vertex
		delete this.adjacencyList[targetVertex];
	}

	depthFirstRecursive(start) {
		const result = [];
        // If we have visisted, mark as true like this { A: true, B: true ...}
		const visited = {};
		const adjacencyList = this.adjacencyList;

		function dfs(vertex) {
			if (!vertex) return null;
			visited[vertex] = true;
			result.push(vertex);
            // Loop through all the neighbors of the vertex
			adjacencyList[vertex].forEach((neighbor) => {
                // If the neighbor has not been visited yet, call this function again to go through its neighbor(s)
				if (!visited[neighbor]) {
					// Call the function recursively
					return dfs(neighbor);
				}
			});
		}

        // Invoke the function
		dfs(start);

		return result;
	}
}

let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

// The result should look like this ['A', 'B', 'D', 'E', 'C', 'F']
console.log(graph.depthFirstRecursive("A"));


// The graph looks like this
//      A
//     / \
//    B   C
//   /     \
//   D-----E
//   \     /
//     F


