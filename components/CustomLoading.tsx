"use client";
import React from "react";
import Image from "next/image";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle
} from "@/components/ui/alert-dialog";

interface CustomLoadingProps {
    loading: boolean;
}

const CustomLoading = ({ loading }: CustomLoadingProps) => {
  return (
    <AlertDialog open={loading}>
      <AlertDialogTitle></AlertDialogTitle>
      <AlertDialogContent>
        <div className="flex flex-col items-center justify-center my-6">
            <Image className="rounded-full" src={'/loading.gif'} width={200} height={200} alt="loading gif" />
            <h2 className="mt-4">Generating... Please wait a moment...</h2>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CustomLoading;
