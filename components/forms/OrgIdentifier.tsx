"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaArrowRightLong } from "react-icons/fa6";

export default function OrgIdentifier() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Credentials>();

  const onSubmit: SubmitHandler<Credentials> = (data) => {
    setIsLoading(true); // TODO: checkout does setIdLoading making any sense
    router.push(`/login?org_identifier=${data.org_identifier}`);
    setIsLoading(false);
  };

  return (
    <div className="grid gap-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-8">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Organization Identifier
            </Label>
            <Input
              id="org_identifier"
              placeholder="Enter Organization Identifier"
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect="off"
              disabled={isLoading}
              {...register("org_identifier", { required: true })}
            />
          </div>
          <Button disabled={isLoading}>
            Next&nbsp;&nbsp;
            <FaArrowRightLong />
          </Button>
        </div>
      </form>
    </div>
  );
}
