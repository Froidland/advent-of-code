import { readdir } from "fs/promises";

const years = await readdir("./src/", {});

for (const year of years) {
	console.log(`### ${year} ###`);
	const days = await readdir(`./src/${year}/`);

	for (const day of days) {
		console.log(`### ${day} ###`);
		const parts = await readdir(`./src/${year}/${day}`);

		for (const part of parts) {
			if (part.endsWith(".ts")) {
				await import(`./src/${year}/${day}/${part}`);
			}
		}
	}
}
