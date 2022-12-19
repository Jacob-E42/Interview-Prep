function twoArrayObject(keys, values) {
	let valueIndex = 0;
	const obj = {};
	for (let key of keys) {
		if (values[valueIndex]) {
			obj[key] = values[valueIndex];
			valueIndex++;
		} else obj[key] = null;
	}
	return obj;
}

module.exports = twoArrayObject;
