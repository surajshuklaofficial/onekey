"use client";

import { authorizeAsync } from "@/lib/action";
import { useLayoutEffect } from "react";

export default function page() {
  // useLayoutEffect(() => {
  //   authorizeAsync()
  //       .then(res => console.log(res))
  //       .catch(err => console.log(err))
  // }, []);

  return <div className="flex-center w-full h-full">Coming Soon Really...</div>;
}
