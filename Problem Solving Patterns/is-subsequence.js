function isSubstr2(str1, str2) {
	if (str1.length > str2.length) return false;
	let str1Idx = 0;
	let str2Idx = 0;

	//for every char in the second str, if the current str1 matches, then update the str1 index.
	// IF not, then still move the str2 index up by one.
	while (str2Idx < str2.length) {
		if (str1[str1Idx] === str2[str2Idx]) {
			str1Idx++;
		}
		str2Idx++;
	}
	//if every str1 char has found a match, then the index should equal the length of str1
	if (str1Idx === str1.length) return true;
	return false;
}

module.exports = isSubstr2;
