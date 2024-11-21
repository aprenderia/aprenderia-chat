import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const clientId = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

if (!clientId || !clientSecret) {
  throw new Error("Missing Google OAuth credentials");
}

export default NextAuth({
  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider === "google") {
        return profile?.email?.endsWith("@aimodels.one") ?? false;
      }
      return false;
    },
  },
  providers: [
    GoogleProvider({
      authorization: {
        params: {
          prompt: "select_account",
        },
      },
      clientId,
      clientSecret,
    }),
  ],
});
