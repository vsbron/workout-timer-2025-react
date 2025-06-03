import {
  createContext,
  useContext,
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

// Initial values
const INITIAL_EXERCISE = 30;
const INITIAL_BREAK = 15;
const INITIAL_ROUNDS = 3;
const INITIAL_STATE = "Idle";
const INITIAL_PAUSED = true;
const STARTING_TIME = 0;
const STARTING_ROUND = 1;

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

  // Reset timer function that initiates all the times
  const resetTimer = () => {
    setExerciseLength(INITIAL_EXERCISE);
    setBreakLength(INITIAL_BREAK);
    setRoundsNum(INITIAL_ROUNDS);
    setCurrentPhase(INITIAL_STATE);
    setCurrentTime(STARTING_TIME);
    setCurrentRound(STARTING_ROUND);
    setIsPaused(true);
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
    resetTimer,
  };
};
