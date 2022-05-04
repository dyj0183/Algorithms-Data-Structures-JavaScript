// Reverse the words in string including white space
function reverseWordsInString(string) {
	let resultArray = [];
	let startIndexOfWord = 0;
	// The string will start with a char but not a white space
	for (let i = 0; i < string.length; i++) {
		const char = string[i];

		// Run into a white space from a char, push the word in front of white space into our array
		if (char === " ") {
			resultArray.push(string.slice(startIndexOfWord, i));
			startIndexOfWord = i;
		} else if (string[startIndexOfWord] === " ") {
			// Run into a char from a white space
			resultArray.push(" ");
			startIndexOfWord++;
		}
	}

	// We still need to push the last word into the array
	resultArray.push(string.slice(startIndexOfWord));

	const finalResult = reverseArray(resultArray);
	// Turn array into string by adding no separator
	return finalResult.join("");
}

// Reverse the itmes in the array
function reverseArray(resultArray) {
	const finalResult = [];
	for (let i = resultArray.length - 1; i > -1; i--) {
		finalResult.push(resultArray[i]);
	}
	console.log(finalResult);
	return finalResult;
}

const testString = "I love coding!";
console.log(reverseWordsInString(testString));

// Do not edit the line below.
exports.reverseWordsInString = reverseWordsInString;
