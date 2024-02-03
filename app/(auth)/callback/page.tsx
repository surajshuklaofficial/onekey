"use client"
import { sendVerificationCodeAsync } from "@/lib/action";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function page() {
    const searchParams = useSearchParams();
    const authorization_code = searchParams.get("code");
    
    useEffect(() => {
        const authorizationCode: AuthorizationData = {
            grant_type: "authorization_code",
            code: authorization_code,
            redirect_uri:"http://localhost:3000/callback",
            client_id: "fe11e101-5a43-44c5-a1f7-3f07ce0b7841",
            client_secret: "hello"
        }

        sendVerificationCodeAsync(authorizationCode);
    }, [])
    return (
        <div>{authorization_code}</div>
    );
}