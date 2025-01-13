import {readInput} from '../util';

const input = readInput("02");

let lines = input.split("\n").map((line) => line.split(" ").map(value => parseInt(value.trim())));

let firstSafeSum = lines.reduce((safeSum, reports) => {
	let first = reports[0];
	let last = reports[reports.length - 1];

	let diffs = [];
	let correctlyOrdered = true;
	for (let i = 0; i < reports.length - 1; i++) {
		diffs.push(Math.abs(reports[i] - reports[i + 1]));
		if (first > last) {
			//descending
			correctlyOrdered = correctlyOrdered && reports[i] > reports[i + 1]
		} else {
			//ascending
			correctlyOrdered = correctlyOrdered && reports[i] < reports[i + 1]
		}
	}


	let allowedDiffs = diffs.every(diff => diff >= 1 && diff <= 3);
	return allowedDiffs && correctlyOrdered ? safeSum + 1 : safeSum;
}, 0);

console.log(`First ${firstSafeSum}`);