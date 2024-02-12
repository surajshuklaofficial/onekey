"use client";
import { TailSpin } from "react-loader-spinner";
// TODO: remove hard code color from loader

export default function page() {
  return (
    <div className="flex-center flex-col h-full w-full">
      <TailSpin
        visible={true}
        height="40"
        width="40"
        color="#209CEE"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
