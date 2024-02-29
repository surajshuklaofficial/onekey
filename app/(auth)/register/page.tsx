import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import RegistrationForm from "../../../components/forms/registrationform";
import LOGO from "@/public/logo.png";

export const metadata: Metadata = {
  title: "Register",
  description: "Login",
};

export default function RegisterPage() {
  return (
    <>
      <div className="w-9/12 m-auto mt-6 lg:mt-0 lg:w-auto container relative h-[800px] flex-col items-center justify-center grid lg:max-w-none  lg:px-0">
        <Link
          href="/login"
          className={cn(
            buttonVariants({ variant: "link" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
          replace={true}
        >
          Login
        </Link>
        <div className="lg:p-8">
          <div className="border-2 px-8 py-16 shadow-sm rounded-2xl mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[550px]">
            <figure className="flex items-center gap-0.5 justify-center">
              <Image src={LOGO} width="40" height="40" alt="logo" />
            </figure>
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Register as an Organization Admin
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to create your account
              </p>
            </div>
            <RegistrationForm />
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
      </div>
    </>
  );
}
