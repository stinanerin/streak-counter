import { useState } from "react";
import { Button } from "./Button";

export const StreakCounter = ({ initialStreak = 0 }) => {
    const [streak, setStreak] = useState(initialStreak);

    const subtractStreak = () => {
        setStreak((prevState) => prevState - 1);
    };
    const addStreak = () => {
        setStreak((prevState) => prevState + 1);
    };

    return (
        <div>
            <p>Current streak: {streak}</p>
            <Button content="+" onClick={addStreak} />
            <Button content="-" onClick={subtractStreak} />
        </div>
    );
};
