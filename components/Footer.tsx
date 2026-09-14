import { Camera, Globe2, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { siteInfo } from "../lib/data";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <img className="footer-logo" src="/images/logo.png" alt="Edith Kanzie Coaching" />
          <div className="footer-kicker">EK / COACHING STUDIO</div>
          <h3>Rechargez votre cœur, transformez votre esprit.</h3>
          <p>Coaching santé &amp; fitness axé sur la foi, pour ceux qui sont prêts à reconstruire une force durable, de l&apos;intérieur.</p>
          <div className="socials">
            <a className="fb" href="#" aria-label="Facebook"><Globe2 aria-hidden="true" /></a>
            <a className="ig" href="#" aria-label="Instagram"><Camera aria-hidden="true" /></a>
          </div>
        </div>
        <div className="footer-col">
          <h4>Liens rapides</h4>
          <ul>
            <li><Link href="/">Accueil</Link></li>
            <li><a href="/a-propos">À propos</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/temoignages">Témoignages</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <div className="row"><Mail aria-hidden="true" /><a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a></div>
          <div className="row"><MapPin aria-hidden="true" /><span>Consultations en ligne &amp; en Afrique</span></div>
        </div>
        <div className="footer-col">
          <h4>Restons connectés</h4>
          <p style={{ marginBottom: 10 }}>Rejoignez la communauté et recevez des conseils exclusifs pour votre transformation.</p>
          <div className="newsletter">
            <input type="email" placeholder="Votre email" />
            <button type="button">Rejoindre</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>{siteInfo.copyright}</span>
        <span><a href="#">Mentions légales</a> &nbsp;·&nbsp; <a href="#">Politique de confidentialité</a></span>
      </div>
    </footer>
  );
}
