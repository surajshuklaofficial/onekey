"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from 'next/navigation'

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signupAsync } from "@/lib/action";
import { useState } from "react";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function SignupForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<AuthData>();

  const onSubmit: SubmitHandler<AuthData> = (data) => {
    setIsLoading(true);
    const info = signupAsync(data);
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
              placeholder="Enter your Email"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
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
              placeholder="username"
              type="string"
              autoCapitalize="none"
              autoComplete="username"
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
              placeholder="Enter Organization Identifier"
              type="text"
              autoCapitalize="none"
              autoComplete="none"
              autoCorrect="off"
              disabled={isLoading}
              {...register("org_identifier", { required: true })}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="org_name">
              Organization Name
            </Label>
            <Input
              id="org_name"
              placeholder="Enter Organization Name"
              type="text"
              autoCapitalize="none"
              autoComplete="none"
              autoCorrect="off"
              disabled={isLoading}
              {...register("org_name", { required: true })}
            />
          </div>
          <div className="grid gap-1 mt-8">
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              placeholder="Enter Password"
              type="password"
              autoCapitalize="none"
              autoComplete="none"
              autoCorrect="off"
              disabled={isLoading}
              {...register("password", { required: true })}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              id="confirm-password"
              placeholder="Confirm Password"
              type="password"
              autoCapitalize="none"
              autoComplete="none"
              autoCorrect="off"
              disabled={isLoading}
              {...register("confirm_password", { required: true })}
            />
          </div>
          <Button disabled={isLoading}>
            {/* {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )} */}
            Register
          </Button>
        </div>
      </form>
    </div>
  );
}
