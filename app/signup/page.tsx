import type { Metadata } from "next";
import Link from "next/link";

import { SignUpForm } from "@/components/signup-form";

export const metadata: Metadata = {
  title: "Sign Up | LearnWorks",
  description: "Create a new LearnWorks account",
};

export default function SignUpPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Link href="/" className="absolute left-4 top-4 md:left-8 md:top-8">
        Home
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Create an account
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your email below to create your account
          </p>
        </div>
        <SignUpForm />
      </div>
    </div>
  );
}
