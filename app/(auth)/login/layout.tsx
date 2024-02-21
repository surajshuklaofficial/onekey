"use client";

import { useSearchParams } from "next/navigation";

export default function layout({
  getLoginCredentials,
  getOrgIdentifier,
}: {
  getLoginCredentials: React.ReactNode;
  getOrgIdentifier: React.ReactNode;
}) {
  const params = useSearchParams();
  const org_identifier = params.get("org_identifier");
  return (
    <>
      {org_identifier !== null && org_identifier !== ""
        ? getLoginCredentials
        : getOrgIdentifier}
    </>
  );
}
