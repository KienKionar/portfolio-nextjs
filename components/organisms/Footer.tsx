"use client";

import { ArrowUp } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState(0);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-white text-black dark:bg-neutral-900 dark:text-white px-6 py-16 mt-20">
      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="absolute animate-bounce cursor-pointer top-6 right-6 flex items-center gap-2 bg-black text-white dark:bg-white dark:text-black p-2 rounded-full hover:scale-105 transition"
      >
        <ArrowUp size={16} />
      </button>

      {/* Content */}
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        <span className="text-sm">&copy; {year}</span>

        <div>
          <p className="font-sans uppercase text-sm tracking-wide text-black/70 dark:text-white/70">
            Have a project in mind?
          </p>
          <h2 className="font-mono text-6xl md:text-8xl font-bold text-black/10 dark:text-white/10">
            LET’S TALK
          </h2>
        </div>

        <div className="flex gap-4 flex-wrap">
          {["GitHub", "LinkedIn", "Twitter"].map((platform) => (
            <Link
              key={platform}
              href="#"
              className="px-5 py-2 border border-black dark:border-white rounded-full text-sm font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
            >
              {platform.toUpperCase()}
            </Link>
          ))}
        </div>
        <div className="text-right text-xs text-black/60 dark:text-white/60 space-y-1">
          <p>
            Design by{" "}
            <span className="underline underline-offset-2">
              Muhamad Afrizal
            </span>
          </p>
          <p>
            Development by{" "}
            <span className="underline underline-offset-2">
              Muhamad Afrizal
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
