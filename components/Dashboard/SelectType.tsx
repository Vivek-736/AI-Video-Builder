"use client";

import Image from "next/image";
import React, { useState } from "react";

interface SelectTypeProps {
  onUserSelect: (fieldName: string, fieldValue: string) => void;
}

const SelectType = ({ onUserSelect }: SelectTypeProps) => {
  const selectOptions = [
    {
      name: "Realistic",
      image: "/realistic.png",
    },
    {
      name: "Anime",
      image: "/anime.png",
    },
    {
      name: "Cartoon",
      image: "/cartoon.png",
    },
    {
      name: "Fantasy",
      image: "/fantasy.png",
    },
    {
      name: "Artistic",
      image: "/artistic.png",
    },
    {
      name: "3D",
      image: "/3d.png",
    },
  ];

  const [selectedOption, setSelectedOption] = useState<string | undefined>();

  return (
    <div className="mt-10">
      <div className="space-y-2">
        <h2 className="font-bold text-2xl text-indigo-600 dark:text-indigo-400">
          Video Style
        </h2>
        <p className="text-gray-500 dark:text-gray-300 flex flex-row gap-x-2 items-center">
          Select the video style you want to use for your video
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6 mt-4">
            {selectOptions.map((option, index) => (
                <div className={`relative cursor-pointer hover:scale-110 transition-all
                ${selectedOption == option.name && "border-4 border-indigo-600 rounded-xl dark:border-indigo-400"}`} key={index}>
                    <Image
                        src={option.image}
                        alt={option.name}
                        width={100}
                        height={100}
                        className="rounded-lg border-2 border-white h-32 object-cover w-full"
                        onClick={() => 
                            {
                                setSelectedOption(option.name)
                                onUserSelect('videoStyle', option.name)
                            }
                        }
                    />
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SelectType;
