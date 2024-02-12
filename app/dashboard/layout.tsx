import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

import Header from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/Sidebar";
import { sidebarOptions } from "@/constants/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin | OneKey",
  description: "Your one & only solution for sso & user management",
};

// TODO: fixed scrolling of sidebar
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <main>
      <Header />
      <div className="flex">
        {true && <Sidebar options={sidebarOptions} />}
        <div className="pt-24 w-full overflow-y-auto">{children}</div>
      </div>
    </main>
  );
}
