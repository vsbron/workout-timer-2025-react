import { useState } from "react";

import { useTimerContext } from "@/context/TimerContext";

import Button from "@/ui/Button";

// Component prop types
type SettingsProps = { settingsClose: () => void };

function Settings({ settingsClose }: SettingsProps) {
  // Getting the state values and setters from Context API
  const {
    exerciseLength,
    breakLength,
    roundsNum,
    setExerciseLength,
    setBreakLength,
    setRoundsNum,
    resetTimer,
  } = useTimerContext();

  // Setting the states for the settings inputs
  const [newExerciseLength, setNewExerciseLength] =
    useState<number>(exerciseLength);
  const [newBreakLength, setNewBreakLength] = useState<number>(breakLength);
  const [newRoundsNum, setNewRoundsNum] = useState<number>(roundsNum);

  // Submit handler
  const submitSettings = () => {
    setExerciseLength(newExerciseLength);
    setBreakLength(newBreakLength);
    setRoundsNum(newRoundsNum);
    resetTimer();
  };

  // Returned JSX
  return (
    <div className="mt-4">
      <div className="flex text-2xl">
        <div>
          <label>Exercise length (in seconds)</label>
          <input
            type="text"
            onChange={(e) => setNewExerciseLength(Number(e.target.value))}
            value={newExerciseLength}
          />
        </div>
        <div>
          <label>Break length (in seconds)</label>
          <input
            type="text"
            onChange={(e) => setNewBreakLength(Number(e.target.value))}
            value={newBreakLength}
          />
        </div>
        <div>
          <label>Number of rounds</label>
          <input
            type="text"
            onChange={(e) => setNewRoundsNum(Number(e.target.value))}
            value={newRoundsNum}
          />
        </div>
      </div>
      <div className="flex gap-6">
        <Button size="small" onClick={settingsClose}>
          Cancel
        </Button>
        <Button size="small" onClick={submitSettings}>
          Save & Reset
        </Button>
      </div>
    </div>
  );
}

export default Settings;
