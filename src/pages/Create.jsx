import { useOutletContext } from "react-router-dom";

import { useState } from "react";

import { Button } from "../components/Button";

export const Create = () => {
    const { setStreaks } = useOutletContext();

    const [activity, setActivity] = useState("");
    const [streakCount, setStreakCount] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newStreak = { activity, streakCount: +streakCount };
        setStreaks((currentStreaks) => {
            return [...currentStreaks, newStreak];
        });
    };

    return (
        <div>
            <h1 className="font-bold text-4xl my-4">Create new activity</h1>
            <form onSubmit={handleSubmit} className="flex flex-col w-1/3 gap-3">
                <label className="font-bold">Activity:</label>
                <input
                    required
                    type="text"
                    placeholder="Enter new activity"
                    className="rounded-md pl-2 py-1 text-slate-800 bg-gray-200 border border-gray-400"
                    value={activity}
                    onChange={(e) => setActivity(e.target.value)}
                />
                <label className="font-bold">Streak:</label>
                <input
                    required
                    type="number"
                    placeholder="Enter current streak"
                    className="rounded-md pl-2 py-1 text-slate-800 bg-gray-200 border border-gray-400"
                    value={streakCount}
                    onChange={(e) => setStreakCount(e.target.value)}
                />
                <br />
                <Button content="Add activity" />
            </form>
        </div>
    );
};
