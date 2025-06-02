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
  setExerciseLength: Dispatch<SetStateAction<number>>;
  setBreakLength: Dispatch<SetStateAction<number>>;
  setRoundsNum: Dispatch<SetStateAction<number>>;
  setCurrentPhase: Dispatch<SetStateAction<phases>>;
  resetTimer: () => void;
}

// Initial values
const INITIAL_EXERCISE = 30;
const INITIAL_BREAK = 15;
const INITIAL_ROUNDS = 3;
const INITIAL_STATE = "Idle";

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

  // Reset timer function that initiates all the times
  const resetTimer = () => {
    setExerciseLength(INITIAL_EXERCISE);
    setBreakLength(INITIAL_BREAK);
    setRoundsNum(INITIAL_ROUNDS);
    setCurrentPhase(INITIAL_STATE);
  };

  // Returned JSX
  return (
    <TimerContext.Provider
      value={{
        exerciseLength,
        breakLength,
        roundsNum,
        currentPhase,
        setExerciseLength,
        setBreakLength,
        setRoundsNum,
        setCurrentPhase,
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
    setExerciseLength,
    setBreakLength,
    setRoundsNum,
    setCurrentPhase,
    resetTimer,
  } = context;

  // Return the values
  return {
    exerciseLength,
    breakLength,
    roundsNum,
    currentPhase,
    setExerciseLength,
    setBreakLength,
    setRoundsNum,
    setCurrentPhase,
    resetTimer,
  };
};
