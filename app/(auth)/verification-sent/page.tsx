import { RocketIcon, ArrowTopRightIcon } from "@radix-ui/react-icons";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Image from "next/image";
import LOGO from "@/public/logo.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// TODO: protect this page
export default function VerificationSent() {
  return (
    <main className="flex-center flex-col p-16">
      <figure className="flex items-center gap-0.5">
        <Image src={LOGO} width="110" height="110" alt="logo" />
        <p className="text-8xl font-bold rubik text-[#99a8b2]">
          ne<span>Key</span>
        </p>
      </figure>
      <div className="mt-20 w-9/12 flex flex-col gap-4">
      <Alert>
        <RocketIcon className="h-4 w-4" />
        <AlertTitle>Verification sent!</AlertTitle>
        <AlertDescription>Check Email for Verification.</AlertDescription>
      </Alert>
      <Link href="/login">
        <Button>Login <ArrowTopRightIcon/></Button>
      </Link>
      </div>
    </main>
  );
}
