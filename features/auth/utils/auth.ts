import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import GitHub from "next-auth/providers/github"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prismaClientInstance } from "@/prisma/prisma-client-instance"

const adapter = PrismaAdapter(prismaClientInstance)
// @ts-ignore
adapter.allowDangerousEmailAccountLinking = true

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google, GitHub],
  adapter,
  callbacks: {
    signIn: async ({ user, account }) => {
      if (!user.email) return false

      // Get all linked accounts for the user's email
      const existingUser = await prismaClientInstance.user.findUnique({
        where: { email: user.email },
        include: { accounts: true },
      })

      if (existingUser && existingUser.accounts.length > 0) {
        // If the account is already linked, allow sign in
        const linkedAccount = existingUser.accounts.find(
          (acc) => acc.provider === account?.provider
        )
        if (linkedAccount) return true

        // Link the new account if it's from a different provider
        await prismaClientInstance.account.create({
          data: {
            userId: existingUser.id,
            type: account?.type!,
            provider: account?.provider!,
            providerAccountId: account?.providerAccountId!,
            access_token: account?.access_token,
            token_type: account?.token_type,
            scope: account?.scope,
          },
        })
        return true
      } else {
        // Create new user and account if they don't exist
        const newUser = await prismaClientInstance.user.create({
          data: {
            email: user.email,
            name: user.name,
            image: user.image,
            accounts: {
              create: {
                type: account?.type!,
                provider: account?.provider!,
                providerAccountId: account?.providerAccountId!,
                access_token: account?.access_token,
                token_type: account?.token_type,
                scope: account?.scope,
              },
            },
          },
        })
        return !!newUser
      }
    },
  },
})