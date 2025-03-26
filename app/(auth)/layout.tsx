import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen dark:from-purple-900 dark:to-gray-900 bg-gradient-to-br from-purple-100 to-white flex justify-center items-center">
            {children}
        </div>
    );
};

export default AuthLayout;
