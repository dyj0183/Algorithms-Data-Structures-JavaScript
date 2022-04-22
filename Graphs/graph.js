/*
 * Graph Terms
 * Vertex - a node
 * Edge - connection between nodes
 * Weighted vs Unweighted
 * Directed vs Undirected
 *
 * Two main ways to store graphs: Adjacency Matrix vs Adjacency List
 * Adjacency Matrix: Cons: take up more space (in sparse graphs), slower to iterate over all edges; Pros: faster to look up specific edge
 * Adjacency List: Pros: can take up less space (in sparse graphs), faster to iterate over all edges; Cons: Can be slower to look up specific edge
 * We are gonna use "Adjacency List" because most data in the real-world tends to lend itself to sparser and/or larger graphs
 */

// We are building an undirected graph
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
}
