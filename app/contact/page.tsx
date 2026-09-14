import { Check, Globe2, Mail, Phone } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="contact-page">
        <section className="contact-hero">
          <h1>Et si tu prenais enfin du temps pour toi ?</h1>
          <p>Que ce soit pour réserver un appel, poser une question sur un programme,
            ou simplement échanger, tu es au bon endroit.</p>
        </section>

        <section className="contact-wrap">
          <aside className="contact-sidebar">
            <div className="side-card profile">
              <div className="ph-wrap">
                <img src="/images/coach.png" alt="Edith Kanzie" />
              </div>
              <div className="profile-copy">
                <h4>Edith Kanzie</h4>
                <p>Coach certifiée Leadership &amp; Confiance. J’aide les femmes à transformer leurs épreuves en force pour révéler leur plein potentiel et retrouver confiance en elles.</p>
              </div>
            </div>

            <div className="side-card discover">
              <h3>Appel Découverte</h3>
              <p>Cet appel gratuit de 30 minutes est fait pour toi si :</p>
              <ul className="checklist">
                <li><span className="tick"><Check aria-hidden="true" /></span>Tu te sens bloquée dans ta vie ou perso</li>
                <li><span className="tick"><Check aria-hidden="true" /></span>Tu veux évoluer mais tu ne sais pas comment</li>
                <li><span className="tick"><Check aria-hidden="true" /></span>Tu veux comprendre ce qui te freine réellement</li>
              </ul>
              <a className="btn btn-solid" href="#message">Je veux un diagnostic gratuit</a>
            </div>

            <div className="side-card info">
              <h3>Informations</h3>
              <div className="row"><span className="icn"><Mail aria-hidden="true" /></span><a href="mailto:contact@ekcoaching.com">contact@ekcoaching.com</a></div>
              <div className="row"><span className="icn"><Phone aria-hidden="true" /></span><a href="tel:+241652819590">+241 652 819 590</a></div>
              <div className="row"><span className="icn"><Globe2 aria-hidden="true" /></span><span>Consultations en ligne &amp; Afrique</span></div>
            </div>

            <div className="side-card message-prompt">
              <h3>M&apos;envoyer un message</h3>
              <p>Une question spécifique sur un programme ? Écris-moi directement via le formulaire.</p>
              <a className="btn btn-solid" href="#message">Accéder au formulaire</a>
            </div>
          </aside>

          <ContactForm />
        </section>
      </main>

      <Footer />
    </>
  );
}
