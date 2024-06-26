import React from "react";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import Dashboard from "@/components/Dashboard";

const page = async () => {
	const session = await getServerSession(authOptions);
	if (!session?.user) redirect("/");

	return (
		<main className="h-[calc(100vh-3.5rem)] mt-14 bg-gray-50 text-black">
			<Sidebar />
			<Dashboard />
		</main>
	);
};

export default page;
