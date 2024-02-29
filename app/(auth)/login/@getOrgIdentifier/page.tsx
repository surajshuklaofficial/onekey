import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import LOGO from "@/public/logo.png";
import OrgIdentifier from "@/components/forms/OrgIdentifier";

export const metadata: Metadata = {
  title: "Login",
  description: "Enter Your Organization",
};

export default function LoginPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <>
      <div className="w-9/12 m-auto mt-6 lg:mt-0 lg:w-auto container relative  h-[800px] flex-col items-center justify-center grid lg:max-w-none lg:px-0">
        <Link
          href="/register"
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
              Enter your Organization
              </h1>
            </div>
            <OrgIdentifier />
          </div>
        </div>
      </div>
    </>
  );
}


// confirm_password
// : 
// "fd"
// email
// : 
// "organization@gmail.com"
// org_identifier
// : 
// "earthling"
// password
// : 
// "#Human@123"
// preferred_name
// : 
// "human"
// username
// : 
// "testAdmin"