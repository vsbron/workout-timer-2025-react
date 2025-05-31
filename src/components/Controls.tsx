import { PauseIcon, PlayIcon, StopIcon } from "@heroicons/react/16/solid";

import Button from "@/ui/Button";
import Container from "@/ui/Container";

function Controls() {
  // Returned JSX
  return (
    <section>
      <Container className="flex flex-col gap-2">
        <div className="flex justify-center gap-10">
          <Button big={true}>
            <PlayIcon className="fill-inherit w-15 h-15" />
          </Button>
          <Button big={true}>
            <PauseIcon className="fill-inherit w-15 h-15" />
          </Button>
          <Button big={true}>
            <StopIcon className="fill-inherit w-15 h-15" />
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default Controls;
