function guessingGame() {
	const secretNumber = Math.floor(Math.random() * 100);
	let count = 0;
	let isOver = false;
	const func = function (num) {
		while (!isOver) {
			count++;
			if (num === secretNumber) {
				isOver = true;
				return `You win! You found ${secretNumber} in ${count} guesses.`;
			}
			if (num < secretNumber) return `${num} is too low!`;
			else return `${num} is too high!`;
		}
		return "The game is over, you already won!";
	};
	return func;
}

module.exports = { guessingGame };
