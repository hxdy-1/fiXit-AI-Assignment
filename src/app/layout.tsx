import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";
import Navbar from "@/components/Navbar";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "FiXit AI Assignment",
	description: "An assignment by Hady",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={sans.className}>
				<Providers>
					<header className="fixed top-0 z-50 w-full left-0 right-0 transition-all ease duration-200 py-0 h-[60px bg-transparent block">
						<Navbar />
					</header>
					{children}
				</Providers>
			</body>
		</html>
	);
}
