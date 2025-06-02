import { useTimerContext } from "@/context/TimerContext";
import Container from "@/ui/Container";

function Timer() {
  // Getting the state values from Context API
  const { exerciseLength, breakLength, roundsNum } = useTimerContext();

  // Returned JSX
  return (
    <section className="mb-6">
      <Container className="text-center">
        <div className="flex gap-8 justify-center mb-2 text-2xl">
          <div>
            Exercise: <b>{exerciseLength} seconds</b>
          </div>
          <div>
            Break: <b>{breakLength} seconds</b>
          </div>
          <div>
            Rounds: <b>{roundsNum}</b>
          </div>
        </div>
        <div className="text-[17rem] leading-[1] font-bold tracking-wider px-30 pt-1.5 pb-7 border border-stone-950 inline-block">
          00:00
        </div>
      </Container>
    </section>
  );
}

export default Timer;
