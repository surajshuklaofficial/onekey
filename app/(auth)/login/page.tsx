import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import LoginForm from "../../../components/forms/loginform";
import LOGO from "@/public/logo.png";

export const metadata: Metadata = {
  title: "Login",
  description: "Login",
};

export default function LoginPage() {
  return (
    <>
      <div className="w-9/12 m-auto mt-6 lg:mt-0 lg:w-auto container relative  h-[800px] flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/signup"
          className={cn(
            buttonVariants({ variant: "link" }),
            "absolute left-4 top-4 md:left-8 md:top-8"
          )}
          replace={true}
        >
          Register
        </Link>
        <div className="lg:p-8">
          <div className="border-2 px-8 py-16 rounded-2xl shadow-sm mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[450px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Register to Continue
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to create your account
              </p>
            </div>
            <LoginForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium gap-2">
            <Image src={LOGO} width={36} height={36} alt="logo"></Image>
            Onekey Inc
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Minima, vel dicta. Quisquam exercitationem beatae quaerat
                dolorem necessitatibus vel, odit ut nostrum molestias non.
                Dignissimos laudanti.&rdquo;
              </p>
              <footer className="text-sm">Suraj Shukla</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </>
  );
}
