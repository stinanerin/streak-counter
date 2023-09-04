import { Button } from "./Button";
import { toUpperCaseStr } from "../utility/helpers";

export const StreakCounter = ({
    activity,
    streakCount,
    index,
    addStreak,
    subtractStreak,
}) => {
    return (
        <div className="mb-5">
            <h3 className="font-bold">{toUpperCaseStr(activity)}</h3>
            <div className="flex items-center">
                <Button content="+" onClick={() => addStreak(index)} />
                <p className="font-bold"> {streakCount}</p>
                <Button content="-" onClick={() => subtractStreak(index)} />
            </div>
        </div>
    );
};
