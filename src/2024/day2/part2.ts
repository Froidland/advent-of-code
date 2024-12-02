import { open } from "fs/promises";

function isReportSafe(report: number[]) {
	let prev = 0;
	const shouldBeAscending = report[1] > report[0];

	for (const value of report) {
		if (!prev) {
			prev = value;
			continue;
		}

		const isAscending = value > prev;
		const diff = Math.abs(value - prev);

		if (diff < 1 || diff > 3 || isAscending !== shouldBeAscending) {
			return false;
		}

		prev = value;
	}

	return true;
}

function isReportSafeLax(report: number[]) {
	for (let i = 0; i < report.length; i++) {
		const newReport = [];
		for (let j = 0; j < report.length; j++) {
			if (j == i) {
				continue;
			}

			newReport.push(report[j]);
		}

		if (isReportSafe(newReport)) {
			return true;
		}
	}

	return false;
}

let safeReports = 0;

const input = await open("./src/2024/day2/input.txt", "r");

for await (const line of input.readLines()) {
	const report = line.trim().split(" ").map(Number);

	if (isReportSafe(report) || isReportSafeLax(report)) {
		safeReports += 1;
	}
}
await input.close();

console.log(`part 2 = ${safeReports}`);
