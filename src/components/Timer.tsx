import Container from "@/ui/Container";

function Timer() {
  // Returned JSX
  return (
    <section className="mb-6">
      <Container className="text-center">
        <div className="text-[17rem] leading-[1] font-bold tracking-wider px-30 pt-1.5 pb-7 border border-stone-950 inline-block">
          00:00
        </div>
      </Container>
    </section>
  );
}

export default Timer;
