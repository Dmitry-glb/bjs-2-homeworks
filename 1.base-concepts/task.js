"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let discriminant = b ** 2 - 4 * a * c;
	if (discriminant < 0) {
		arr = [];
	} else if (discriminant === 0) {
		arr = [-b / (2 * a)];
	} else {
		arr = [((-b + Math.sqrt(discriminant)) / (2 * a)), ((-b - Math.sqrt(discriminant)) / (2 * a))]
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let monthlyRate = (percent / 100) / 12;
	let loanBody = amount - contribution;

	if (loanBody < 0) return 0;

	let monthlyPayment = loanBody * (monthlyRate + (monthlyRate / (((1 + monthlyRate) ** countMonths) - 1)));

	let totalAmount = monthlyPayment * countMonths;

	let roundTotalAmount = Math.round(totalAmount * 100) / 100;

	return roundTotalAmount;
}