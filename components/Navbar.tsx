"use client";

import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navItems } from "../lib/data";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const goToContact = () => {
    setMenuOpen(false);
    router.push("/contact");
  };

  const cls = [
    "topbar",
    isHome ? "home" : "",
    solid || menuOpen ? "solid" : "",
  ].filter(Boolean).join(" ");

  return (
    <header className={cls}>
      <div className="topbar-inner">
        <Link className="brand" href="/" aria-label="Accueil EK Coaching">
          <Image
            className="brand-mark"
            src="/images/logo_Kandzi.webp"
            alt=""
            width={1600}
            height={995}
            preload
          />
        </Link>

        <nav className="pillnav" aria-label="Navigation principale">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className={pathname === item.href ? "active" : ""}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="nav-end">
          <button
            className="nav-burger"
            type="button"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X aria-hidden="true" size={18} /> : <Menu aria-hidden="true" size={18} />}
          </button>
        </div>
      </div>

      <div className={`mnav ${menuOpen ? "open" : ""}`}>
        <nav aria-label="Navigation mobile">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className={pathname === item.href ? "active" : ""}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mnav-cta">
          <button
            className="btn btn-g"
            type="button"
            onClick={goToContact}
          >
            Me contacter
          </button>
        </div>
      </div>
    </header>
  );
}
