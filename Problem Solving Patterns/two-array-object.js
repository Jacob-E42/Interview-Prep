//twoArrayObject takes two arrays of arbitraty length and returns an object, using
//the values in the first array as keys, and those in the second as values.
function twoArrayObject(keys, values) {
	//to keep track of current index in values array
	let valueIndex = 0;
	const obj = {};

	//for every key in the keys array, either set the value for that key as the
	// corresponding value in the values array, if the values array's length is
	// equal to or greater than the keys array's. Or if not, set the key to null.
	for (let key of keys) {
		if (values[valueIndex]) {
			obj[key] = values[valueIndex];
			valueIndex++;
		} else obj[key] = null;
	}
	return obj;
}

module.exports = twoArrayObject;
