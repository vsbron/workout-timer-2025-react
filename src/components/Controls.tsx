import { useState } from "react";

import { useTimerContext } from "@/context/TimerContext";

import Settings from "@/components/Settings";
import Button from "@/ui/Button";
import Container from "@/ui/Container";

function Controls() {
  // Getting the reset function from the Context API
  const { resetTimer, setIsPaused } = useTimerContext();

  // Setting the state for the settings bar visibility
  const [areSettingsOpen, setAreSettingsOpen] = useState<boolean>(false);

  // Click handler for opening and closing setting (pauses the timer in both scenarios)
  const settingsHandler = () => {
    setAreSettingsOpen((areOpen) => !areOpen);
    setIsPaused(true);
  };

  // Returned JSX
  return (
    <section>
      <Container>
        <div className="flex justify-center gap-10">
          <Button onClick={resetTimer}>Reset</Button>
          <Button onClick={settingsHandler}>Settings</Button>
        </div>
        {areSettingsOpen && <Settings settingsClose={settingsHandler} />}
      </Container>
    </section>
  );
}

export default Controls;
