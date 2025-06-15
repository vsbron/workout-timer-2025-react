import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

// Interface for the context
interface IThemeContext {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

// Create Context with undefined
const ThemeContext = createContext<IThemeContext | undefined>(undefined);

// ThemeProvider component that will wrap the app
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Setting the state for the color theme (auto detected based on system settings and looking for data in the local storage)
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(() => {
    const saved = localStorage.getItem("workout-timer-theme");
    if (saved !== null) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Persist theme to localStorage on change
  useEffect(() => {
    localStorage.setItem("workout-timer-theme", isDarkTheme ? "dark" : "light");
  }, [isDarkTheme]);

  // Toggle color theme handler
  const toggleTheme = () => {
    setIsDarkTheme((prevMode) => !prevMode);
  };

  // Returned JSX
  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the Context API
export const useThemeContext = (): IThemeContext => {
  // Getting the data from the context
  const context = useContext(ThemeContext);

  // Error if tried to use outside of Context scope
  if (!context) {
    throw new Error("useThemeContext must be used within an AppProvider");
  }

  // Getting the values out of context
  const { isDarkTheme, toggleTheme } = context;

  // Return the values
  return { isDarkTheme, toggleTheme };
};
