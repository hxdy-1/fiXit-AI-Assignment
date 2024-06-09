import React from "react";
const tags: string[] = [
	"Budget analysis overview",
	"Tax proposals summary",
	"Expenditure breakdown",
	"Disinvestment targets explained",
	"Focus on fiscal responsibility",
];

const QuestionTags = () => {
	return (
		<div className="flex items-start my-4 mx-auto w-full max-w-5xl">
			<div className="font-semibold w-28">Try asking</div>
			<div className="flex flex-wrap gap-2 cursor-pointer">
				{tags.map((tag, index) => (
					<span
						key={index}
						className="inline-block bg-gray-100 text-black py-1 px-2 rounded-md"
					>
						{tag}
					</span>
				))}
			</div>
		</div>
	);
};

export default QuestionTags;
