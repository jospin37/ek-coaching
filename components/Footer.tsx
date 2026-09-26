import { Camera, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { navItems, siteInfo } from "../lib/data";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap foot-top">
        <span className="foot-mono">E · K · COACHING</span>
        <h2>Revenir à soi, sans s&apos;effacer.</h2>
        <p>
          Un accompagnement clair, exigeant et bienveillant
          pour les femmes qui portent trop — et veulent enfin se choisir.
        </p>
      </div>

      <div className="wrap foot-main">
        <div className="foot-brand">
          <div className="foot-blogo">
            <span className="foot-blogo-ico">EK</span>
            <span>
              <strong>Edith Kanzie</strong>
              <span>Coaching</span>
            </span>
          </div>
          <p>
            Coaching leadership &amp; confiance.
            Accompagnement individuel et événements collectifs.
            Libreville et en ligne.
          </p>
        </div>

        <div className="foot-col">
          <h4>Explorer</h4>
          <nav>
            {navItems.slice(0, 4).map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="foot-col">
          <h4>Pages</h4>
          <nav>
            {navItems.slice(4).map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="foot-col">
          <h4>Premier pas</h4>
          <div className="foot-cinfo">
            <a href={`mailto:${siteInfo.email}`}>
              <Mail aria-hidden="true" size={16} />
              {siteInfo.email}
            </a>
            <p>
              <Phone aria-hidden="true" size={16} />
              {siteInfo.phone}
            </p>
            <p>
              <MapPin aria-hidden="true" size={16} />
              {siteInfo.location}
            </p>
            <p>
              <Camera aria-hidden="true" size={16} />
              {siteInfo.instagram}
            </p>
          </div>
          <div style={{ marginTop: 18 }}>
            <Link className="btn btn-g" href="/contact">
              Réserver un appel
            </Link>
          </div>
        </div>
      </div>

      <div className="wrap foot-bottom">
        <span>{siteInfo.copyright}</span>
        <span>Coaching · Gabon &amp; en ligne</span>
      </div>
    </footer>
  );
}
