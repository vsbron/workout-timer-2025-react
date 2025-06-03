import { useState } from "react";

import { useTimerContext } from "@/context/TimerContext";

import Button from "@/ui/Button";
import { FormGroup, FormInput, FormLabel } from "@/ui/Form";

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
    <div className="flex flex-col gap-8">
      <h2 className="text-center font-semibold text-4xl">Timer Settings</h2>
      <div className="flex flex-col gap-4">
        <FormGroup>
          <FormLabel>Exercise length (in seconds)</FormLabel>
          <FormInput
            onChange={(e) => setNewExerciseLength(Number(e.target.value))}
            value={newExerciseLength}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Break length (in seconds)</FormLabel>
          <FormInput
            onChange={(e) => setNewBreakLength(Number(e.target.value))}
            value={newBreakLength}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Number of rounds</FormLabel>
          <FormInput
            onChange={(e) => setNewRoundsNum(Number(e.target.value))}
            value={newRoundsNum}
          />
        </FormGroup>
      </div>
      <div className="flex gap-6 justify-center">
        <Button size="small" onClick={settingsClose}>
          Close
        </Button>
        <Button size="small" onClick={submitSettings}>
          Save & Reset
        </Button>
      </div>
    </div>
  );
}

export default Settings;
