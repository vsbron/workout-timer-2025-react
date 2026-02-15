import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useTimerContext } from "@/context/TimerContext";
import {
  MAX_BREAK_LENGTH,
  MAX_EXERCISE_LENGTH,
  MAX_ROUNDS,
} from "@/lib/constants";

import Button from "@/ui/Button";
import {
  FormError,
  FormGroup,
  FormInput,
  FormLabel,
  InputGroup,
} from "@/ui/Form";

// Zod schema for data validation
export const settingsFormSchema = z.object({
  exercise: z.coerce
    .number({ invalid_type_error: "Please enter a number" })
    .min(1, "Exercise length should be at least 1 second")
    .max(
      MAX_EXERCISE_LENGTH,
      `Exercise can't be longer than ${MAX_EXERCISE_LENGTH} seconds`,
    ),
  break: z.coerce
    .number({ invalid_type_error: "Please enter a number" })
    .min(1, "Break length should be at least 1 second")
    .max(
      MAX_BREAK_LENGTH,
      `Break can't be longer than ${MAX_BREAK_LENGTH} seconds`,
    ),
  rounds: z.coerce
    .number({ invalid_type_error: "Please enter a number" })
    .min(1, "Need at least 1 round")
    .max(MAX_ROUNDS, `Can't have more than ${MAX_ROUNDS} rounds`),
});

// Form schema assignment
type FormData = z.infer<typeof settingsFormSchema>;

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

  // Getting necessary form functions from React Hook Form hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(settingsFormSchema),
  });

  // Submit handler
  const onSubmit = (data: FormData) => {
    setExerciseLength(data.exercise);
    setBreakLength(data.break);
    setRoundsNum(data.rounds);
    stopTimer();
    settingsClose();
  };

  // Returned JSX
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-center font-semibold text-4xl">Timer Settings</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <FormGroup>
            <InputGroup>
              <FormLabel
                htmlFor="exercise"
                note={`Maximum ${MAX_EXERCISE_LENGTH} seconds`}
              >
                Exercise length
              </FormLabel>
              <FormInput
                id="exercise"
                defaultValue={exerciseLength}
                registerValue={register("exercise")}
              />
            </InputGroup>
            {errors.exercise && (
              <FormError>{errors.exercise.message}</FormError>
            )}
          </FormGroup>
          <FormGroup>
            <InputGroup>
              <FormLabel
                htmlFor="break"
                note={`Maximum ${MAX_BREAK_LENGTH} seconds`}
              >
                Break length
              </FormLabel>
              <FormInput
                id="break"
                defaultValue={breakLength}
                registerValue={register("break")}
              />
            </InputGroup>
            {errors.break && <FormError>{errors.break.message}</FormError>}
          </FormGroup>
          <FormGroup>
            <InputGroup>
              <FormLabel htmlFor="rounds" note={`Maximum ${MAX_ROUNDS} rounds`}>
                Number of rounds
              </FormLabel>
              <FormInput
                id="rounds"
                defaultValue={roundsNum}
                registerValue={register("rounds")}
              />
            </InputGroup>
            {errors.rounds && <FormError>{errors.rounds.message}</FormError>}
          </FormGroup>
        </div>
        <div className="flex gap-6 justify-center">
          <Button
            size="small"
            type="button"
            onClick={settingsClose}
            ariaLabel="Close settings"
          >
            Close
          </Button>
          <Button size="small" type="submit" ariaLabel="Save settings">
            Save & Reset
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Settings;
