import AnimatedParagraph from "@/components/AnimatedParagraph";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default async function Home() {
	return (
		<>
			<main className="mt-12 flex justify-center items-center text-center flex-col h-[calc(100vh-4rem)]">
				<h2 className="text-lg sm:text-2xl md:text-5xl font-bold mb-6">
					<TextGenerateEffect words="Fix your Sales" />
				</h2>
				<h1 className="text-2xl sm:text-5xl md:text-7xl font-bold leading-4">
					<TextGenerateEffect words="Enabling Human Intelligence with Artificial Intelligence" />
				</h1>
				<AnimatedParagraph text="Join the wait list" path="#" />
			</main>
		</>
	);
}
