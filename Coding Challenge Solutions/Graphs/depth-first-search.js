// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
	constructor(name) {
		this.name = name;
		this.children = [];
	}

	addChild(name) {
		this.children.push(new Node(name));
		return this;
	}

	depthFirstSearch(array) {
		// object to help me know which vertex has been visited
		let visited = {};
		let name = this.name;
		let children = this.children;

		function dfs(name, children) {
			// push the first vertex into the array
			array.push(name);
			visited[name] = true;

			if (children.length > 0) {
				children.forEach((neighbor) => {
					if (!visited[neighbor.name]) {
						dfs(neighbor.name, neighbor.children);
					}
				});
			}
		}

		dfs(name, children);

		// return the final result
		return array;
	}
}

// Do not edit the line below.
exports.Node = Node;
