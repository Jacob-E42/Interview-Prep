function validAnagram(str1, str2) {
	//what if strings are empty or aren't strings?
	// check if two strings are actually differenct, but have the same length
	if (str1 === "" && str1 === "") return true;
	if (str1.length !== str2.length || str1 === str2) return false;

	//obtain freq of first and 2nd str
	let str1Freq = freqCount(str1);
	let str2Freq = freqCount(str2);

	//for key in firstFreq, see if that key in 2nd has the same freq, if not return false
	for (let key in str1Freq) {
		if (!str2Freq[key]) return false;
		if (str1Freq[key] !== str2Freq[key]) return false;
	}
	return true;
}

//freq counter function, takes a str and returns an object of the freq of each char
function freqCount(str) {
	const obj = {};
	for (let char of str) {
		obj[char] = obj[char] + 1 || 1;
	}
	return obj;
}

module.exports = { validAnagram, freqCount };
