import React, { useState } from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import evolvsDark from "/evolvsDark.png";
import evolvsLight from "/evolvsLight.png";

const Header = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  return (
    <nav className="py-5 transition-all top-0 left-0 z-50 duration-500 w-full bg-transperant">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex justify-between items-center">
          <a className="flex items-center">
            <img
              src={darkMode ? evolvsLight : evolvsDark}
              alt="Evolvs Logo"
              width={150}
              height={40}
              className="object-contain"
            ></img>
          </a>
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
