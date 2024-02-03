'use server'

import { redirect } from "next/navigation";
import { sendVerificationCode, signup, verify } from "./api";

export const signupAsync = async (userAuthInfo: AuthData) => {
  let response;  // Declare the response variable outside the try block

  try {
    response = await signup(userAuthInfo);
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log(e);
  } finally {
    if (response && response.status === 200) {
      redirect("/verification-sent");
    }
  }
};

export const loginAsync = async () => {
  redirect("http://api.localhost/oauth2/authorize?grant_type=code&client_id=fe11e101-5a43-44c5-a1f7-3f07ce0b7841&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&scope=email&state=hello")
};



export const verifyAsync = async (verficationData: VerificationData) => {
    try {
      console.log(verficationData)
      const response = await verify(verficationData);
      // console.log(response.data);
      // if ((response.status = 200)) {
      //   redirect("/dashboard");
      // }
      return response.data;
    } catch (e) {
      console.log(e);
    } finally {
      redirect("/dashboard")
    }
  };

export const sendVerificationCodeAsync = async (authorizationData: AuthorizationData) => {
  try {
    console.log("hi", authorizationData)
    const response = await sendVerificationCode(authorizationData);
    console.log(response.data)
    return response.data;
  } catch (e) {
    console.log(e);
  }
};