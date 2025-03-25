"use client";

import React from "react";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/nextjs";

const Navbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="flex justify-between items-center p-4 sticky top-0 bg-background/50 backdrop-blur-2xl shadow-md dark:shadow-white">
      <div className="md:text-4xl text-2xl flex items-center font-medium">
        <div className="flex gap-3">
          <Image src="/logo.png" alt="logo" width={42} height={42} />
          <div>
            Vid<span className="text-blue-500 font-bold">Genius</span>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <ModeToggle />
        <Link href={isSignedIn ? "/dashboard" : "/sign-in"}>
          <Button className="cursor-pointer" variant={"default"}>
            {isSignedIn ? "Dashboard" : "LogIn"}
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
