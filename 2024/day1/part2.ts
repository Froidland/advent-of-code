import { open } from "fs/promises";

const map1 = new Map<number, number>();
const map2 = new Map<number, number>();

const input = await open("./2024/day1/input.txt", "r");

for await (const line of input.readLines()) {
	const values = line.trim().split("   ").map(Number);

	if (values[0] && values[1]) {
		if (map1.has(values[0])) {
			map1.set(values[0], map1.get(values[0])! + 1);
		} else {
			map1.set(values[0], 1);
		}

		if (map2.has(values[1])) {
			map2.set(values[1], map2.get(values[1])! + 1);
		} else {
			map2.set(values[1], 1);
		}
	}
}

let acc = 0;

for (const key of map1.keys()) {
	const isInSecondList = map2.get(key);
	if (!isInSecondList) {
		continue;
	}

	acc += map1.get(key)! * map2.get(key)! * key;
}

console.log(`day 1 part 2 result is ${acc}`);
