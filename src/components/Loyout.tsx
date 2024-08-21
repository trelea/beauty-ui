import React from "react";
import { Navbar } from "./Navbar";
import { AdminNavbar } from "./AdminNavbar";
import { Toaster } from "./ui/toaster";

interface Props {
    children: JSX.Element[] | JSX.Element | React.ReactNode;
    adminNavbar?: boolean;
}

export const BaseLoyout: React.FC<Props> = ({ children, adminNavbar }) => {
    return (
        <>
            <main className="w-screen bg-secondary">
                {adminNavbar ? <AdminNavbar /> : <Navbar />}
                {children}
            </main>
            <Toaster />
        </>
    );
};
