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
      <div className="flex flex-col gap-5">
        <FormGroup>
          <FormLabel note={`Maximum 600 seconds`}>
            Exercise length (in seconds)
          </FormLabel>
          <FormInput
            onChange={setNewExerciseLength}
            limit={600}
            value={newExerciseLength}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel note={`Maximum 240 seconds`}>
            Break length (in seconds)
          </FormLabel>
          <FormInput
            onChange={setNewBreakLength}
            limit={240}
            value={newBreakLength}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel note={`Maximum 5 rounds`}>Number of rounds</FormLabel>
          <FormInput
            onChange={setNewRoundsNum}
            limit={5}
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
