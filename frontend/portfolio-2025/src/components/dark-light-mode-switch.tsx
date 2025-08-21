import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";
import { applyTheme, getTheme, toggleTheme } from "@/helper/theme-helper";

export const DarkLightModeSwitch = () => {
  const [theme, setTheme] = useState<"light" | "dark">(getTheme());
  const [showTooltip, setShowTooltip] = useState(false);
  let timeout: ReturnType<typeof setTimeout>;

  const handleMouseEnter = () => {
    timeout = setTimeout(() => setShowTooltip(true), 1000);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeout);
    setShowTooltip(false);
  };

  const handleClick = () => {
    const newTheme = toggleTheme();
    setTheme(newTheme);
    setShowTooltip(false);
  };

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return (
    <Button
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative flex h-max w-max items-center border-0 shadow-none hover:bg-gray-500/30"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <MdOutlineLightMode className="!h-6 !w-6 text-white" />
      ) : (
        <MdOutlineNightlight className="!h-6 !w-6 text-black" />
      )}
      {showTooltip && (
        <span className="absolute top-full right-0 z-10 mt-1 hidden bg-gray-500/50 p-1 text-sm text-white group-hover:block">
          Toggle theme
        </span>
      )}
    </Button>
  );
};
