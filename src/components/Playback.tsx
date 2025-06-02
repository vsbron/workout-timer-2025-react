import { useRef } from "react";
import { PauseIcon, PlayIcon, StopIcon } from "@heroicons/react/16/solid";

import Button from "@/ui/Button";
import Container from "@/ui/Container";

import Start from "@/assets/sounds/start.mp3";
import Pause from "@/assets/sounds/pause.mp3";
import Stop from "@/assets/sounds/beep.mp3";

function Playback() {
  // Getting references to the audio files
  const startRef = useRef(new Audio(Start));
  const pauseRef = useRef(new Audio(Pause));
  const stopRef = useRef(new Audio(Stop));

  // Click handlers for buttons (temp)
  const playSound = () => {
    startRef.current.currentTime = 0.2;
    startRef.current.play();
  };
  const pauseSound = () => {
    pauseRef.current.currentTime = 0.2;
    pauseRef.current.play();
  };
  const stopSound = () => {
    stopRef.current.currentTime = 0;
    stopRef.current.play();
  };

  // Returned JSX
  return (
    <section>
      <Container className="flex flex-col gap-2">
        <div className="flex justify-center gap-10">
          <Button size="big" onClick={playSound}>
            <PlayIcon className="fill-inherit w-15 h-15" />
          </Button>
          <Button size="big" onClick={pauseSound}>
            <PauseIcon className="fill-inherit w-15 h-15" />
          </Button>
          <Button size="big" onClick={stopSound}>
            <StopIcon className="fill-inherit w-15 h-15" />
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default Playback;
