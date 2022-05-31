// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
function productSum(array) {
	let total = 0;
	for (let i = 0; i < array.length; i++) {
		if (typeof array[i] === "number") {
			total += array[i];
		} else {
			total = total + 2 * array[i][0];
		}
	}
	console.log(total);
	return total;
}

// Do not edit the line below.
exports.productSum = productSum;
