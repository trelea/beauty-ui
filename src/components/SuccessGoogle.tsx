import React from "react";

export const SuccessGoogle: React.FC = () => {
    React.useEffect(() => {
        setTimeout(() => window.close(), 1000);
    }, []);
    return (
        <div className="flex justify-center items-center h-screen w-screen">
            <h1 className="text-2xl">Successfully LogedIn With Google.</h1>
        </div>
    );
};
