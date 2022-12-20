"use strict";
function createAccount(accountPin, balance = 0) {
	return {
		checkBalance: function (pin) {
			if (accountPin === pin) return `$${balance}`;
			return "Invalid PIN.";
		},
		deposit: function (pin, amount) {
			if (pin !== accountPin) return "Invalid PIN.";
			balance += amount;
			return `Succesfully deposited $${amount}. Current balance: $${balance}.`;
		},
		withdraw: function (pin, amount) {
			if (pin !== accountPin) return "Invalid PIN.";
			if (amount > balance) return "Withdrawal amount exceeds account balance. Transaction cancelled.";
			balance -= amount;
			return `Succesfully withdrew $${amount}. Current balance: $${balance}.`;
		},
		changePin: function (old, newPin) {
			if (old !== accountPin) return "Invalid PIN.";
			accountPin = newPin;
			return "PIN successfully changed!";
		}
	};
}

module.exports = { createAccount };
