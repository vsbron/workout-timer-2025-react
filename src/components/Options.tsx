import { useTimerContext } from "@/context/TimerContext";

import Button from "@/ui/Button";
import Container from "@/ui/Container";

function Options() {
  // Getting the reset function from the Context API
  const { resetTimer } = useTimerContext();

  // Returned JSX
  return (
    <section>
      <Container>
        <div className="flex justify-center gap-10">
          <Button onClick={resetTimer}>Reset</Button>
          <Button>Settings</Button>
        </div>
      </Container>
    </section>
  );
}

export default Options;
