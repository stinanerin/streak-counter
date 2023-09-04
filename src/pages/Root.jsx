import { Outlet } from "react-router-dom";
import { useState } from "react";

import { NavBar } from "../components/NavBar";

export const Root = () => {
    const [streaks, setStreaks] = useState([
        {
            activity: "toothpick",
            streakCount: 3,
        },
    ]);
    return (
        <div>
            <NavBar />

            <div className="h-screen max-w-5xl mx-5 sm:mx-10 lg:mx-auto mb-5 text-black">
                {
                    // Kasta in data via Outlet - alla applikationens sidor har root som parent component
                }
                <Outlet context={{ streaks, setStreaks }} />
            </div>
        </div>
    );
};
