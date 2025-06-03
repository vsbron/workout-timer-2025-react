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

// Interface for the context
interface ITimerContext {
  exerciseLength: number;
  breakLength: number;
  roundsNum: number;
  currentPhase: phases;
  currentTime: number;
  currentRound: number;
  isPaused: boolean;
  setExerciseLength: Dispatch<SetStateAction<number>>;
  setBreakLength: Dispatch<SetStateAction<number>>;
  setRoundsNum: Dispatch<SetStateAction<number>>;
  setCurrentPhase: Dispatch<SetStateAction<phases>>;
  setCurrentTime: Dispatch<SetStateAction<number>>;
  setCurrentRound: Dispatch<SetStateAction<number>>;
  setIsPaused: Dispatch<SetStateAction<boolean>>;
  resetTimer: () => void;
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
const TimerContext = createContext<ITimerContext | undefined>(undefined);

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
    <TimerContext.Provider
      value={{
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
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

// Custom hook to use the Context API
export const useTimerContext = (): ITimerContext => {
  // Getting the data from the context
  const context = useContext(TimerContext);

  // Error if tried to use outside of Context scope
  if (!context) {
    throw new Error("useTimerContext must be used within a TimerProvider");
  }

  // Getting the values out of context
  const {
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
  } = context;

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
