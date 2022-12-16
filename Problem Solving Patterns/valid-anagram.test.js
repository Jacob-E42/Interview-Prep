const validAnagram = require("./valid-anagram");

describe("anagram", function () {
	it("should calculate if the 2nd word is an anagram of the first", function () {
		expect(validAnagram("", "")).toBe(true);
		expect(validAnagram("aaz", "zza")).toBe(false);
		expect(validAnagram("anagram", "nagaram")).toBe(true);
		expect(validAnagram("rat", "car")).toBe(false);
		expect(validAnagram("awesome", "awesom")).toBe(false);
		expect(validAnagram("qwerty", "qeywrt")).toBe(true);
		expect(validAnagram("texttwisttime", "timetwisttext")).toBe(true);
	});
});
