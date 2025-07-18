"use client";

import { useTypewriter, Cursor } from "react-simple-typewriter";
import Image from "next/image";
import Link from "next/link";
import { Github, Instagram, Linkedin } from "lucide-react";

export default function Hero() {
  const [text] = useTypewriter({
    words: ["Front-end Developer", "UI Designer", "IT Enthusiast"],
    loop: true,
    delaySpeed: 3000,
    typeSpeed: 30,
    deleteSpeed: 20,
  });

  return (
    <section className="min-h-[90vh] flex flex-col md:flex-row items-center justify-center gap-10 px-4 pt-16 md:py-12 text-white">
      {/* Foto */}
      <div className="relative w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden border-4 dark:border-gray-500 dark:shadow-neutral-600/80 border-black shadow-lg">
        <Image
          src="/rizal.png"
          alt="Foto Rizal"
          fill
          draggable="false"
          className="object-cover bg-gray-800"
          placeholder="blur"
          blurDataURL="/rizal-blur.png"
        />
      </div>

      {/* Teks */}
      <div className="text-black/80 dark:text-gray-400 text-center md:text-left space-y-4">
        <h1 className="  text-4xl md:text-5xl font-bold">
          Hi, I'm{" "}
          <span className="text-blue-500 dark:text-green-800">Rizal</span> 👋
        </h1>

        <p className="text-lg md:text-xl">
          I'm a{" "}
          <span className="text-blue-400 font-semibold dark:text-green-800">
            {text}
            <Cursor cursorStyle="|" />
          </span>
        </p>

        {/* Icons */}
        <div className="flex justify-center md:justify-start gap-4 text-white/80">
          <Link
            href="https://github.com/KienKionar"
            target="_blank"
            className="text-black dark:text-white/80 hover:text-slate-800 dark:hover:text-slate-800 transition-all duration-150"
          >
            <Github size={25} />
          </Link>
          <Link
            href="https://instagram.com/KienKionar"
            target="_blank"
            className="text-black dark:text-white/80 hover:text-pink-800 dark:hover:text-pink-800 transition-all duration-150"
          >
            <Instagram size={25} />
          </Link>

          <Link
            href="https://linkedin.com"
            target="_blank"
            className="text-black dark:text-white/80 hover:text-cyan-800 dark:hover:text-cyan-800 transition-all duration-150"
          >
            <Linkedin size={25} />
          </Link>
        </div>

        {/* Tombol */}
        <Link
          href="/about"
          className="inline-block mt-4 bg-black hover:bg-black/90 text-white dark:bg-white dark:text-black dark:hover:bg-white/80 font-medium px-3 py-2 rounded-lg transition-all duration-150"
        >
          About me
        </Link>
      </div>
    </section>
  );
}
