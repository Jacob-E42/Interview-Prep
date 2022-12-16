const { freqCount } = require("./valid-anagram");

function constructNote(msg, letters) {
	//msg and letters should both have at least one char. It is assumed to be a letter
	if (letters.length < 1) return false;

	//get a freq of letters of both
	const msgFreq = freqCount(msg);
	const lettersFreq = freqCount(letters);

	for (let letter in msgFreq) {
		// if msg has a letter that letters doesn't have, return false
		if (!lettersFreq[letter]) return false;
		// for every letter in msg freq, letters should have a freq that is equal
		// or greater. If not, return false
		if (msgFreq[letter] > lettersFreq[letter]) return false;
	}
	return true;
}

module.exports = constructNote;
