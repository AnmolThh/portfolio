import { useEffect, useState } from "react";

const Navbar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedTime = time.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const formattedDate = time.toLocaleDateString("en-IN", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="w-full h-18 text-secondary flex items-center justify-between px-[3%]">
      <div className="text-lg text-primary font-bold">
        <h1>AnmolTh</h1>
      </div>

      <div className="flex gap-5 md:gap-8 bg-accent px-5 md:px-10 py-2 rounded-full border border-accent2  items-center font-mono text-primary">
        <div className=" text-xs md:text-lg text-secondary">
          {formattedDate}
        </div>
        <div className=" text-xs md:text-lg">{formattedTime}</div>
      </div>

      <div className="hidden md:block"></div>
    </div>
  );
};

export default Navbar;
