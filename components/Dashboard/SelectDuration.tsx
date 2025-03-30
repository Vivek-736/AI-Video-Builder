/* eslint-disable @typescript-eslint/no-unused-expressions */
"use client";

import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectDurationProps {
  onUserSelect: (fieldName: string, fieldValue: string) => void;
}

const SelectDuration = ({ onUserSelect }: SelectDurationProps) => {
  const [selectdOption, setSelectedOption] = useState<string | undefined>();

  return (
    <div className="mt-10 flex flex-col gap-y-4 w-full">
      <div className="space-y-2">
        <h2 className="font-bold text-2xl text-indigo-600 dark:text-indigo-400">
          Duration
        </h2>
        <p className="text-gray-500 dark:text-gray-300 flex flex-row gap-x-2 items-center">
          Select The duration for the video
        </p>
      </div>
      <div>
        <Select
          onValueChange={(value) => {
            setSelectedOption(value);
            selectdOption != "anything" && onUserSelect("duration", value);
          }}
        >
          <SelectTrigger className="w-full mt-2 p-6 text-lg cursor-pointer">
            <SelectValue placeholder="Select the video duration" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="10 seconds">10 seconds</SelectItem>
            <SelectItem value="30 seconds">30 seconds</SelectItem>
            <SelectItem value="60 seconds">60 seconds</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default SelectDuration;
