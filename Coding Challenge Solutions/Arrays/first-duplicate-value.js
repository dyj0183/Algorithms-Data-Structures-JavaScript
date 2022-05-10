function firstDuplicateValue(array) {
	let myObject = {};
	let duplicated;
	for (let num of array) {
		if (!num in myObject) {
			myObject[num] = 1;
		} else {
			duplicated = num;
			break;
		}
	}
	return duplicated;
}

// Do not edit the line below.
exports.firstDuplicateValue = firstDuplicateValue;
