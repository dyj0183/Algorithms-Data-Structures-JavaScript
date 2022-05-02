// O(n^2) time & O(n) space
// This solution works, but I still can simply my codes to make them shorter
// The idea of this solution is that there are two types of palindromic, 1. odd => aba, 2. even => abba
// Therefore, I loop through all the characters in the string and assume each of them is the center and see if the char on its left and right is the same or not
function longestPalindromicSubstring(string) {
	function oddP(string) {
		let longestOddP = string[0];
		for (let i = 1; i < string.length - 1; i++) {
			let palindrom = string[i];
			let leftIndex = i - 1;
			let rightIndex = i + 1;
			let isPalindrom = true;
			while (
				leftIndex >= 0 &&
				rightIndex < string.length &&
				isPalindrom === true
			) {
				if (string[leftIndex] === string[rightIndex]) {
					palindrom = string.slice(leftIndex, rightIndex + 1);

					if (palindrom.length > longestOddP.length) {
						longestOddP = palindrom;
					}
					leftIndex--;
					rightIndex++;
				} else {
					isPalindrom = false;
				}
			}
		}

		return longestOddP;
	}

	function evenP(string) {
		let longestEvenP = string[0];
		for (let i = 1; i < string.length; i++) {
			let leftIndex = i - 1;
			let rightIndex = i;
			let isPalindrom = true;
			while (
				leftIndex >= 0 &&
				rightIndex < string.length &&
				isPalindrom === true
			) {
				if (string[leftIndex] === string[rightIndex]) {
					let palindrom = string.slice(leftIndex, rightIndex + 1);

					if (palindrom.length > longestEvenP.length) {
						longestEvenP = palindrom;
					}
					leftIndex--;
					rightIndex++;
				} else {
					isPalindrom = false;
				}
			}
		}

		return longestEvenP;
	}

	const longestOddP = oddP(string);
	console.log(longestOddP);
	const longestEvenP = evenP(string);
	console.log(longestEvenP);

    // Compare the final results from even and odd to see which one has the longest padindromic
	if (longestOddP.length > longestEvenP.length && longestOddP.length > 1) {
		return longestOddP;
	} else if (
		longestEvenP.length > longestOddP.length &&
		longestEvenP.length > 1
	) {
		return longestEvenP;
	} else {
		return string[0];
	}
}

// Do not edit the line below.
exports.longestPalindromicSubstring = longestPalindromicSubstring;
