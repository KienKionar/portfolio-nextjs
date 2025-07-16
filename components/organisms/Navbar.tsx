"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // sync with localStorage
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const isCurrentlyDark = document.documentElement.classList.contains("dark");
    if (isCurrentlyDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[90%] max-w-5xl rounded-xl bg-white/40 dark:bg-white/30 backdrop-blur-md shadow-md px-4 py-2 flex items-center justify-between">
      {/* Logo */}
      <Link
        className="text-black/80 dark:text-white/80 hover:dark:text-white transition-all duration-300 "
        href="/"
      >
        <div className="text-xl font-bold tracking-wide">Rizal</div>
      </Link>

      {/* Navigation links */}
      <ul className="flex gap-6 font-medium items-center">
        <li>
          <Link
            className="text-black/80 dark:text-white/80 hover:dark:text-white transition-all duration-300 "
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="text-black/80 dark:text-white/80 hover:dark:text-white transition-all duration-300 "
            href="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="text-black/80 dark:text-white/80 hover:dark:text-white transition-all duration-300 "
            href="#projects"
          >
            Project
          </Link>
        </li>
        <li>
          <Link
            className="text-black/80 dark:text-white/80 hover:dark:text-white transition-all duration-300 "
            href="#contact"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Dark Mode Toggle */}
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full cursor-pointer hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
        aria-label="Toggle Theme"
      >
        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>
    </nav>
  );
}
