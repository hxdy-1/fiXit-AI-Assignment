import { LoginForm } from "@/components/LoginForm";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
	const session = await getServerSession(authOptions);
	if (session?.user) redirect("/salesgpt");

	return (
		<div className="h-dvh flex items-center justify-center">
			<LoginForm />
		</div>
	);
};

export default page;
