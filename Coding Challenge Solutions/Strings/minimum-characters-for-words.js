function minimumCharactersForWords(words) {
	let wordCharListArray = [];
	for (let word of words) {
		let currentCharList = {};
		// loops through all the words and organize them into objects
		for (let i = 0; i < word.length; i++) {
			if (word[i] in currentCharList) {
				currentCharList[word[i]] += 1;
			} else {
				currentCharList[word[i]] = 1;
			}
		}

		// Save all objects into the array
		wordCharListArray.push(currentCharList);
	}

	const finalCharList = getFinalMinCharList(wordCharListArray);
	const finalArray = turnFinalCharListToArray(finalCharList);
	return finalArray;
}

// This function figures out the min chars for all the words and return the final min char list
function getFinalMinCharList(wordCharListArray) {
	let finalCharList = {};
	for (let charList of wordCharListArray) {
		keys = Object.keys(charList);
		keys.forEach((key) => {
			// If the final list doesn't have the key, assign the current key and value to it
			if (!finalCharList[key]) {
				finalCharList[key] = charList[key];
			} else if (finalCharList[key] < charList[key]) {
				// If they have the same key, but current list has higher value, then we want to save the higher value into final list
				finalCharList[key] = charList[key];
			}
		});
	}
	return finalCharList;
}

// This function goes through final min char list and make sure to count & save all char into the final array
function turnFinalCharListToArray(finalCharList) {
	const finalArray = [];
	keys = Object.keys(finalCharList);
	keys.forEach((key) => {
		// We need to catch all the chars if they have more than 1 like "s: 3"
		while (finalCharList[key] !== 0) {
			finalArray.push(key);
			finalCharList[key] -= 1;
		}
	});
	console.log(finalArray);
	return finalArray;
}

const testWords = ["this", "that", "did", "deed", "them!", "a"];
// Final Result should look lik (the order could be different): 
// ["t", "t", "h", "i", "s", "a", "d", "d", "e", "e", "m", "!"]
console.log(minimumCharactersForWords(testWords));

// Do not edit the line below.
exports.minimumCharactersForWords = minimumCharactersForWords;
