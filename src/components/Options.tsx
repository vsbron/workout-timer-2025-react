import Button from "@/ui/Button";
import Container from "@/ui/Container";

function Options() {
  // Returned JSX
  return (
    <section>
      <Container>
        <div className="flex justify-center gap-10">
          <Button>Reset</Button>
          <Button>Settings</Button>
        </div>
      </Container>
    </section>
  );
}

export default Options;
