import Image from "next/image";
import React from "react";
import logo from "../../public/fixit_white_bg.3734d2d4.svg";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import LogoutBtn from "./LogoutBtn";

const NavButton = ({ text, link }: { text: string; link: string }) => {
	return (
		<a href={link}>
			<button className="bg-transparent rounded-sm border px-3 py-1.5 flex  min-w-fit font-semibold text-white border-transparent">
				{text}
			</button>
		</a>
	);
};

const Navbar = async () => {
	const session = await getServerSession(authOptions);

	return (
		<nav className="relative py-1 w-full mx-auto h-full flex items-center justify-between">
			<div className="flex items-center justify-between w-[95%] sm:w-[85%]  mx-auto">
				<a href="/">
					<div className="flex items-center transition-all ease  duration-200  gap-x-2">
						<Image width={25} height={25} src={logo} alt="fixit" />
						<h4 className="text-[2rem] font-light text-white">
							fiXit
						</h4>
					</div>
				</a>
				<div className="hidden md:flex text-sm lg:w-80 max-w-80 justify-end items-center gap-x-5 false">
					<NavButton text="About Us" link="#" />
					{!session?.user ? (
						<NavButton text="Login" link="/login" />
					) : (
						<LogoutBtn />
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
