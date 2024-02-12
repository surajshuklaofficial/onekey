"use client";
import Image from "next/image";
import { ThreeDots } from "react-loader-spinner";
import LOGO from "@/public/logo.png";

// TODO: remove hard code color from loader

export default function page() {
  return (
    <div className="h-screen w-screen flex-center flex-col dark:bg-black">
      <Image src={LOGO} width="40" height="40" alt="logo" />
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#209CEE"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
      {/* <div>loading...</div> */}
    </div>
  );
}
