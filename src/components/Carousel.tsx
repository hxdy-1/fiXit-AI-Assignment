"use client";
import React, { useRef } from "react";

interface Slides {
	title: string;
	description: string;
}

const slides: Slides[] = [
	{
		title: "Understanding Union Budget 2023-24",
		description:
			"Analysis of key tax proposals and budget estimates compared to the previous year for sales agents to gain a comprehensive overview.",
	},
	{
		title: "Implications of Union Budget 2023-24",
		description:
			"Assessing the impact of expenses, disinvestment targets, and deficits on sales strategies and goals.",
	},
	{
		title: "Budgetary Insights for Sales",
		description:
			"Key insights on allocations, ministries, major schemes, and responsibilities impacting sales and strategic decisions.",
	},
	{
		title: "Understanding Union Budget 2023-24",
		description:
			"Analysis of key tax proposals and budget estimates compared to the previous year for sales agents to gain a comprehensive overview.",
	},
	{
		title: "Implications of Union Budget 2023-24",
		description:
			"Assessing the impact of expenses, disinvestment targets, and deficits on sales strategies and goals.",
	},
	{
		title: "Budgetary Insights for Sales",
		description:
			"Key insights on allocations, ministries, major schemes, and responsibilities impacting sales and strategic decisions.",
	},
];

const Carousel = () => {
	const carouselRef = useRef<HTMLDivElement>(null);

	const scrollLeft = () => {
		if (carouselRef.current) {
			carouselRef.current.scrollBy({
				left: -carouselRef.current.clientWidth,
				behavior: "smooth",
			});
		}
	};

	const scrollRight = () => {
		if (carouselRef.current) {
			carouselRef.current.scrollBy({
				left: carouselRef.current.clientWidth,
				behavior: "smooth",
			});
		}
	};

	return (
		<div className="flex flex-col">
			<div className="flex justify-between items-center border-black border-b-2 py-4 pb-2">
				<div className="flex gap-2 items-center">
					<svg
						stroke="currentColor"
						fill="currentColor"
						strokeWidth="0"
						viewBox="0 0 16 16"
						fontSize="20"
						height="1em"
						width="1em"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z"></path>
						<path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z"></path>
					</svg>
					<span className="font-medium text-lg">Training Nudges</span>
				</div>
				<div className="flex gap-4">
					<button className="p-2" onClick={scrollLeft}>
						<svg
							stroke="currentColor"
							fill="currentColor"
							stroke-width="0"
							viewBox="0 0 16 16"
							font-size="20"
							height="1em"
							width="1em"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
							></path>
						</svg>
					</button>
					<button className="p-2" onClick={scrollRight}>
						<svg
							stroke="currentColor"
							fill="currentColor"
							stroke-width="0"
							viewBox="0 0 16 16"
							font-size="20"
							height="1em"
							width="1em"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
							></path>
						</svg>
					</button>
				</div>
			</div>
			<div
				className="carousel-body gap-4 flex overflow-hidden pt-4 w-full"
				ref={carouselRef}
			>
				{slides.map((slide, index) => (
					<div
						key={index}
						className="border cursor-pointer bg-white h-[18rem] min-w-[25rem] rounded-lg flex flex-col gap-4 p-4 justify-center items-center text-center"
					>
						<h3 className="text-3xl">{slide.title}</h3>
						<p className="text-gray-400">{slide.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Carousel;
