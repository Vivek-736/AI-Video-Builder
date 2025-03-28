"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed dark:border-indigo-300 border-indigo-600 rounded-lg text-center">
      <svg
        className="w-12 h-12 text-gray-600 dark:text-gray-300 mb-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-300 mb-1">
        No videos generated yet
      </h3>
      <p className="text-gray-500 dark:text-gray-400 mb-4">
        Get started by creating your first video
      </p>
      <Link href={"/create"}>
        <Button className="cursor-pointer" variant={"custom"}>Create one</Button>
      </Link>
    </div>
  );
};

export default EmptyState;
