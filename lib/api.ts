import axios from "axios";
// TODO: ditch axios if possible and use next.js fetch instead

// https or http
const protocol = process.env.NEXT_PUBLIC_HTTPS === 'true' ? "https": "http";

// setting base url
const API = axios.create({ baseURL: `${protocol}://${process.env.NEXT_PUBLIC_DOMAIN}` });

// request configuration
const config = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
};

// ------------------------------ Authorization & Authentication ------------------------------
export const register = (registrationInfo: RegistrationInfo) =>
  API.post("/register/principal-user-admin", registrationInfo, config);

export const login = (userCredentials: UserCredentials) =>
  API.post(
    `/auth/passwordflow/token?set_cookie=true&org_identifier=${userCredentials.org_identifier}`,
    userCredentials,
    config
  );

export const authorize = () => API.get("/me");

// ------------------------------ Organization Admin ------------------------------
export const fetchPersons = (org_identifier: string) => API.get(`/${org_identifier}/users/list?limit=1000&offset=0`);


// export const verify = (verificationData: VerificationData) => API.post("/principal-user-admin/verify", verificationData, config)
// export const sendVerificationCode = (authorizationData: AuthorizationData) => API.post("http://127.0.0.1:8000/oauth2/token", authorizationData, config)

// export const fetchUsers = ({limit, offset, q}: FetchParams) => API.post(`principal-user-admin/users/list?limit=${limit}&offset=${offset}&q=${q}`);
// export const fetchUsers = ({pageIndex, pageSize}: PaginationState) => API.get(`http://localhost:8080/data?_page=${pageIndex + 1}&_per_page=${pageSize}`);
// export const fetchAllUsers = () => API.get(`http://localhost:8080/data`);

// export const createUser = (person: Person) => API.post("http://localhost:8080/data", person)
