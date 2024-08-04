import React from "react";
import { Navbar } from "./Navbar";

interface Props {
    children: JSX.Element[] | JSX.Element | React.ReactNode;
}

export const BaseLoyout: React.FC<Props> = ({ children }) => {
    return (
        <main className="w-screen bg-secondary">
            <Navbar />
            {children}
        </main>
    );
};
