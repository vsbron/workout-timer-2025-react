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
          className="relative rounded-full border-1 border-stone-900 dark:border-purple-900 w-28 mx-auto h-14 cursor-pointer bg-stone-200 dark:bg-purple-600"
          onClick={toggleTheme}
        >
          <span
            className={`absolute top-1.5 bottom-1.5 w-11 bg-stone-50 p-1.5 fill-indigo-600 dark:fill-purple-600 rounded-full flex justify-center items-center ${
              isDarkTheme ? "right-1.5 left-auto" : "left-1.5 right-auto"
            }`}
          >
            {isDarkTheme ? (
              <MoonIcon className="fill-inherit w-15 h-15" />
            ) : (
              <SunIcon className="fill-inherit w-15 h-15" />
            )}
          </span>
        </div>
      </Container>
    </section>
  );
}

export default ThemeTrigger;
