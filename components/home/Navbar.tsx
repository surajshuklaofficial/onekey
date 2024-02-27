"use client";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa6";

import LOGO from "@/public/logo.png";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavigationMenuDemo } from "./t";

export default function Navbar() {
  const [toggle, setToggle] = useState<Boolean>(false);
  const [scrolling, setScrolling] = useState(false);

  const handleToggle = () => {
    setToggle((prevValue) => !prevValue);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="px-4 lg:px-16 lg:py-6 flex items-center justify-between sticky top-0 gradient-2  backdrop-blur-sm">
      <Link href="/">
        <figure className="flex items-center gap-0.5">
          {/* <Image src={LOGO} width="40" height="40" alt="logo" /> */}
          <span className="font-[Pacifico] text-6xl text-white">O</span>
          <p className="text-xl lg:text-4xl font-bold rubik text-white">
            ne<span>Key</span>
          </p>
        </figure>
      </Link>

      <NavigationMenuDemo />
      <div className="hidden lg:flex gap-4">
        <Link
          className="bg-accent text-white p-2 text-xl rounded"
          href="/signup"
        >
          Get Started
        </Link>
        <Link
          className="border border-accent p-2 rounded text-accent text-xl"
          href="/login"
        >
          Login
        </Link>
      </div>

      <button className="lg:hidden text-white" onClick={handleToggle}>
        <GiHamburgerMenu />
      </button>
      {toggle && (
        <nav className="absolute top-16 right-20 border bg-background px-12 py-10 z-50 bg-opacity-95 rounded-sm">
          <ul className="flex flex-col gap-8 justify-between items-center font-medium text-primary lg:hidden">
            <li>Products</li>
            <li>Developer</li>
            <li>Resources</li>
            <li>About Us</li>
            <li className="flex flex-col gap-3">
              <Link
                href="/login"
                className="text-accent py-2 px-4 font-bold text-center"
              >
                Sign in
              </Link>
              <Link
                href="/signup"
                className="bg-accent text-white py-2 px-4 font-bold text-center"
              >
                Get Started
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
