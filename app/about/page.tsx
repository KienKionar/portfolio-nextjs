"use client";

import TechMarquee from "@/components/organisms/TechMarquee";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="w-full max-w-5xl mx-auto px-6 py-20 text-center text-zinc-800 dark:text-zinc-100"
    >
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
      <div className="w-16 h-1 bg-blue-500 mx-auto mb-8 rounded-full" />

      {/* Deskripsi */}
      <p className="text-base md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
        Halo! Saya <span className="font-semibold text-blue-500">Rizal</span>,
        seorang Front-end Developer yang passionate dalam membangun UI yang
        bersih, responsif, dan menyenangkan. Saya senang bekerja dengan
        teknologi modern seperti <span className="font-medium">React</span>,{" "}
        <span className="font-medium">Tailwind CSS</span>, dan{" "}
        <span className="font-medium">Next.js</span> untuk membuat website yang
        cepat dan elegan.
      </p>

      <p className="mt-4 text-base md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
        Saat ini, saya fokus mengembangkan portofolio dan terbuka untuk
        kolaborasi atau freelance project. Yuk connect kalau kamu punya ide
        keren atau ingin kerja bareng! 🚀
      </p>

      {/* What I Can */}
      <div className="mt-16">
        <h3 className="text-2xl md:text-3xl font-semibold mb-6">What I Can</h3>

        {/* Marquee */}
        <TechMarquee />
      </div>
    </section>
  );
}
