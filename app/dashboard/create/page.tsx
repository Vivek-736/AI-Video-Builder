"use client";
import React, { useState } from 'react'
import axios from 'axios';
import SelectTopic from '@/components/Dashboard/SelectTopic'
import BackButton from '@/components/Dashboard/BackButton';
import SelectType from '@/components/Dashboard/SelectType';
import SelectDuration from '@/components/Dashboard/SelectDuration';
import { Button } from '@/components/ui/button';
import CustomLoading from '@/components/CustomLoading';
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

const CreatePage = () => {
    const [formData, setFormData] = useState<Record<string, any>>({});
    const [loading, setLoading] = useState(false);
    const [videoScript, setVideoScript] = useState();

    const onHandleInputChange = (fieldName: string, fieldValue: string) => {
        setFormData((prev) => {
            const newData = {
                ...prev,
                [fieldName]: fieldValue
            };
            // console.log(newData);
            return newData;
        });
    }

    const onCreateClickHandler = () => {
        GetVideoScript();
    }

    const GetVideoScript = async () => {
        setLoading(true);
        const prompt = `Write a script to generate ${formData.duration} video on topic :${formData.topic} along with Al image prompt in ${formData.videoStyle} format for each scene and give me result in JSON format with imagePrompt and ContentText as field`;
        console.log(prompt);
        const result = await axios.post(`/api/get-video-script`,
        {
            prompt: prompt 
        })
        .then(res => {
            console.log(res.data);
            setVideoScript(res.data);
        })
        setLoading(false);
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
                    onClick={onCreateClickHandler} 
                    disabled={!formData.topic || !formData.videoStyle || !formData.duration}
                    variant={"custom"}>
                    Generate Video
                </Button>
            </div>
            <CustomLoading loading={loading} />
        </div>
    )
}

export default CreatePage;
