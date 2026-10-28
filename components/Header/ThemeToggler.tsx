import { useTheme } from "next-themes";
import Image from "next/image";

const ThemeToggler = ({ className = "" }: { className?: string }) => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      aria-label="Switch light or dark theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={`flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full text-ink dark:text-white hover:bg-ink/[0.06] dark:hover:bg-white/10 ease-in-out duration-200 ${className}`}
    >
      <Image
        src="/images/icon/icon-moon.svg"
        alt=""
        width={19}
        height={19}
        className="dark:hidden"
      />

      <Image
        src="/images/icon/icon-sun.svg"
        alt=""
        width={20}
        height={20}
        className="hidden dark:block"
      />
    </button>
  );
};

export default ThemeToggler;
