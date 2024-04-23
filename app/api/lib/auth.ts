import prisma from "@/prisma";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import type { Adapter } from "next-auth/adapters";

export const authOptions = {
  // adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    // OAuth authentication providers...
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  // callbacks: {
  //   async signIn({ user, account, profile, email, credentials }: any) {
  //     if (account.provider === "google") {
  //       console.log(profile);
  //     }
  //     return true;
  //   },
  // },
};
