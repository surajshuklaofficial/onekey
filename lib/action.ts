import {
  authorize,
  // createUser,
  // fetchAllUsers,
  fetchPersons,
  register,
  login,
} from "./api";

export const registerAsync = async (registrationInfo: RegistrationInfo) => {
  let response;
  console.log(registrationInfo);
  try {
    response = await register(registrationInfo);
  } catch (error) {
    console.log("Error due to registerAsync");
    throw error;
  }
  return response;
  // if (response && response.status === 200) {
  //   redirect("/verification-sent");
  // }
};

export const loginAsync = async (userCredentials: UserCredentials) => {
  let response;
  try {
    response = await login(userCredentials);
  } catch (error) {
    console.log("Error due to loginAsync");
    throw error;
  }

  return response;
  // if (response && response.status === 200) {
  //   redirect("/dashboard");
  // }
};

export const authorizeAsync = async () => {
  let response;
  try {
    response = await authorize();
  } catch (error) {
    console.log("Error due to authorizeAsync");
    // throw error?.response?.data?.detail; // response.status === 401 will be handled on loginform
  }
  return response;
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

export const fetchPersonsAsync = async () => {
  const orgIdentifier: string | null = localStorage.getItem("org_identifier");

  if (orgIdentifier !== null) {
    try {
      const response = await fetchPersons(orgIdentifier);
      console.log(response);
      return { data: [], count: 0 };
    } catch (error) {
      console.log("Error due to fetchPersonsAsync");
      throw error;
    }
  } else {
    console.error("Organization identifier not found in localStorage.");
    // Handle case where organization identifier is not found
  }
};
