import React from "react";
import { Navbar } from "./Navbar";
import { AdminNavbar } from "./AdminNavbar";

interface Props {
    children: JSX.Element[] | JSX.Element | React.ReactNode;
    adminNavbar?: boolean;
}

export const BaseLoyout: React.FC<Props> = ({ children, adminNavbar }) => {
    return (
        <html lang="en">
            <body>
                <main className="w-screen bg-secondary">
                    {adminNavbar ? <AdminNavbar /> : <Navbar />}
                    {children}
                </main>
            </body>
        </html>
    );
};
