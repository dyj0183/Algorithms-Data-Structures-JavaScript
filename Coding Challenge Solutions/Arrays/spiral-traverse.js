/*
Sample Input:
array = [
    [1,   2,  3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10,  9,  8, 7]

Sample Output: 
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
*/

// My Solution:
// O(n) time, O(n) space

function spiralTraverse(array) {
	let startRowIndex = 0;
	let startColIndex = 0;
	let endRowIndex = array.length - 1;
	let endColIndex = array[0].length - 1;

	const finalArray = [];
	const totalNums = array.length * array[0].length;

	// While the final result array's length is less than total numbers, we know that we need to keep going
	while (finalArray.length < totalNums) {
		// Go through the top row first
		for (let c = startColIndex; c <= endColIndex; c++) {
			if (finalArray.length === totalNums) break;
			finalArray.push(array[startRowIndex][c]);
		}

		// Go through the end column first
		for (let r = startRowIndex + 1; r < endRowIndex; r++) {
			if (finalArray.length === totalNums) break;
			finalArray.push(array[r][endColIndex]);
		}

		// Go through the bottom row first
		for (let c = endColIndex; c >= startColIndex; c--) {
			if (finalArray.length === totalNums) break;
			finalArray.push(array[endRowIndex][c]);
		}

		// Go through the start column first
		for (let r = endRowIndex - 1; r > startRowIndex; r--) {
			if (finalArray.length === totalNums) break;
			finalArray.push(array[r][startColIndex]);
		}

		// Go to the inside layer
		startRowIndex += 1;
		startColIndex += 1;
		endRowIndex -= 1;
		endColIndex -= 1;
	}

	console.log(finalArray);
	return finalArray;
}

const testArray = [
	[1, 2, 3, 4],
	[12, 13, 14, 5],
	[11, 16, 15, 6],
	[10, 9, 8, 7],
];
console.log(spiralTraverse(testArray));

// Do not edit the line below.
exports.spiralTraverse = spiralTraverse;
