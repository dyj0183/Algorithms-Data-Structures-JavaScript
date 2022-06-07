// Sample input: array = [1, 2, 3]
// Sample output: [
//   [1, 2, 3],
//   [1, 3, 2],
//   [2, 1, 3],
//   [2, 3, 1],
//   [3, 1, 2],
//   [3, 2, 1]
// ]

// This one is harder for me, come back and review again
function getPermutations(array) {
	const permutations = [];
	permutationsHelper(array, [], permutations);
	return permutations;
}

function permutationsHelper(array, currentPermutation, permutations) {
	if (!array.length && currentPermutation.length) {
		permutations.push(currentPermutation);
	} else {
		for (let i = 0; i < array.length; i++) {
			const newArray = array.slice(0, i).concat(array.slice(i + 1));
			const newPermutation = currentPermutation.concat([array[i]]);
			permutationsHelper(newArray, newPermutation, permutations);
		}
	}
}

// Do not edit the line below.
exports.getPermutations = getPermutations;
