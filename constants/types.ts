type AuthData = {
    email: string;
    username: string;
    password: string;
    org_identifier: string;
    org_name: string;
    confirm_password: string;
  };

type VerificationData = {
  verificationCode: string | null
}
interface Credentials {
  email ?: string,
  username ?: string,
  password : string,
  client_id: string,
  scope: "principal-user:worker",
  org_identifier: string
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