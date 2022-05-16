/*
Question:
Write a function that takes in a non-empty array of arbitrary intervals, merges any overlapping intervals,
and returns the new intervals in no particular order. 

Each interval is an array of two integers. Back-to-back intervals aren't considered to be overlapping.
For example: [1, 5], [6, 7] => no overlapping; however, [1, 5], [5, 8] has overlapping

The start of any interval will always be less than or equal to the end of the interval

Sample Input:
[
	[1, 2],
	[3, 5],
	[4, 7],
	[6, 8],
	[9, 10],
];

Sample Output: 
[ [ 1, 2 ], [ 3, 8 ], [ 9, 10 ] ]
*/

function mergeOverlappingIntervals(array) {
	const finalResult = [];
	let newInterval = [];

	// first, sort the array by the first number of each interval, so it is easier for us to use the logic below to compare
	// so it would look like this [[1, 2], [3, 5]...] instead of this [[3, 5], [1, 2]...]
	// Time: O(n(log n))
	array.sort((a, b) => a[0] - b[0]);

	// Loop through the entire array once, compare the second num in the current interval with the first num in the next interval
	// Time: O(n)
	for (let i = 0; i < array.length - 1; i++) {
		// There is no any overlapping
		if (array[i][1] < array[i + 1][0]) {
			// no overlapping, simply push the interval to final result
			finalResult.push(array[i]);
			// because we didn't loop to the end, we loop to the one before the end, so we need to make to push the last interval
			if (i + 1 === array.length - 1) {
				finalResult.push(array[array.length - 1]);
			}
		} else {
			// got overlapping
			// got the smaller num for new interval, but need to check which second num is larger for the new interval
			if (array[i][1] <= array[i + 1][1]) {
				newInterval = [array[i][0], array[i + 1][1]];
			} else {
				newInterval = [array[i][0], array[i][1]];
			}
			// combine the current interval and next interval to replace the next interval, so it can be used to compare again
			array[i + 1] = newInterval;

			// if we already combine the second last one with the last one, simple push the last one because we reach the end of loop
			if (i + 1 === array.length - 1) {
				finalResult.push(array[array.length - 1]);
			}
		}
	}
	return finalResult;
}

const testArray = [
	[1, 2],
	[3, 5],
	[4, 7],
	[6, 8],
	[9, 10],
];
// Final result should look like this: [ [ 1, 2 ], [ 3, 8 ], [ 9, 10 ] ]
console.log(mergeOverlappingIntervals(testArray));

// Do not edit the line below.
exports.mergeOverlappingIntervals = mergeOverlappingIntervals;
