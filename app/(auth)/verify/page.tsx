"use client";
import { verifyAsync } from "@/lib/action";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function page() {
  const searchParams = useSearchParams();
  const verificationCode = searchParams.get("verification-code");

  useEffect(() => {
    verifyAsync({ verificationCode });
  }, []);

  return <div>hi{verificationCode}</div>;
}
