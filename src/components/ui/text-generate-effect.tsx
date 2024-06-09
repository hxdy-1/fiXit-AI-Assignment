"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import styles from "./style.module.css";

export const TextGenerateEffect = ({
	words,
	className,
}: {
	words: string;
	className?: string;
}) => {
	const [scope, animate] = useAnimate();
	const wordsArray = words.split(" ");

	useEffect(() => {
		const lettersSelector = wordsArray
			.map((_, wordIdx) => `#word-${wordIdx} span`)
			.join(", ");
		animate(
			lettersSelector,
			{ opacity: 1, x: 0 },
			{ duration: 0.05, delay: stagger(0.05) }
		).then(() => {
			animate(lettersSelector, { opacity: 1 }, { duration: 0.3 });
		});
	}, [scope.current]);

	const renderWords = () => {
		return (
			<motion.div
				ref={scope}
				className={`${className} ${styles.textEffect} pb-4`}
			>
				{wordsArray.map((word, wordIdx) => (
					<motion.span
						key={word + wordIdx}
						id={`word-${wordIdx}`}
						className={styles.wordSpan}
						style={{
							display: "inline-block",
							marginRight: "0.35em",
							marginBottom: "2rem",
						}}
					>
						{word.split("").map((letter, letterIdx) => (
							<motion.span
								key={letter + letterIdx}
								className={styles.letterSpan}
								style={{
									display: "inline-block",
									opacity: 0.3,
									// color: "lightgray",
									transform: "translateX(-10px)",
								}}
							>
								{letter}
							</motion.span>
						))}
					</motion.span>
				))}
			</motion.div>
		);
	};

	return renderWords();
};
