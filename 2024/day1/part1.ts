import { open } from "fs/promises";

const list1 = [];
const list2 = [];

const input = await open("./2024/day1/input.txt", "r");

for await (const line of input.readLines()) {
	const values = line.trim().split("   ").map(Number);

	if (values[0] && values[1]) {
		list1.push(values[0]);
		list2.push(values[1]);
	}
}
await input.close();

list1.sort();
list2.sort();

let acc = 0;

for (let i = 0; i < list1.length; i++) {
	acc += Math.abs(list1[i] - list2[i]);
}

console.log(`day 1 part 1 result is ${acc}`);
