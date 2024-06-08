"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const AnimatedParagraph = ({ text, path }: { text: string; path: string }) => {
	return (
		<Link href={path}>
			<motion.p
				className="flex items-center gap-4 cursor-pointer mt-6 text-[#e46e26] font-medium text-lg"
				initial={{ y: 50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
			>
				<span>{text}</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="20"
					width="12.5"
					viewBox="0 0 320 512"
				>
					<path
						fill="#e46e26"
						d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
					/>
				</svg>
			</motion.p>
		</Link>
	);
};

export default AnimatedParagraph;
