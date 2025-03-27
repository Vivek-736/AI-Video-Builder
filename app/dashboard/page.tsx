"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import EmptyState from "@/components/Dashboard/EmptyState";


const DashboardPage = () => {
  const [videoList, setVideoList] = useState([]);

  return (
    <>
      <div>
        <div className="flex justify-between items-center p-6">
          <h2 className="font-bold text-2xl text-indigo-400 dark:text-indigo-600">
            Dashboard
          </h2>
          <Button className="cursor-pointer">
            <Plus className="text-white dark:text-black font-bold" /> Create New
          </Button>
        </div>
        <div className="p-6">
          {videoList?.length == 0 &&
            <EmptyState />
          }
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
