"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { signupAsync } from "@/lib/action";
import { useState } from "react";
import axios from "axios";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}
const config = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
};

const API = axios.create({ baseURL: "http://api.localhost.localdomain" });

export default function SignupForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<AuthData>();

  const onSubmit: SubmitHandler<AuthData> = (data) => {
    console.log(data);
    setIsLoading(true);
    const signup = (authData: AuthData) =>
      API.post("/register/principal-user-admin", authData, config);

    const signupAsync = async (userAuthInfo: AuthData) => {
      let response;
      try {
        response = await signup(userAuthInfo);
      } catch (e) {
        console.log("Error due to signupAsync");
        console.log(e);
      }
      console.log(response);

      // if (response && response.status === 200) {
      //   redirect("/verification-sent");
      // }
    };
    signupAsync(data).catch((err) => {
      console.log(err);
      setError("error", { type: "custom", message: err.message });
    });
    setIsLoading(false);
  };

  return (
    <div className={cn("grid gap-6", className)} {...props}>
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
          <div className="grid gap-1 mt-8">
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              placeholder="Enter Password*"
              type="password"
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect="off"
              disabled={isLoading}
              {...register("password", { required: true })}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="confirm-password">
              Password
            </Label>
            <Input
              id="confirm-password"
              placeholder="Confirm Password*"
              type="password"
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect="off"
              disabled={isLoading}
              {...register("confirm_password", { required: true })}
            />
          </div>
          {errors.error && <p className="text-red-500">*Invalid Credentials</p>}
          <Button disabled={isLoading}>Register</Button>
        </div>
      </form>
    </div>
  );
}
