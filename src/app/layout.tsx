import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import { ThemeProvider } from "../state/ThemeContext";
import Footer from "../components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta name="author" content="Evan Styles" />
        <meta
          name="keywords"
          content="barbería, asesoría de imagen, Pasto, Evan Styles"
        />
        <meta
          property="og:title"
          content="Evan Styles | Asesoría de imagen y barbería en Pasto"
        />
        <meta
          property="og:description"
          content="Evan Styles | La mejor asesoría de imagen y barbería en Pasto"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://evanstyles.com" />
        <title>Evan Styles | Asesoría de imagen y barbería en Pasto</title>
        <meta
          name="description"
          content="Evan Styles | La mejor asesoría de imagen y barbería en Pasto"
        />
      </head>
      <body
        className={`${inter.className} bg-white dark:bg-secondary-900 text-black dark:text-white`}
      >
        <ThemeProvider>
          <Header />
          <div className="mt-16"></div>
          <WhatsAppButton phoneNumber="573507505606" />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
