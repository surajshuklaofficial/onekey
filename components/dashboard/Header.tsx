"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

import PROFILE from "@/public/assets/profile.png";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

interface ClientInfo {
  firstName?: string;
  lastName?: string;
  email: string;
  client_id: string;
}

const clientInfo: ClientInfo = {
  firstName: "suraj",
  lastName: "shukla",
  email: "surajshukla5604@gmail.com",
  client_id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
};

// ISSUE: currentURL not updating on navigation
const Header = () => {
  const [accountVisible, setAccountVisible] = useState(false);
  const router = useRouter();
  const currentUrl = usePathname();

  // const currentUrl = location.href; // this is not working, figure out why?

  const handleAccountBox = () => {
    setAccountVisible((prevState) => !prevState);
  };

  const handleSignout = () => {
    router.push("/");
  };

  return (
    <header className="bg-white flex justify-between items-center p-4 m:px-8 shadow-md fixed w-full bg-background z-50">
      {/* Left Section */}
      <div className="flex gap-8 items-center">
        <figure>
          <h1 className="text-4xl text-primary cursor-pointer">
            <span className="text-accent">One</span>Key
          </h1>
        </figure>

        <h4 className="border-l-2 px-2 text-2xl text-secondary hidden sm:block capitalize font-semibold">
          {currentUrl.split("/")[4]?.split("-").join(" ") || "Dashboard"}
        </h4>
      </div>

      {/* Right Section */}
      <div className="">
        <button onClick={handleAccountBox}>
          <Image src={PROFILE} alt="Profile" width="40" height="40" />
        </button>

        {accountVisible && (
          <AccountBox
            userInfo={clientInfo}
            handleSignout={handleSignout}
            handleAccountBox={handleAccountBox}
          />
        )}
      </div>
    </header>
  );
};

type Handler = () => void;
interface Props {
  handleSignout: Handler;
  handleAccountBox: Handler;
  userInfo: ClientInfo;
}

const AccountBox = ({ userInfo, handleSignout, handleAccountBox }: Props) => (
  <>
    <div className="absolute right-4 sm:right-16 flex flex-col px-4 py-2 items-center z-50 bg-white shadow-lg rounded-md border">
      <div className="flex items-center gap-4 border-b pb-4">
        <Image src={PROFILE} alt="Profile" width="40" height="40" />

        <div className="text-primary">
          <h4 className="text-xl font-bold capitalize">
            {userInfo.firstName} {userInfo.lastName}
          </h4>
          <h5 className="text-sm text-gray-500 lowercase">{userInfo.email}</h5>
          <h5 className="text-sm text-gray-400 lowercase">
            {userInfo.client_id}
          </h5>
          <Link href="account" className="text-secondary hover:text-accent">
            My Account
          </Link>
        </div>
      </div>
      <div className="mt-2">
        <button
          className="bg-accent text-white py-1 px-4 font-bold rounded-md"
          onClick={handleSignout}
        >
          Sign Out
        </button>
      </div>
    </div>
    <div className="fixed inset-0 z-40" onClick={handleAccountBox} />
  </>
);

export default Header;
