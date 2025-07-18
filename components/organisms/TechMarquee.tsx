"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useAnimationFrame,
} from "framer-motion";
import Image from "next/image";

const techIcons = [
  "/icons/bootstrap.svg",
  "/icons/php.svg",
  "/icons/reactjs.svg",
  "/icons/nextjs.svg",
  "/icons/tailwind.svg",
  "/icons/typescript.svg",
  "/icons/javascript.svg",
  "/icons/git.svg",
  "/icons/nodejs.svg",
  "/icons/mysql.svg",
];

export default function TechMarquee() {
  const baseX = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isHover, setIsHover] = useState(false);

  // Hitung total lebar satu set icon
  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth / 2);
    }
  }, []);

  // Frame-by-frame update scroll
  useAnimationFrame((t, delta) => {
    const velocity = isHover ? 1 : 1.3;
    const moveBy = velocity * (delta / 16.67);
    const currentX = baseX.get();

    // Kalau udah lewat separuh konten, reset ke awal posisi
    if (Math.abs(currentX) >= containerWidth) {
      baseX.set(currentX + containerWidth);
    } else {
      baseX.set(currentX - moveBy);
    }
  });

  const x = useTransform(baseX, (v) => `${v}px`);

  return (
    <div
      className="overflow-hidden w-full py-6 mt-10 select-none"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <motion.div
        className="flex gap-10 w-max"
        style={{ x }}
        ref={containerRef}
      >
        {[...techIcons, ...techIcons].map((src, i) => (
          <Image
            key={i}
            src={src}
            alt="tech-icon"
            width={100}
            height={100}
            draggable="false"
            className="opacity-80 grayscale hover:grayscale-0 hover:opacity-100 cursor-pointer transition-all duration-150"
          />
        ))}
      </motion.div>
    </div>
  );
}
