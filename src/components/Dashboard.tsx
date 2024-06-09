import Image from "next/image";
import React from "react";
import logoDark from "../../public/fixit_gray_bg.1049c903.svg";
import MainInput from "./MainInput";
import QuestionTags from "./QuestionTags";
import Carousel from "./Carousel";

const Dashboard = () => {
	return (
		<aside className="max-w-5xl mx-auto px-4 py-6">
			<section className="flex items-center justify-center gap-4">
				<Image src={logoDark} alt="logo_dark" width={45} height={45} />
				<h1 className="text-2xl lg:text-4xl md:text-7xl font-medium">
					fiXit
				</h1>
			</section>
			<MainInput />
			<QuestionTags />
			<Carousel />
		</aside>
	);
};

export default Dashboard;
