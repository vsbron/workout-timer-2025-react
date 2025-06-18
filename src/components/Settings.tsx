import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useTimerContext } from "@/context/TimerContext";
import {
  MAX_BREAK_LENGTH,
  MAX_EXERCISE_LENGTH,
  MAX_ROUNDS,
} from "@/lib/constants";

import Button from "@/ui/Button";

// Zod schema for data validation
export const settingsFormSchema = z.object({
  exercise: z.coerce
    .number({ invalid_type_error: "Please enter a number" })
    .min(1, "Exercise length should be at least 1 second")
    .max(
      MAX_EXERCISE_LENGTH,
      `Exercise can't be longer than ${MAX_EXERCISE_LENGTH} seconds`
    ),
  break: z.coerce
    .number({ invalid_type_error: "Please enter a number" })
    .min(1, "Break length should be at least 1 second")
    .max(
      MAX_BREAK_LENGTH,
      `Break can't be longer than ${MAX_BREAK_LENGTH} seconds`
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
          <div>
            <div>
              <div className="flex items-center justify-between gap-1">
                <label
                  htmlFor="exercise"
                  className="text-2xl flex flex-col gap-0.5"
                >
                  Exercise length
                  <span className="text-[1.3rem]">
                    Maximum {MAX_EXERCISE_LENGTH} seconds
                  </span>
                </label>
                <input
                  id="exercise"
                  type="text"
                  className="border-1 text-stone-950 dark:text-stone-50 border-stone-950 dark:border-purple-400 rounded-sm pt-1 pb-1.5 px-4 max-w-21"
                  defaultValue={exerciseLength}
                  {...register("exercise")}
                />
              </div>
              {errors.exercise && (
                <p className="text-red-500 text-lg mt-1">
                  {errors.exercise.message}
                </p>
              )}
            </div>
          </div>
          <div>
            <div>
              <div className="flex items-center justify-between gap-1">
                <label
                  htmlFor="break"
                  className="text-2xl flex flex-col gap-0.5"
                >
                  Break length
                  <span className="text-[1.3rem]">
                    Maximum {MAX_BREAK_LENGTH} seconds
                  </span>
                </label>
                <input
                  id="break"
                  type="text"
                  className="border-1 text-stone-950 dark:text-stone-50 border-stone-950 dark:border-purple-400 rounded-sm pt-1 pb-1.5 px-4 max-w-21"
                  defaultValue={breakLength}
                  {...register("break")}
                />
              </div>
              {errors.break && (
                <p className="text-red-500 text-lg mt-1">
                  {errors.break.message}
                </p>
              )}
            </div>
          </div>
          <div>
            <div>
              <div className="flex items-center justify-between gap-1">
                <label
                  htmlFor="rounds"
                  className="text-2xl flex flex-col gap-0.5"
                >
                  Number of rounds
                  <span className="text-[1.3rem]">
                    Maximum {MAX_ROUNDS} rounds
                  </span>
                </label>
                <input
                  id="rounds"
                  type="text"
                  className="border-1 text-stone-950 dark:text-stone-50 border-stone-950 dark:border-purple-400 rounded-sm pt-1 pb-1.5 px-4 max-w-21"
                  defaultValue={roundsNum}
                  {...register("rounds")}
                />
              </div>
              {errors.rounds && (
                <p className="text-red-500 text-lg mt-1">
                  {errors.rounds.message}
                </p>
              )}
            </div>
          </div>
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
