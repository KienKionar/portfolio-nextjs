// data projects

export interface projects {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string;
  visitUrl: string;
  repoUrl: string;
}

export const projects = [
  {
    id: 1,
    title: "E-Wallet App",
    description:
      "Aplikasi dompet digital dengan fitur top up, transfer, dan riwayat transaksi.",
    image:
      "https://images.unsplash.com/photo-1481487196290-c152efe083f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D",
    tech: ["Node.js", "MySQL", "Tailwind", "Express.js"],
    visitUrl: "https://example.com",
    repoUrl: "https://github.com/yourrepo/ewallet",
  },
  {
    id: 2,
    title: "Perpustakaan Digital",
    description:
      "Sistem manajemen perpustakaan berbasis web untuk siswa dan admin.",
    image:
      "https://images.unsplash.com/photo-1481487196290-c152efe083f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D",
    tech: ["PHP", "MySQL", "Tailwind"],
    visitUrl: "https://example.com",
    repoUrl: "https://github.com/yourrepo/library",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "Website portofolio pribadi dengan animasi interaktif dan dark mode.",
    image:
      "https://images.unsplash.com/photo-1481487196290-c152efe083f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    visitUrl: "https://example.com",
    repoUrl: "https://github.com/yourrepo/portfolio",
  },
];
