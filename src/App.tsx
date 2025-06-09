import { useEffect } from "react";

import { TimerProvider } from "@/context/TimerContext";
import { useThemeContext } from "@/context/ThemeContext";

import Controls from "@/components/Controls";
import Playback from "@/components/Playback";
import Timer from "@/components/Timer";
import ThemeTrigger from "@/components/ThemeTrigger";
import Modal from "@/components/modal/ModalParent";
import Footer from "@/ui/Footer";
import Header from "@/ui/Header";
import Main from "@/ui/Main";

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
          <Modal>
            <Controls />
          </Modal>
        </TimerProvider>
        <ThemeTrigger />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
