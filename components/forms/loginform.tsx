"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TailSpin } from "react-loader-spinner";
import { useState } from "react";
import axios from "axios";
const config = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
};

const API = axios.create({ baseURL: "http://api.localhost.localdomain" });

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

    const signIn = (data: Credentials) =>
      API.post(
        `/auth/passwordflow/token?set_cookie=true&org_identifier=${data.org_identifier}`,
        data,
        config
      );

    const loginAsync = async (data: Credentials) => {
      let response;
      // console.log("Hi", data);
      try {
        response = await signIn(data);
        console.log(response);
      } catch (error: any) {
        console.log("Error due to loginAsync");
        console.log(error);
        // throw error?.response?.data?.detail; // response.status === 401 will be handled on loginform
      }
      console.log(response?.data);
      // const { access_token, expires_in } = response?.data;

      // cookies().set({
      //   name: "access_token",
      //   value: "access_token",
      //   httpOnly: true,
      //   secure: false,
      //   sameSite: "strict",
      //   path: "/",
      // });

      // if (response && response.status === 200) {
      //   redirect("/dashboard");
      // }
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
              placeholder="Enter Password e"
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
            {true && (
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
