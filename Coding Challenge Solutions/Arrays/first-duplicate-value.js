/*
Question:
Find out the first duplicated number in the array, if no duplicated number, return -1

Sample Input:
[2, 1, 5, 2, 3, 3, 4]

Sample Output: 
2 (First duplicated number in the array)
*/

// My solution
// Time: O(n), Space: O(1)
function firstDuplicateValue(array) {
	const myObject = {};
	// Set default to -1 because if there is no integer appears more than once, return -1
	let duplicatedNum = -1;
	for (let num of array) {
		if (!(num in myObject)) {
			myObject[num] = 1;
		} else {
			// If the "num" already exists in the object, that means it is duplicated which is the num we are looking for
			duplicatedNum = num;
			break;
		}
	}
	return duplicatedNum;
}

const testArray = [2, 1, 5, 2, 3, 3, 4];
console.log(firstDuplicateValue(testArray));

// Do not edit the line below.
exports.firstDuplicateValue = firstDuplicateValue;
