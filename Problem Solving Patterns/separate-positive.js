function separatePositive(arr) {
	if (arr.length <= 1) return arr;
	let positiveIdx = 0;
	let negativeIdx = arr.length - 1;
	while (positiveIdx < negativeIdx) {
		let firstVal = arr[positiveIdx];
		let lastVal = arr[negativeIdx];
		if (firstVal < 0 && lastVal > 0) {
			[arr[positiveIdx], arr[negativeIdx]] = [arr[negativeIdx], arr[positiveIdx]];
			positiveIdx++;
			negativeIdx--;
		} else if (firstVal < 0) negativeIdx--;
		else positiveIdx++;
	}
	return arr;
}

module.exports = separatePositive;
