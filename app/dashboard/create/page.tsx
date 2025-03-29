import React from 'react'
import SelectTopic from '@/components/Dashboard/SelectTopic'

const page = () => {
    return (
        <div className='md:px-20 p-6'>
            <h2 className='font-bold text-2xl md:text-4xl dark:text-indigo-400 text-indigo-600 text-center'>
                Create Anything!
            </h2>
            <div className='mt-10 p-10 shadow-lg shadow-gray-700 dark:shadow-gray-300'>
                <SelectTopic />
            </div>
        </div>
    )
}

export default page
