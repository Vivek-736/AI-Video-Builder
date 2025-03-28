"use client";
import React from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "../mode-toggle";
import Link from "next/link";

const Header = () => {
  return (
    <div className="p-3 px-5 flex justify-between items-center border-b-2 border-gray-400 dark:border-gray-800 bg-slate-200 dark:bg-slate-900">
      <div className="md:text-4xl text-2xl flex items-center font-medium">
        <Link href={"/"}>
          <div className="flex gap-3 items-center cursor-pointer">
            <Image src="/logo.png" alt="logo" width={42} height={42} />
            <div>
              Vid<span className="text-blue-500 font-bold">Genius</span>
            </div>
          </div>
        </Link>
      </div>
      <div className="flex gap-3 items-center">
        <ModeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Header;
