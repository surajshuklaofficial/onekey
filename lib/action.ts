"use server";

import { redirect } from "next/navigation";
import {
  createUser,
  fetchAllUsers,
  fetchUsers,
  sendVerificationCode,
  signup,
  verify,
} from "./api";
import { PaginationState } from "@tanstack/react-table";

export const signupAsync = async (userAuthInfo: AuthData) => {
  let response; // Declare the response variable outside the try block

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
  redirect(
    "http://api.localhost/oauth2/authorize?grant_type=code&client_id=fe11e101-5a43-44c5-a1f7-3f07ce0b7841&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&scope=email&state=hello"
  );
};

export const verifyAsync = async (verficationData: VerificationData) => {
  try {
    console.log(verficationData);
    const response = await verify(verficationData);
    // console.log(response.data);
    // if ((response.status = 200)) {
    //   redirect("/dashboard");
    // }
    return response.data;
  } catch (e) {
    console.log(e);
  } finally {
    redirect("/dashboard");
  }
};

export const sendVerificationCodeAsync = async (
  authorizationData: AuthorizationData
) => {
  try {
    console.log("hi", authorizationData);
    const response = await sendVerificationCode(authorizationData);
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

interface UsersResponse {
  data: Person[];
}

interface FetchUsersAsyncResponse {
  data: Person[];
  count: number;
}

export const fetchUsersAsync = async ({
  pageIndex,
  pageSize,
}: PaginationState): Promise<FetchUsersAsyncResponse> => {
  try {
    const usersResponse: UsersResponse = await fetchUsers({
      pageIndex,
      pageSize,
    });
    const allUsersResponse: UsersResponse = await fetchAllUsers();

    const usersData: Person[] =
      usersResponse.data.length > 0 ? usersResponse.data : [];
    const usersCount: number = allUsersResponse.data.length;

    return { data: usersData, count: usersCount };
  } catch (error) {
    // Instead of just logging, throw the error so it can be handled by the caller
    throw error;
  }
};

export const createUsersAsync = async (person: Person) => {
  try {
    const response = await createUser({
      ...person,
      status: "on boarding",
      person: "suraj shukla",
    });
    console.log(response);
    return response.data.data;
  } catch (e) {
    console.log(e);
  }
};
