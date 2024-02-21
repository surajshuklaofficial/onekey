import axios from "axios";  
// TODO: ditch axios if possible and use next.js fetch instead

const API = axios.create({ baseURL: "http://localhost:8000"});

const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  }
  
export const signup = (authData: AuthData) => API.post("/register/principal-user-admin", authData, config);
export const signIn = (data: Credentials) => API.post(`/auth/passwordflow/token?set_cookie=true&org_identifier=${data.org_identifier}`, data, config);
export const authorize = () => API.get("/me");


// export const verify = (verificationData: VerificationData) => API.post("/principal-user-admin/verify", verificationData, config)
// export const sendVerificationCode = (authorizationData: AuthorizationData) => API.post("http://127.0.0.1:8000/oauth2/token", authorizationData, config)

// export const fetchUsers = ({limit, offset, q}: FetchParams) => API.post(`principal-user-admin/users/list?limit=${limit}&offset=${offset}&q=${q}`);
// export const fetchUsers = ({pageIndex, pageSize}: PaginationState) => API.get(`http://localhost:8080/data?_page=${pageIndex + 1}&_per_page=${pageSize}`);
// export const fetchAllUsers = () => API.get(`http://localhost:8080/data`);

// export const createUser = (person: Person) => API.post("http://localhost:8080/data", person)