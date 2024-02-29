"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { registerAsync } from "@/lib/action";
import { TailSpin } from "react-loader-spinner";
import { useRouter } from "next/navigation";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";

const config = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
};

export default function RegisterationForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<RegistrationInfo>();

  const onSubmit: SubmitHandler<RegistrationInfo> = (data) => {
    setIsLoading(true);
    
    registerAsync(data).then((response) => {
      console.log(response, response.status);
      router.push("/verification-sent");

    }).catch((err) => {
      console.log(err);
      setError("error", { type: "custom", message: err.message });
    });
    setIsLoading(false);
  };

  const handleShowPassword = () => {
    setShowPassword(prev => !prev);
  }

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(prev => !prev);
  }
  return (
    <div className="grid gap-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="Enter your Emai*"
              type="email"
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect="off"
              disabled={isLoading}
              {...register("email", { required: true })}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="username">
              Username
            </Label>
            <Input
              id="username"
              placeholder="username*"
              type="string"
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect="off"
              disabled={isLoading}
              {...register("username", { required: true })}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="org_identifier">
              Organization Identifier
            </Label>
            <Input
              id="org_identifier"
              placeholder="Enter Your Organization*"
              type="text"
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect="off"
              disabled={isLoading}
              {...register("org_identifier", { required: true })}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="preferred_name">
              Preferred Name
            </Label>
            <Input
              id="preferred_name"
              placeholder="Preferred Name"
              type="text"
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect="off"
              disabled={isLoading}
              {...register("preferred_name")}
            />
          </div>
          <div className="grid gap-1 mt-8 grid-cols-12">
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              placeholder="Enter Password*"
              type={showPassword ? "string": "password"}
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect="off"
              disabled={isLoading}
              className="col col-span-11"
              {...register("password", { required: true })}
            />
            <Button className="flex-center text-xl p-0" type="button" onClick={handleShowPassword}>{showPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}</Button>
          </div>
          <div className="grid gap-1 grid-cols-12">
            <Label className="sr-only" htmlFor="confirm-password">
              Confirm Password
            </Label>
            <Input
              id="confirm-password"
              placeholder="Confirm Password*"
              type="password"
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect="off"
              disabled={isLoading}
              className="col col-span-11"
              {...register("confirm_password", { required: true })}
            />
          <Button className="flex-center text-xl p-0" type="button" onClick={handleShowConfirmPassword}>{showConfirmPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}</Button>
          </div>
          {errors.error && <p className="text-red-500">*{errors.error.message}</p>}
          <Button disabled={isLoading}>
            
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
            )} {" "}
            Register
          </Button>
        </div>
      </form>
    </div>
  );
}
