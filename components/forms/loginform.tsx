"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TailSpin } from "react-loader-spinner";
import { useState } from "react";
import { loginAsync } from "@/lib/action";

// TODO: Handle other Signins
export default function LoginupForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<UserCredentials>();

  const onSubmit: SubmitHandler<UserCredentials> = (data) => {
    setIsLoading(true);
    const org_identifier = searchParams.get("org_identifier");
    data = {
      ...data,
      org_identifier: org_identifier || "",
      scope: "principal-user:admin",
    };

    loginAsync(data)
      .then((response) => {
          console.log(response);
          router.push("/dashboard");
      })
      .catch((err) => {
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
              placeholder="Username"
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
              placeholder="Enter Password"
              type="password"
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect="off"
              disabled={isLoading}
              {...register("password", { required: true })}
            />
          </div>
          {errors.error && <p className="text-red-500">*Invalid Credentials</p>}
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
            Log In
          </Button>
        </div>
      </form>
    </div>
  );
}
