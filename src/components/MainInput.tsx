"use client";

import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";

export default function PlaceholdersAndVanishInputDemo() {
	const placeholders: string[] = [
		"SalesGPT can help you to browse uncovered topics",
		"With SalesGPT, you can delve into previously unaddressed topics",
		"SalesGPT can assist you in exploring untapped subjects",
		"Use SalesGPT to identify and investigate overlooked themes",
		"SalesGPT helps you uncover and navigate new areas of interest",
	];

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value);
	};
	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("submitted");
	};
	return (
		<PlaceholdersAndVanishInput
			placeholders={placeholders}
			onChange={handleChange}
			onSubmit={onSubmit}
		/>
	);
}
