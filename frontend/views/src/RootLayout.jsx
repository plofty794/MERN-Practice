import React from "react";
import { Outlet } from "react-router-dom";

function RootLayout() {
    return (
        <main className="bg-gray-200 rounded m-4 grid col-3-1 max-w-7xl mx-auto p-4">
            <Outlet />
        </main>
    );
}

export default RootLayout;
