/*
Question:
Find out the longest peak in this array. It must be strictly increasing or decreasing and a peak must contain at least three numnbers.
For example: 1, 3, 3 is not a peak; 1, 5, 2 is a peak; 1, 5, 5, 9, 3 is not a peak. 

Sample Input:
[1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]

Sample Output: 
6 (0, 10, 5, 5, -1, -3)
*/

// My solution:
function longestPeak(array) {
	let longestPeakLength = 0;

	// Pretend that each int is the tip of the peak, we start from the second number in the array because first num couldn't be the tip of the peak
	for (let i = 0; i < array.length - 1; i++) {
		let peakIdx = i;
		let startIdx = i - 1;
		let endIdx = i + 1;

		// Check if the i is the tip of the peak
		if (array[peakIdx] > array[startIdx] && array[peakIdx] > array[endIdx]) {
			// If it is a peak, we start checking left side to see how far this peak goes on the left (must be strictly decreasing)
			for (let j = startIdx - 1; j >= 0; j--) {
				if (array[j] < array[j + 1]) {
					startIdx = j;
				} else {
					break;
				}
			}

			// Check right side (must be strictly increasing)
			for (let k = endIdx + 1; k <= array.length - 1; k++) {
				// If the right num is less than endIdx num, means we keep going to the right side to expand
				if (array[k] < array[k - 1]) {
					endIdx = k;
				} else {
					break;
				}
			}

			// Compare each peak's length to the longest one
			const currentPeakLength = endIdx - startIdx + 1;
			if (currentPeakLength > longestPeakLength) {
				longestPeakLength = currentPeakLength;
			}

			console.log(startIdx);
			console.log(peakIdx);
			console.log(endIdx);
		}
	}

	return longestPeakLength;
}

const testArray = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3];
console.log(`Longest Peak Length of this array is: ${longestPeak(testArray)}`);

// Do not edit the line below.
exports.longestPeak = longestPeak;
