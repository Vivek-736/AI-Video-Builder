import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-500 p-4 sm:p-6 md:p-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in border border-white/20">
                <div className="relative z-10">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
