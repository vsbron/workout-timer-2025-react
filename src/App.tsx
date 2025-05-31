import { useEffect } from "react";
import { useThemeContext } from "@/context/ThemeContext";

import Timer from "@/components/Timer";
import Controls from "@/components/Controls";
import Options from "@/components/Options";
import Footer from "@/ui/Footer";
import Header from "@/ui/Header";
import Main from "@/ui/Main";
import { TimerProvider } from "./context/TimerContext";

function App() {
  // Getting the dark theme state from the context
  const { isDarkTheme } = useThemeContext();

  // useEffect that toggles the class on html's body every time state is changed
  useEffect(() => {
    document.body.classList.toggle("dark", isDarkTheme);
  }, [isDarkTheme]);

  // Returned JSX
  return (
    <>
      <Header />
      <Main>
        <TimerProvider>
          <Timer />
          <Controls />
          <Options />
        </TimerProvider>
      </Main>
      <Footer />
    </>
  );
}

export default App;
