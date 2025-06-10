import { useThemeContext } from "@/context/ThemeContext";

import Container from "@/ui/Container";

import Logo from "@/assets/images/logo.svg";
import LogoWhite from "@/assets/images/logo-white.svg";

function Header() {
  // Getting the theme state from the context
  const { isDarkTheme } = useThemeContext();

  // Returned JSX
  return (
    <header className="text-2xl py-6 sm:py-10 bg-stone-100 dark:bg-stone-900 text-stone-950 shadow">
      <Container>
        <img
          src={isDarkTheme ? LogoWhite : Logo}
          className="max-w-full w-[22rem] sm:w-[28rem] md:w-[35rem] mx-auto"
          title="Workout Timer"
        />
      </Container>
    </header>
  );
}

export default Header;
