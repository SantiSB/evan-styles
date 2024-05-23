'use client'
import Image from "next/image";
import ThemeToggleButton from "./ThemToggleButton";
import { useTheme } from "@/state/ThemeContext";
import Link from "next/link";

const links = [
  { href: "#servicios", text: "Servicios" },
];

export default function Header() {
  const { theme } = useTheme();
  return (
    <header className="fixed top-0 left-0 z-10 flex justify-between items-center py-5 w-full px-5 lg:px-32 xl:px-40 bg-secondary-50 dark:bg-primary-800 shadow-md">
      <Link href="#">
        <Image
          width={40}
          height={40}
          alt="Evan Styles - Logo"
          src={theme === "dark" ? "/images/logos/blanco.png" : "/images/logos/negro.png"}
        ></Image>
      </Link>
      <nav className="flex flex-row gap-x-4 text-sm sm:text-base">
        {links.map((link) => (
          <Link
            key={link.href}
            className="text-secondary-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 focus:text-primary-600 dark:focus:text-primary-400 transition-colors font-semibold"
            href={link.href}
          >
            {link.text}
          </Link>
        ))}
      </nav>
      <ThemeToggleButton />
    </header>
  );
}
