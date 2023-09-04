import { Outlet } from "react-router-dom";

import { NavBar } from "../components/NavBar";

export const Root = () => {
    return (
        <div>
            <NavBar />

            <div className="bg-teal-500 h-screen max-w-5xl mx-5 sm:mx-10 lg:mx-auto mb-5 text-white">
                <Outlet />
            </div>
        </div>
    );
};
