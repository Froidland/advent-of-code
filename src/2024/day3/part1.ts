import { open } from "fs/promises";

const mulRegex = /mul\((\d+),(\d+)\)/g;

const input = await open("./src/2024/day3/input.txt", "r");
const text = (await input.readFile()).toString();

const parsedText = text.matchAll(mulRegex);

const values = [];
for (const match of parsedText) {
	values.push(Number(match[1]) * Number(match[2]));
}

const result = values.reduce((acc, cur) => acc + cur, 0);
console.log(`part 1 = ${result}`);
