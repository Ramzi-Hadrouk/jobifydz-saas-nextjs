"use server"
import { Logo } from "@/components/shared"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link";
import { SocialLoginButtons } from "./social-login-buttons"

export   async function LoginForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div
            className={cn(
                "grid gap-8 p-12 rounded-md bg-card w-full max-w-md",
                className
            )}
            {...props}
        >
            {/* Header Section */}
            <div className="grid gap-4 text-center">
                <h1 className="text-2xl font-bold">Welcome back</h1>
                <div className="flex justify-center">
                    <Logo />
                </div>
                <p className="text-sm text-muted-foreground">
                    Don&apos;t have an account?{" "}
                    <Link href="/signup" className="underline underline-offset-4 hover:text-primary">
                        Sign up
                    </Link>
                </p>
            </div>

            {/* Form Section */}
            <form className="grid gap-6">
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        className="bg-card"
                        required
                    />
                </div>
                <Button type="submit" className="w-full">
                    Login
                </Button>
            </form>

            {/* Separator */}
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">
                        Or continue with
                    </span>
                </div>
            </div>

            {/* Social Login Section */}
              <SocialLoginButtons />
        

            {/* Footer Section */}
            <p className="px-8 text-center text-sm text-muted-foreground">
                By clicking continue, you agree to our{" "}
                <Link href="/terms" className="underline underline-offset-4 hover:text-primary">
                    Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="underline underline-offset-4 hover:text-primary">
                    Privacy Policy
                </Link>
                .
            </p>
        </div>

    )
}
