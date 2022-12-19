const { freqCount } = require("./valid-anagram");

// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
	const str1 = num1.toString();
	const str2 = num2.toString();
	if (str1.length !== str2.length) return false;

	//make freq counts for every digit in both integers
	const num1Freq = freqCount(str1);
	const num2Freq = freqCount(str2);

	//loop over one freq count and return false if a given digit is not
	// represented in the other count, or is represented a different amount of times.
	for (let digit in num1Freq) {
		// if (!num2Freq[digit]) return false;
		if (num1Freq[digit] !== num2Freq[digit]) return false;
	}
	return true;
}

module.exports = sameFrequency;
