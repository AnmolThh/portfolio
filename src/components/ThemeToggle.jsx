import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(false);
  return (
    <>
      <div
        className="col-span-1 row-span-1 h-full flex items-center justify-center"
        onClick={() => setTheme(!theme)}
      >
        {theme ? (
          <FiSun className="text-9xl text-primary hover:rotate-90" />
        ) : (
          <WiMoonAltWaningCrescent4 className="text-9xl text-primary hover:rotate-180" />
        )}
      </div>
    </>
  );
};

export default ThemeToggle;
