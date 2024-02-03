import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

import Header from "@/components/shared/Header";
import Sidebar from "@/components/shared/Sidebar";
import { sidebarOptions } from "@/constants/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OneKey",
  description: "Your one & only solution for sso & user management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Header />
      <div className="flex">
        <Sidebar options={sidebarOptions} />
        <div className="pl-60 pt-40">{children}</div>
      </div>
    </main>
  );
}
