import { useTimerContext } from "@/context/TimerContext";

import Container from "@/ui/Container";

function Timer() {
  // Getting the state values from Context API
  const {
    exerciseLength,
    breakLength,
    roundsNum,
    currentPhase,
    isPaused,
    currentTime,
    currentRound,
  } = useTimerContext();

  // Separating current time to minutes and seconds
  const currentMins = Math.floor(currentTime / 60)
    .toString()
    .padStart(2, "0");
  const currentSecs = Math.floor(currentTime % 60)
    .toString()
    .padStart(2, "0");

  // Returned JSX
  return (
    <section className="mb-6">
      <Container className="text-center">
        <div className="mb-2 max-sm:text-2xl">
          Current status:{" "}
          <b>
            {currentPhase}
            {currentPhase !== "Idle" &&
              currentPhase !== "Get Ready" &&
              ` - Round ${currentRound}`}
            {currentPhase !== "Idle" && isPaused ? " (Paused)" : ""}
          </b>
        </div>
        <div className="text-[8rem] sm:text-[12rem] md:text-[17rem] leading-[1] font-bold tracking-wider px-8 sm:px-15 md:px-30 pt-1.5 pb-5 md:pb-7 border border-stone-950 inline-block mb-2">
          {currentMins}:{currentSecs}
        </div>
        <div className="flex max-sm:flex-col gap-1 sm:gap-8 justify-center text-2xl max-sm:mt-2">
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
      </Container>
    </section>
  );
}

export default Timer;
