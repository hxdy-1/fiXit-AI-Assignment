"use client";

import { signOut } from "next-auth/react";
import React from "react";

const LogoutBtn = () => {
	return (
		<button
			onClick={() => signOut()}
			className="bg-transparent rounded-sm border px-3 py-1.5 flex  min-w-fit font-semibold text-white border-transparent"
		>
			Logout
		</button>
	);
};

export default LogoutBtn;
