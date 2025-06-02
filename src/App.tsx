import { useEffect } from "react";

import { TimerProvider } from "@/context/TimerContext";
import { useThemeContext } from "@/context/ThemeContext";

import Header from "@/ui/Header";
import Main from "@/ui/Main";
import Footer from "@/ui/Footer";
import Timer from "@/components/Timer";
import Controls from "@/components/Controls";
import Playback from "@/components/Playback";

function App() {
  // Getting the dark theme state from the context
  const { isDarkTheme } = useThemeContext();

  // useEffect that toggles the class on html's body every time state is changed
  useEffect(() => {
    document.body.classList.toggle("dark", isDarkTheme);
  }, [isDarkTheme]);

  // Returned JSX
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-[100vh]">
      <Header />
      <Main>
        <TimerProvider>
          <Timer />
          <Playback />
          <Controls />
        </TimerProvider>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
