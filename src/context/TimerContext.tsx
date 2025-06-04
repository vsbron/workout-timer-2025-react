import {
  INITIAL_BREAK,
  INITIAL_EXERCISE,
  INITIAL_PAUSED,
  INITIAL_ROUNDS,
  INITIAL_STATE,
  STARTING_ROUND,
  STARTING_TIME,
} from "@/lib/constants";
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

// Types of available phases
type phases = "Idle" | "Exercise" | "Break";

interface ITimerRuntime {
  currentPhase: phases;
  currentTime: number;
  currentRound: number;
  isPaused: boolean;
  setCurrentPhase: Dispatch<SetStateAction<phases>>;
  setCurrentTime: Dispatch<SetStateAction<number>>;
  setCurrentRound: Dispatch<SetStateAction<number>>;
  setIsPaused: Dispatch<SetStateAction<boolean>>;
  startTimer: () => void;
  stopTimer: () => void;
  resetTimer: () => void;
}

interface ITimerSettings {
  exerciseLength: number;
  breakLength: number;
  roundsNum: number;
  setExerciseLength: Dispatch<SetStateAction<number>>;
  setBreakLength: Dispatch<SetStateAction<number>>;
  setRoundsNum: Dispatch<SetStateAction<number>>;
}

// Create Context with undefined
const TimerRuntimeContext = createContext<ITimerRuntime | undefined>(undefined);
const TimerSettingsContext = createContext<ITimerSettings | undefined>(
  undefined
);

// TimerProvider component that will wrap the timer & controls
export const TimerProvider = ({ children }: { children: ReactNode }) => {
  // Setting the states for the timer
  const [exerciseLength, setExerciseLength] =
    useState<number>(INITIAL_EXERCISE);
  const [breakLength, setBreakLength] = useState<number>(INITIAL_BREAK);
  const [roundsNum, setRoundsNum] = useState<number>(INITIAL_ROUNDS);
  const [currentPhase, setCurrentPhase] = useState<phases>(INITIAL_STATE);
  const [currentTime, setCurrentTime] = useState<number>(STARTING_TIME);
  const [currentRound, setCurrentRound] = useState<number>(STARTING_ROUND);
  const [isPaused, setIsPaused] = useState<boolean>(INITIAL_PAUSED);

  // Creating a ref for the interval
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // UseEffect that handles the countdown
  useEffect(() => {
    // If we have not reach zero and not paused, reduce current time by second every second
    if (!isPaused && currentTime > 0) {
      intervalRef.current = setInterval(() => {
        setCurrentTime((time) => time - 1);
      }, 1000);
    }

    // If we hit 0 and not on pause
    if (currentTime === 0 && !isPaused) {
      // Timer reached zero, switch phase
      clearInterval(intervalRef.current!);

      // If we're on Exercise and not on last round
      if (currentPhase === "Exercise" && currentRound < roundsNum) {
        // Change to Break, reinitialize current time with break length
        setCurrentPhase("Break");
        setCurrentTime(breakLength);

        // Else, if we're on the break
      } else if (currentPhase === "Break") {
        // Advance the round, change the phase, reinitialize current time
        setCurrentRound((r) => r + 1);
        setCurrentPhase("Exercise");
        setCurrentTime(exerciseLength);

        // If we reached the end, stop the timer
      } else {
        stopTimer();
      }
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [
    isPaused,
    currentTime,
    currentPhase,
    currentRound,
    roundsNum,
    exerciseLength,
    breakLength,
  ]);

  const startTimer = () => {
    if (currentPhase === "Idle") {
      setCurrentPhase("Exercise");
      setCurrentTime(exerciseLength);
    }
    setIsPaused(false);
  };

  // Stop timer function that gets it to zero, but keeps the current lengths
  const stopTimer = () => {
    setIsPaused(INITIAL_PAUSED);
    setCurrentTime(STARTING_TIME);
    setCurrentRound(STARTING_ROUND);
    setCurrentPhase("Idle");
  };

  // Reset timer function that initiates all the times/rounds
  const resetTimer = () => {
    setExerciseLength(INITIAL_EXERCISE);
    setBreakLength(INITIAL_BREAK);
    setRoundsNum(INITIAL_ROUNDS);
    setCurrentPhase(INITIAL_STATE);
    setCurrentTime(STARTING_TIME);
    setCurrentRound(STARTING_ROUND);
    setIsPaused(INITIAL_PAUSED);
  };

  // Returned JSX
  return (
    <TimerSettingsContext.Provider
      value={{
        exerciseLength,
        breakLength,
        roundsNum,
        setExerciseLength,
        setBreakLength,
        setRoundsNum,
      }}
    >
      <TimerRuntimeContext.Provider
        value={{
          currentPhase,
          currentTime,
          currentRound,
          isPaused,
          setCurrentPhase,
          setCurrentTime,
          setCurrentRound,
          setIsPaused,
          startTimer,
          stopTimer,
          resetTimer,
        }}
      >
        {children}
      </TimerRuntimeContext.Provider>
    </TimerSettingsContext.Provider>
  );
};

// Custom hook to use the Context API
export const useTimerContext = () => {
  // Getting the data from the context
  const context1 = useContext(TimerSettingsContext);
  const context2 = useContext(TimerRuntimeContext);

  // Error if tried to use outside of Context scope
  if (!context1 || !context2) {
    throw new Error("useTimerContext must be used within a TimerProvider");
  }

  // Getting the values out of contexts
  const {
    exerciseLength,
    breakLength,
    roundsNum,
    setExerciseLength,
    setBreakLength,
    setRoundsNum,
  } = context1;
  const {
    currentPhase,
    currentTime,
    currentRound,
    isPaused,
    setCurrentPhase,
    setCurrentTime,
    setCurrentRound,
    setIsPaused,
    startTimer,
    stopTimer,
    resetTimer,
  } = context2;

  // Return the values
  return {
    exerciseLength,
    breakLength,
    roundsNum,
    currentPhase,
    currentTime,
    currentRound,
    isPaused,
    setExerciseLength,
    setBreakLength,
    setRoundsNum,
    setCurrentPhase,
    setCurrentTime,
    setCurrentRound,
    setIsPaused,
    startTimer,
    stopTimer,
    resetTimer,
  };
};
