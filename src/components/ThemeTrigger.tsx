import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";

import { useThemeContext } from "@/context/ThemeContext";

import Container from "@/ui/Container";

function ThemeTrigger() {
  // Getting the theme flag and the setter from the custom hook
  const { isDarkTheme, toggleTheme } = useThemeContext();

  // Returned JSX
  return (
    <section>
      <Container className="text-center">
        <div
          className="relative rounded-full border-1 border-stone-400/50 dark:border-purple-900 w-20 sm:w-28 mx-auto h-10 sm:h-14 cursor-pointer bg-stone-200 dark:bg-purple-600"
          onClick={toggleTheme}
        >
          <span
            className={`absolute top-0  bottom-0 w-10 sm:w-14 bg-stone-50 p-1 sm:p-1.5 fill-indigo-600 dark:fill-purple-600 rounded-full flex justify-center items-center ${
              isDarkTheme ? "right-0  left-auto" : "left-0  right-auto"
            }`}
          >
            {isDarkTheme ? (
              <MoonIcon className="fill-inherit w-7 sm:w-9 h-7 sm:h-9" />
            ) : (
              <SunIcon className="fill-inherit w-7 sm:w-9 h-7 sm:h-9" />
            )}
          </span>
        </div>
      </Container>
    </section>
  );
}

export default ThemeTrigger;
