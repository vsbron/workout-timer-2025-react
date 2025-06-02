import { useState } from "react";

import { useTimerContext } from "@/context/TimerContext";

import Button from "@/ui/Button";
import Container from "@/ui/Container";

function Options() {
  // Getting the reset function from the Context API
  const { resetTimer } = useTimerContext();

  // Setting the state for the options bar visibility and creating toggle function
  const [areOptionsOpen, setAreOptionsOpen] = useState<boolean>(false);
  const toggleOptions = () => {
    setAreOptionsOpen((areOpen) => !areOpen);
  };

  // Returned JSX
  return (
    <section>
      <Container>
        <div className="flex justify-center gap-10">
          <Button onClick={resetTimer}>Reset</Button>
          <Button onClick={toggleOptions}>Settings</Button>
        </div>
        {areOptionsOpen && <div>Timer options</div>}
      </Container>
    </section>
  );
}

export default Options;
