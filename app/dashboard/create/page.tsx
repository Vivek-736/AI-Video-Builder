"use client";
import React, { useState } from 'react'
import SelectTopic from '@/components/Dashboard/SelectTopic'
import BackButton from '@/components/Dashboard/BackButton';
import SelectType from '@/components/Dashboard/SelectType';
import SelectDuration from '@/components/Dashboard/SelectDuration';
import { Button } from '@/components/ui/button';
/* eslint-disable @typescript-eslint/no-explicit-any */

const CreatePage = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [formData, setFormData] = useState<Record<string, any>>({});

    const onHandleInputChange = (fieldName: string, fieldValue: string) => {
        setFormData((prev) => {
            const newData = {
                ...prev,
                [fieldName]: fieldValue
            };
            console.log(newData);
            return newData;
        });
    }

    return (
        <div className='md:px-20 p-6'>
            <BackButton />
            <h2 className='font-bold text-2xl md:text-4xl dark:text-indigo-400 text-indigo-600 text-center'>
                Create Anything!
            </h2>
            <div className='mt-10 p-10 shadow-lg shadow-gray-700 dark:shadow-gray-300'>
                <SelectTopic onUserSelect={onHandleInputChange} />
                <SelectType onUserSelect={onHandleInputChange} />
                <SelectDuration onUserSelect={onHandleInputChange} />
                <Button 
                    className='mt-10 w-full cursor-pointer' 
                    variant={"custom"}>
                    Generate Video
                </Button>
            </div>
        </div>
    )
}

export default CreatePage;
