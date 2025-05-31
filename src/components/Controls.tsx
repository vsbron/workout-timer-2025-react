import Button from "@/ui/Button";
import Container from "@/ui/Container";

function Controls() {
  // Returned JSX
  return (
    <section>
      <Container>
        <div className="flex justify-center gap-10">
          <Button>Start</Button>
          <Button>Pause</Button>
          <Button>Stop</Button>
          <Button>Reset</Button>
        </div>
      </Container>
    </section>
  );
}

export default Controls;
