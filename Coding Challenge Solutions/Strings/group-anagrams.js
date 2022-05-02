function groupAnagrams(words) {
	// O (w * n log(n))
	const anagrams = {};
    for (const word of words) {
        // Sort the word alphabetically
        const sortedWord = word.split("").sort().join("");
        // Use "in" to check if the property is in the object or not
        if (sortedWord in anagrams) {
            // Push the original word into the existing array
            anagrams[sortedWord].push(word);
        } else {
            anagrams[sortedWord] = [word];
        }
    }
    console.log(anagrams);
    // The Object.values() method returns an array of a given object's own enumerable property values
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
    const resultArray = Object.values(anagrams);
    console.log(resultArray);
}

const words = ['yo', 'act', 'flop', 'tac', 'foo', 'cat', 'oy', 'olfp'];
groupAnagrams(words);

// Do not edit the line below.
exports.groupAnagrams = groupAnagrams;
