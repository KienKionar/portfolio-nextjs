"use client";

import { projects } from "@/data";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20  text-zinc-800 dark:text-zinc-100">
      <h2 className="text-3xl md:text-4xl font-bold mb-2">Projects</h2>
      <div className="w-16 h-1 bg-blue-500 dark:bg-green-800 mb-8 rounded-full" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/10 dark:bg-white/5 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
          >
            <div className="relative w-full h-48">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-xl"
              />
            </div>

            <div className="p-4 flex flex-col gap-3 flex-1">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tech.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-neutral-200/50 px-2 py-1 rounded-md text-black/80 dark:bg-neutral-600/50 dark:text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex gap-2 pt-3">
                <Link
                  href={project.visitUrl}
                  className="text-sm px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-all"
                  target="_blank"
                >
                  Visit
                </Link>
                <Link
                  href={project.repoUrl}
                  className="text-sm px-3 py-1 border border-neutral-300/80 dark:border-white/30 dark:hover:bg-white/10 rounded-md transition-all dark:text-white"
                  target="_blank"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
