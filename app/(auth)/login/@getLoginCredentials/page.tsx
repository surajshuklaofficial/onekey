import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import LoginForm from "../../../../components/forms/loginform";
import LOGO from "@/public/logo.png";

export const metadata: Metadata = {
  title: "Login",
  description: "Login page",
};

export default function LoginPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  console.log(params, searchParams);
  return (
    <>
      <div className="w-9/12 m-auto mt-6 lg:mt-0 lg:w-auto container relative  h-[800px] flex-col items-center justify-center grid lg:max-w-none lg:px-0">
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
            <figure className="flex items-center gap-0.5 justify-center">
              <Image src={LOGO} width="40" height="40" alt="logo" />
            </figure>
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Login to Continue
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter username & password for authentication
              </p>
            </div>
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
}
