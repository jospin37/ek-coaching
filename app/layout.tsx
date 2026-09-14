import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { Fraunces, Manrope, Playfair_Display, Montserrat, Dancing_Script } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const dancing = Dancing_Script({ subsets: ["latin"], variable: "--font-dancing" });

export const metadata: Metadata = {
  title: "EK Coaching",
  description: "Coaching stratégique pour clarifier vos priorités et développer votre impact.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${manrope.variable} ${playfair.variable} ${montserrat.variable} ${dancing.variable}`}>
      <body>
        {children}
        <a className="whatsapp-float" href="https://wa.me/241652819590" target="_blank" rel="noreferrer" aria-label="Écrire sur WhatsApp">
          <MessageCircle aria-hidden="true" />
        </a>
      </body>
    </html>
  );
}
