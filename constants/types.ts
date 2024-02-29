type RegistrationInfo = {
  email: string;
  username: string;
  password: string;
  org_identifier: string; // Renamed for clarity
  preferred_name?: string;
  confirm_password: string;
  error?: string;
};

type VerificationData = {
  verificationCode: string | null;
};

interface UserCredentials {
  email?: string;
  username?: string;
  password: string;
  clientId: string;
  scope: "profile" | "principal-user:admin";
  org_identifier: string;
  error?: string;
}

interface AuthorizationData {
  grantType: "authorization_code";
  code: string | null;
  redirectUri: string;
  clientId: string;
  clientSecret: string;
}

interface UserInfo {
  fullName: string;
  status: "onboarding"; // Assuming this is a status during user registration
  primaryEmail: string;
  username: string;
  password: string;
  org_identifier?: string;
  user_id?: string;
}

