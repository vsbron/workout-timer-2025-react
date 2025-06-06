import { useState, type FormEvent } from "react";

import { useTimerContext } from "@/context/TimerContext";

import Button from "@/ui/Button";
import { FormGroup, FormInput, FormLabel } from "@/ui/Form";
import {
  MAX_BREAK_LENGTH,
  MAX_EXERCISE_LENGTH,
  MAX_ROUNDS,
} from "@/lib/constants";

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
    stopTimer,
  } = useTimerContext();

  // Setting the states for the settings inputs
  const [newExerciseLength, setNewExerciseLength] =
    useState<number>(exerciseLength);
  const [newBreakLength, setNewBreakLength] = useState<number>(breakLength);
  const [newRoundsNum, setNewRoundsNum] = useState<number>(roundsNum);

  // Submit handler
  const submitSettings = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setExerciseLength(newExerciseLength);
    setBreakLength(newBreakLength);
    setRoundsNum(newRoundsNum);
    stopTimer();
    settingsClose();
  };

  // Returned JSX
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-center font-semibold text-4xl">Timer Settings</h2>
      <form onSubmit={(e) => submitSettings(e)} className="flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <FormGroup>
            <FormLabel note={`Maximum ${MAX_EXERCISE_LENGTH} seconds`}>
              Exercise length
            </FormLabel>
            <FormInput
              onChange={setNewExerciseLength}
              limit={MAX_EXERCISE_LENGTH}
              value={newExerciseLength}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel note={`Maximum ${MAX_BREAK_LENGTH} seconds`}>
              Break length
            </FormLabel>
            <FormInput
              onChange={setNewBreakLength}
              limit={MAX_BREAK_LENGTH}
              value={newBreakLength}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel note={`Maximum ${MAX_ROUNDS} rounds`}>
              Number of rounds
            </FormLabel>
            <FormInput
              onChange={setNewRoundsNum}
              limit={MAX_ROUNDS}
              value={newRoundsNum}
            />
          </FormGroup>
        </div>
        <div className="flex gap-6 justify-center">
          <Button size="small" type="button" onClick={settingsClose}>
            Close
          </Button>
          <Button size="small" type="submit">
            Save & Reset
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Settings;
