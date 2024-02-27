"use server";

import { redirect } from "next/navigation";

import {
  authorize,
  // createUser,
  // fetchAllUsers,
  fetchUsers,
  signIn,
  signup,
} from "./api";
import { cookies } from "next/headers";

export const signupAsync = async (userAuthInfo: AuthData) => {
  let response;
  try {
    response = await signup(userAuthInfo);
  } catch (e) {
    console.log("Error due to signupAsync");
    console.log(e);
  }
  console.log(response);
  if (response && response.status === 200) {
    redirect("/verification-sent");
  }
};

export const loginAsync = async (data: Credentials) => {
  let response;
  console.log("Hi", data);
  try {
    response = await signIn(data);
    console.log(response);
  } catch (error: any) {
    console.log("Error due to loginAsync");
    console.log(error);
    // throw error?.response?.data?.detail; // response.status === 401 will be handled on loginform
  }
  console.log(response?.data);
  const {access_token, expires_in}  = response?.data;

  cookies().set({
    name: 'access_token',
    value: 'access_token',
    httpOnly: true,
    secure: false,
    sameSite: "strict",
    path: '/',
  })

  if (response && response.status === 200) {
    redirect("/dashboard");
  }
};

export const authorizeAsync = async () => {
  let response;

  try {
    response = await authorize();
    console.log(response);
  } catch (error: any) {
    console.log("Error due to authorizeAsync");
    // throw error?.response?.data?.detail; // response.status === 401 will be handled on loginform
  }
  console.log(response);
};

// export const fetchUsersAsync = async ({
//   pageIndex,
//   pageSize,
// }: PaginationState): Promise<FetchUsersAsyncResponse> => {
//   try {
//     const usersResponse: UsersResponse = await fetchUsers({
//       pageIndex,
//       pageSize,
//     });
//     const allUsersResponse: UsersResponse = await fetchAllUsers();

//     const usersData: Person[] = usersResponse.data.length > 0 ? usersResponse.data : [];
//     const usersCount: number = allUsersResponse.data.length;

//     return { data: usersData, count: usersCount };
//   } catch (error) {
//     throw error;
//   }
// };

// export const createUsersAsync = async (person: Person) => {
//   try {
//     const response = await createUser({
//       ...person,
//       status: "on boarding",
//       person: "suraj shukla",
//     });
//     console.log(response);
//     return response.data.data;
//   } catch (e) {
//     console.log(e);
//   }
// };

export const fetchUsersAsync = async () => {
  let response;

  try {
    response = await fetchUsers();
    console.log(response);
    return { data: [], count: 0};
  } catch (error: any) {
    console.log("Error due to fetchUsersAsync");
    // throw error?.response?.data?.detail; // response.status === 401 will be handled on loginform
  }
  console.log("user", response);
  return { data: [], count: 0};
};