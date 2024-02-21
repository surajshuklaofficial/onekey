"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginAsync } from "@/lib/action";
import { TailSpin } from "react-loader-spinner";
import { useState } from "react";

// TODO: Handle other Signins
export default function LoginupForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const searchParams = useSearchParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<Credentials>();

  const onSubmit: SubmitHandler<Credentials> = (data) => {
    setIsLoading(true);
    const org_identifier = searchParams.get("org_identifier");
    data = {
      ...data,
      org_identifier: org_identifier || "",
      scope: "principal-user:admin",
    };

    loginAsync(data).catch((err) => {
      console.log(err);
      setError("error", { type: "custom", message: err.message });
    });

    setIsLoading(false);
  };

  return (
    <div className="grid gap-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="username">
              Username
            </Label>
            <Input
              id="username"
              placeholder="username"
              type="string"
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect="off"
              disabled={isLoading}
              {...register("username")}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              placeholder="Enter Password"
              type="password"
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect="off"
              disabled={isLoading}
              {...register("password", { required: true })}
            />
          </div>
          {errors.error && (
            <p className="text-red-500">*Invalid Credentials</p>
          )}
          <Button disabled={isLoading} className="mt-12">
            {isLoading && (
              <TailSpin
                visible={true}
                height="10"
                width="10"
                color="#209CEE"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
              />
            )}
            Sign In
          </Button>
        </div>
      </form>
    </div>
  );
}
