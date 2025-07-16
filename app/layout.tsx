import type { Metadata } from "next";
import { Lato, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";

const fontSans = Lato({
  variable: "--font-sans",
  weight: "300",
  subsets: ["latin"],
});

const fontMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Muhamad Afrizal",
  description: "Website resmi portfolio Muhamad Afrizal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.variable} ${fontMono.variable} antialiased transition-all duration-300 `}
      >
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
