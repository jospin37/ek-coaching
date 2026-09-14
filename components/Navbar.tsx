"use client";

import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { navItems, siteInfo } from "../lib/data";
import BookingModal from "./BookingModal";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <header>
        <Link className="logo" href="/" aria-label="Accueil">
          <img className="logo-img" src="/images/logo.png" alt="Edith Kanzie Coaching" />
          <span className="logo-wordmark">EK <small>COACHING</small></span>
        </Link>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        <nav className={menuOpen ? "is-open" : ""}>
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={pathname === item.href ? "active" : ""} aria-current={pathname === item.href ? "page" : undefined} onClick={() => setMenuOpen(false)}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-right">
          <a className="header-phone" href={`tel:${siteInfo.phone.replace(/[^\d+]/g, "")}`}>{siteInfo.phone}</a>
          <button className="btn btn-solid" type="button" onClick={() => setBookingOpen(true)}>Réserver un appel</button>
        </div>
      </header>
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
