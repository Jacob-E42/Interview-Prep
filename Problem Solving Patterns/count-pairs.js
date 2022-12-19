// add whatever parameters you deem necessary
function countPairs(arr, target) {
	let count = 0;
	const alreadySeen = new Set();
	for (let num of arr) {
		if (alreadySeen.has(target - num)) count++;
		alreadySeen.add(num);
	}
	return count;
}

module.exports = countPairs;
