import {readInput} from '../util';

const input = readInput("01");

let [first,second] = input.split("\n").reduce((previousValue, currentValue) => {
	const [firstPair, secondPair] = previousValue;
	const [firstPairNew, secondPairNew] = currentValue.split("   ")
	return [[...firstPair, firstPairNew], [...secondPair, secondPairNew]];
}, [[],[]]);

let sortA = first.sort();
let sortB = second.sort();

let firstScore = sortA.reduce((previousValue, currentValue, currentIndex) => {
	return previousValue + Math.abs(currentValue - sortB[currentIndex])
}, 0);

let secondScore = sortA.reduce((previousValue, currentValue) => {
	return previousValue + currentValue * sortB.filter((value) => value == currentValue).length;
}, 0);

console.log(`First: ${firstScore}`)
console.log(`Second: ${secondScore}`)