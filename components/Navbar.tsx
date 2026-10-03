"use client";

import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { navItems } from "../lib/data";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
      <header>
        <Link className="logo" href="/" aria-label="Accueil">
          <span className="logo-wordmark">Edith Kanzie <small>COACHING</small></span>
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
      </header>
  );
}
