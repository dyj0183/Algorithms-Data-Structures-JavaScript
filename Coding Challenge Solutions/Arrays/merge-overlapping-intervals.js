function mergeOverlappingIntervals(array) {
	const finalResult = [];
	let newInterval = [];

	// first, sort the array by the first number of each interval
	// O(n(log n))
	array.sort((a, b) => a[0] - b[0]);

	for (let i = 0; i < array.length - 1; i++) {
		// There is no any overlapping
		if (array[i][1] < array[i + 1][0]) {
			finalResult.push(array[i]);
			if (i + 1 === array.length - 1) {
				finalResult.push(array[i + 1]);
			}
		} else {
			newInterval = [array[i][0], array[i + 1][1]];
			array[i + 1] = newInterval;

			if (i + 1 === array.length - 1) {
				finalResult.push(array[i + 1]);
			}
		}
	}
	return finalResult;
}

// Do not edit the line below.
exports.mergeOverlappingIntervals = mergeOverlappingIntervals;
