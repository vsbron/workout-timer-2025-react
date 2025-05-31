import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

// Interface for the context
interface ITimerContext {
  exerciseLength: number;
  breakLength: number;
  setExerciseLength: Dispatch<SetStateAction<number>>;
  setBreakLength: Dispatch<SetStateAction<number>>;
  resetTimer: () => void;
}

// Initial values
const INITIAL_EXERCISE = 30;
const INITIAL_BREAK = 15;

// Create Context with initial timer state
const TimerContext = createContext<ITimerContext | undefined>(undefined);

// TimerProvider component that will wrap the timer & controls
export const TimerProvider = ({ children }: { children: ReactNode }) => {
  // Setting the states for the timer
  const [exerciseLength, setExerciseLength] =
    useState<number>(INITIAL_EXERCISE);
  const [breakLength, setBreakLength] = useState<number>(INITIAL_BREAK);

  // Reset timer function that initiates all the times
  const resetTimer = () => {
    setExerciseLength(INITIAL_EXERCISE);
    setBreakLength(INITIAL_BREAK);
  };

  // Returned JSX
  return (
    <TimerContext.Provider
      value={{
        exerciseLength,
        breakLength,
        setExerciseLength,
        setBreakLength,
        resetTimer,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

// Custom hook to use the App context
export const useTimerContext = (): ITimerContext => {
  // Getting the data from the context
  const context = useContext(TimerContext);

  // Error if tried to use outside of Context scope
  if (!context) {
    throw new Error("useTimerContext must be used within an AppProvider");
  }

  // Getting the values out of context
  const {
    exerciseLength,
    breakLength,
    setExerciseLength,
    setBreakLength,
    resetTimer,
  } = context;

  // Return the values
  return {
    exerciseLength,
    breakLength,
    setExerciseLength,
    setBreakLength,
    resetTimer,
  };
};
