/* eslint-disable @typescript-eslint/no-unused-expressions */
"use client";
import React, { useState } from "react";
import { ArrowBigRight } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "../ui/textarea";

interface SelectTopicProps {
  onUserSelect: (fieldName: string, fieldValue: string) => void;
}

const SelectTopic = ({ onUserSelect }: SelectTopicProps) => {
  const options = [
    "Motivational Story",
    "Funny Story",
    "Daunting Story",
    "Technical Stuff",
    "Random Video",
    "Custom Prompt",
  ];
  const [selectdOption, setSelectedOption] = useState<string | undefined>();

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between items-center">
        <div className="space-y-2">
          <h2 className="font-bold text-2xl text-indigo-600 dark:text-indigo-400">
            Content
          </h2>
          <div>
            <p className="text-gray-500 dark:text-gray-300 flex flex-row gap-x-2 items-center">
              Select your video core{" "}
              <ArrowBigRight className="text-black dark:text-white" />
            </p>
          </div>
        </div>
        <div>
          <Select onValueChange={(value) => {
            setSelectedOption(value)
              value != "Custom Prompt" && onUserSelect('topic', value)
            }}>
            <SelectTrigger className="w-full mt-2 p-6 text-lg cursor-pointer">
              <SelectValue placeholder="Video Theme" />
            </SelectTrigger>
            <SelectContent>
              {options.map((item, index) => (
                <SelectItem key={index} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      {selectdOption === "Custom Prompt" && (
        <Textarea className="mt-4 border-2" 
          onChange={(e) => onUserSelect('topic', e.target.value)}
          placeholder="Write Your Custom Prompt"        
        />
      )}
    </div>
  );
};

export default SelectTopic;
