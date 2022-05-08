// Time: O(n), Space: O(n)
function arrayOfProducts(array) {
	let sum_of_multiply_all_nums = 1;
	let total_zero_in_array = 0;
	let first_zero_index;
	for (let i = 0; i < array.length; i++) {
		sum_of_multiply_all_nums *= array[i];
		if (array[i] === 0) {
			first_zero_index = i;
			total_zero_in_array++;
		}
	}

	const final_array = [];
	for (const num of array) {
		// If the num is divided by 0, the result is either NaN, Infinity, or -Infinity, so simply save as 0
		// https://www.educative.io/edpresso/how-does-javascript-handle-divide-by-zero
		if (num !== 0) {
			final_array.push(sum_of_multiply_all_nums / num);
		} else {
			final_array.push(0);
		}
	}

	// If there is only one 0 in the array, then it is gonna be an edge case, so I need to count for that
	if (total_zero_in_array === 1) {
		let special_num = 1;
		for (let i = 0; i < array.length; i++) {
			// We want to jump through the number itself because it is 0
			if (i !== first_zero_index) {
				special_num *= array[i];
			}
		}
		final_array[first_zero_index] = special_num;
		return final_array;
	}

	return final_array;
}

// Do not edit the line below.
exports.arrayOfProducts = arrayOfProducts;
