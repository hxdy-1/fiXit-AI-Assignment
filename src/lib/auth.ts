import GoogleProvider from "next-auth/providers/google";
import prisma from "@/db";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
		}),
	],

	secret: process.env.NEXTAUTH_SECRET,
	callbacks: {
		jwt: async ({ user, token }: any) => {
			if (user) {
				token.uid = user.id;
			}
			return token;
		},
		session: ({ session, token }: any) => {
			if (session.user) {
				session.user.id = token.uid;
			}
			return session;
		},
		signIn: async ({ user }) => {
			const email = user.email;

			if (email) {
				const existingUser = await prisma.user.findUnique({
					where: { email },
				});

				if (!existingUser) {
					await prisma.user.create({
						data: { email },
					});
				}
			}
			return true;
		},
	},
	pages: {
		signIn: "/login",
	},
};
