"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import React from "react";

const BackButton = () => (
  <div className="block md:hidden absolute top-24 left-6">
    <Link
      href="/dashboard"
      className="flex items-center text-indigo-600 dark:text-indigo-400"
    >
      <ArrowLeft className="w-5 h-5 mr-2" />
    </Link>
  </div>
);

export default BackButton;
