import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="text-4xl font-bold flex min-h-screen flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          VideoBuilder
          <span className="text-blue-500">AI</span>
        </div>
        <div className="flex items-center justify-center mt-1">
          <Link href="/sign-in">
            <Button className="cursor-pointer" variant={"default"}>
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
