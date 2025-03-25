import React from 'react'
import Sidebar from '@/components/Dashboard/Sidebar';
import Header from '@/components/Dashboard/Header';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <div className='hidden md:block h-screen bg-gray-200  dark:bg-gray-900 fixed w-64 mt-[68px]'>
                <Sidebar />
            </div>
            <div>
                <Header />
                <div className='md:ml-64'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout;
