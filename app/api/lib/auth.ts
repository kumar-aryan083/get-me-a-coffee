import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/prisma";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
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
  callbacks: {
    async signIn({ user, account, profile, email, credentials }: any) {
      if (account.provider == "google" || account.provider == "github") {
        console.log(profile);
        const existingUser = await prisma.user.findUnique({
          where: {
            email: profile.email,
          },
        });
        if (!existingUser) {
          const newuser = await prisma.user.create({
            data: {
              email: profile.email,
              name: profile.name,
              image: profile.avatar_url,
            },
          });
        }
      }
      return true;
    },
  },
};
