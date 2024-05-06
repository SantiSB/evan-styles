import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import { ThemeProvider } from "../state/ThemeContext";
import Footer from "../components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Evan Styles | Asesoría de imagen y barbería en Pasto",
  description: "Evan Styles | La mejor asesoría de imagen y barbería en Pasto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <ThemeProvider>
        <body
          className={`${inter.className} bg-white dark:bg-secondary-900 text-black dark:text-white`}
        >
          <Header />
          <div className="mt-16"></div>
          <WhatsAppButton phoneNumber="573507505606" />
          {children}
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
