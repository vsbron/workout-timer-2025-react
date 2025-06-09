import { useRef } from "react";
import { PauseIcon, PlayIcon, StopIcon } from "@heroicons/react/16/solid";

import { useTimerContext } from "@/context/TimerContext";

import Button from "@/ui/Button";
import Container from "@/ui/Container";

import Start from "@/assets/sounds/start.mp3";
import Pause from "@/assets/sounds/pause.mp3";
import Stop from "@/assets/sounds/beep.mp3";

function Playback() {
  // Getting the functions function from the Context API
  const { setIsPaused, stopTimer, startTimer } = useTimerContext();

  // Getting references to the audio files
  const startRef = useRef(new Audio(Start));
  const pauseRef = useRef(new Audio(Pause));
  const stopRef = useRef(new Audio(Stop));

  // Click handlers for buttons
  const playButtonHandler = () => {
    startTimer();
    startRef.current.currentTime = 0.2;
    startRef.current.play();
  };
  const pauseButtonHandler = () => {
    setIsPaused(true);
    pauseRef.current.currentTime = 0.2;
    pauseRef.current.play();
  };
  const stopButtonHandler = () => {
    stopTimer();
    stopRef.current.currentTime = 0;
    stopRef.current.play();
  };

  // Returned JSX
  return (
    <section>
      <Container>
        <div className="flex justify-center gap-8 sm:gap-10">
          <Button size="big" onClick={playButtonHandler}>
            <PlayIcon className="fill-inherit w-12 sm:w-15 h-12 sm:h-15" />
          </Button>
          <Button size="big" onClick={pauseButtonHandler}>
            <PauseIcon className="fill-inherit w-12 sm:w-15 h-12 sm:h-15" />
          </Button>
          <Button size="big" onClick={stopButtonHandler}>
            <StopIcon className="fill-inherit w-12 sm:w-15 h-12 sm:h-15" />
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default Playback;
