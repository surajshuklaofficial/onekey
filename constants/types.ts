type AuthData = {
    email: string;
    username: string;
    password: string;
    org_identifier: string;
    org_name: string;
    repassword: string;
  };

type VerificationData = {
  verificationCode: string | null
}

// interface FetchParams {
//   pageCount
//   pageIndex: number
// };

interface AuthorizationData {
  grant_type: "authorization_code",
  code: string | null,
  redirect_uri: string,
  client_id: string,
  client_secret: string
}

interface Person {
  person: "suraj shukla"
  status: "on boarding",
  primary_email: string,
  username: string,
  password: string
}