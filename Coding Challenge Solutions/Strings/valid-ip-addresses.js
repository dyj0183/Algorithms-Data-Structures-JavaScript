// O(1) time & O(1) space because the max of length is 12 for possible ip address
function validIPAddresses(string) {
	const allVaidIpAddresses = [];
	// ex: 1921680
    // First, go through possible part 1 of the ip address
	for (let i = 0; i < 4; i++) {
		let currentIpAddress = ["", "", "", ""];

		currentIpAddress[0] = string.slice(0, i);
		if (!isValidIpAddress(currentIpAddress[0])) continue;

        // Second, go through possible part 2 of the ip address
		for (let j = i + 1; j < i + 4; j++) {
			currentIpAddress[1] = string.slice(i, j);
			if (!isValidIpAddress(currentIpAddress[1])) continue;

            // Third, go through possible part 3 & 4 of the ip address
			for (let k = j + 1; k < 4 + j; k++) {
				currentIpAddress[2] = string.slice(j, k);
				currentIpAddress[3] = string.slice(k);

				if (
					!isValidIpAddress(currentIpAddress[2]) ||
					!isValidIpAddress(currentIpAddress[3])
				)
					continue;
                // If all 4 parts are valid, push the set into the result arrray by converting them from array to string separated by .
				allVaidIpAddresses.push(currentIpAddress.join("."));
			}
		}
	}

	return allVaidIpAddresses;
}

// This function is used to check if the string is a valid IP address or not
function isValidIpAddress(string) {
	let stringToInt = parseInt(string);
    // A valid IP address must be less than 256
	if (stringToInt > 255) {
		return false;
	}

    // This is checking the leading 0, such as '01' is invalid IP address
	return string.length === stringToInt.toString().length;
}

// This is one of the test cases
const string = "1921680";
console.log(validIPAddresses(string));

// Do not edit the line below.
exports.validIPAddresses = validIPAddresses;
