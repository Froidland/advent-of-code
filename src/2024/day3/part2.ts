import { open } from "fs/promises";

const mulRegex = /(do\(\))|(don't\(\))|mul\((\d+),(\d+)\)/g;

const input = await open("./src/2024/day3/input.txt", "r");
const text = (await input.readFile()).toString();

const parsedText = text.matchAll(mulRegex);

const values = [];
for (const match of parsedText) {
	if (match[3] && match[4]) {
		values.push([Number(match[3]), Number(match[4])]);
	} else if (match[1]) {
		values.push(true);
	} else {
		values.push(false);
	}
}

let result = 0;
let enabled = true;
for (const value of values) {
	const isPair = Array.isArray(value);

	if (isPair) {
		if (enabled) {
			result += value[0] * value[1];
		}
	} else {
		enabled = value;
	}
}

console.log(`part 2 = ${result}`);
