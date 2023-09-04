import { StreakCounter } from "../components/StreakCounter";
import { useOutletContext } from "react-router-dom";

export const Home = () => {
    const { streaks, setStreaks } = useOutletContext();
    console.log(streaks);

    const subtractStreak = (index) => {
        const newStreaks = [...streaks];
        newStreaks[index].streakCount -= 1;
        setStreaks(newStreaks);
    };
    const addStreak = (index) => {
        const newStreaks = [...streaks];
        newStreaks[index].streakCount += 1;
        setStreaks(newStreaks);
    };

    return (
        <div>
            <h1 className="font-bold text-4xl my-4">Home</h1>

            {streaks &&
                streaks.map((streak, index) => {
                    return (
                        <StreakCounter
                            subtractStreak={subtractStreak}
                            addStreak={addStreak}
                            activity={streak.activity}
                            streakCount={streak.streakCount}
                            index={index}
                            key={index}
                        />
                    );
                })}
        </div>
    );
};
