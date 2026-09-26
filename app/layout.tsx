import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { Fraunces, Figtree } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import { siteInfo } from "../lib/data";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  style: ["normal", "italic"],
});

const sans = Figtree({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ek-coaching.com"),
  title: {
    default: "EK Coaching — Edith Kanzie",
    template: "%s · EK Coaching",
  },
  description: "Coaching leadership et confiance pour les femmes qui veulent cesser de s'effacer.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        url: "/android-chrome-192x192.png",
      },
    ],
  },
  openGraph: {
    title: "EK Coaching — Edith Kanzie",
    description: "Coaching leadership et confiance pour les femmes qui veulent cesser de s'effacer.",
    type: "website",
    locale: "fr_FR",
    siteName: "EK Coaching",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${display.variable} ${sans.variable}`}>
      <body className={sans.className}>
        <a className="skip" href="#contenu">
          Aller au contenu
        </a>
        <ScrollReveal />
        <Navbar />
        <div id="contenu">{children}</div>
        <Footer />
        <a
          className="wa"
          href={siteInfo.whatsapp}
          target="_blank"
          rel="noreferrer"
          aria-label="Écrire sur WhatsApp"
        >
          <MessageCircle aria-hidden="true" size={22} />
        </a>
      </body>
    </html>
  );
}
