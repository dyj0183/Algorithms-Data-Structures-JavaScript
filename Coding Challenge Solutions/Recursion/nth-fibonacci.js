// This is a naive solution, very bad time complexity
// Time Complexity: O(2^n), Space: O(n)
function getNthFib(n) {
	// Base case, n === 1 and n === 2
	if (n === 1) {
		return 0;
	} else if (n === 2) {
		return 1;
	} else {
		return getNthFib(n - 1) + getNthFib(n - 2);
	}
}
// Do not edit the line below.
exports.getNthFib = getNthFib;

// A much better solution
// Time Complexity: O(n), Space: O(n)
function getNthFib(n, memoize = { 1: 0, 2: 1 }) {
	if (n in memoize) {
		return memoize[n];
	} else {
		memoize[n] = getNthFib(n - 1, memoize) + getNthFib(n - 2, memoize);
		return memoize[n];
	}
}
// Do not edit the line below.
exports.getNthFib = getNthFib;
