import Button from "@/ui/Button";
import Container from "@/ui/Container";
import { PauseIcon, PlayIcon, StopIcon } from "@heroicons/react/16/solid";

function Controls() {
  // Returned JSX
  return (
    <section>
      <Container>
        <div className="flex justify-center gap-10">
          <Button>
            <PlayIcon className="fill-inherit w-15 h-15" />
          </Button>
          <Button>
            <PauseIcon className="fill-inherit w-15 h-15" />
          </Button>
          <Button>
            <StopIcon className="fill-inherit w-15 h-15" />
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default Controls;
