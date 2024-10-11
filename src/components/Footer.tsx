"use client";
import { useTheme } from "@/state/ThemeContext";
import Image from "next/image";
import Link from "next/link";
import TikTokIcon from "./TikTokIcon";
import InstagramIcon from "./InstagramIcon";

export default function Footer() {
  const { theme } = useTheme();
  return (
    <footer className="p-4 sm:p-6 border-t border-black dark:border-white bg-secondary-50 dark:bg-primary-800">
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 flex justify-center md:justify-start">
            <Link href="#" className="flex items-center">
              <Image
                src={
                  theme === "dark"
                    ? "/images/logos/blanco.png"
                    : "/images/logos/negro.png"
                }
                className="mr-3"
                alt="Logo"
                width={60}
                height={60}
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Evan Styles
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center md:justify-between text-center md:text-left">
            <div>
              <h2 className="mb-6 text-md font-bold uppercase text-black dark:text-white">
                Información
              </h2>
              <ul className="">
                <li className="mb-4">
                  <Link
                    href="#servicios"
                    className="hover:underline text-black dark:text-white"
                  >
                    Servicios
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-md font-bold uppercase text-black dark:text-white">
                Siguenos
              </h2>
              <ul className=" ">
                <li className="mb-4">
                  <Link
                    href="https://www.tiktok.com/@evanstyless"
                    className="hover:underline text-black dark:text-white"
                    target="_blank"
                    aria-label="TikTok"
                  >
                    TikTok
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/evanstyless/"
                    className="hover:underline text-black dark:text-white"
                    target="_blank"
                    aria-label="Instagram"
                  >
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-md font-bold uppercase text-black dark:text-white">
                Contacto
              </h2>
              <ul className=" ">
                <li className="mb-4">
                  <Link
                    href="tel:+573507505606"
                    className="hover:underline text-black dark:text-white"
                  >
                    +57 3507505606
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:evanstyles@gmail.com"
                    className="hover:underline text-black dark:text-white"
                  >
                    evanstyles@gmail.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-black sm:mx-auto dark:border-white lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between sm:flex-row-reverse text-center">
          <div className="flex mb-3 space-x-6 justify-center sm:mt-0">
            <Link
              href="https://www.tiktok.com/@evanstyless"
              target="_blank"
              aria-label="TikTok"
            >
              <TikTokIcon />
            </Link>
            <Link
              href="https://www.instagram.com/evanstyless/"
              target="_blank"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </Link>
          </div>
          <span className="mb-3 sm:text-center text-black dark:text-white text-xs">
            © 2024
            <Link
              href="https://evanstyles.com"
              className="hover:underline text-black dark:text-white"
            >
              Evan Styles ™ {""}
            </Link>
            | Todos los derechos reservados | Desarrollado por
            <Link
              href="https://www.instagram.com/santi.salasb/"
              className="hover:underline font-bold text-black dark:text-white"
              target="_blank"
            >
              {" "}
              Santiago Salas.
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
