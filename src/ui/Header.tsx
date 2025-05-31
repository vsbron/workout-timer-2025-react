import Container from "@/ui/Container";

function Header() {
  // Returned JSX
  return (
    <header className="text-2xl py-16 bg-stone-100 dark:stone-950 text-stone-950 dark:text-stone-50 shadow">
      <Container>
        <h1 className="uppercase font-semibold text-6xl text-center">
          Workout Timer
        </h1>
      </Container>
    </header>
  );
}

export default Header;
