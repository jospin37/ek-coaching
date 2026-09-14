import { Check, Crown, Sparkles } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="light-page">
        <section className="page-hero">
          <div className="eyebrow"><span></span></div>
          <h1>Tu n&apos;as pas besoin de rester seule.</h1>
          <p>Choisis l&apos;accompagnement qui correspond le mieux à ton besoin actuel. Du coaching individuel profond aux événements collectifs ressourçants.</p>
        </section>

      <section className="programs-grid inner-programs">
        <div className="services-section-title"><h2>Coaching individuel</h2></div>
        <article className="icon-card">
          <div className="ico"><Sparkles aria-hidden="true" /></div>
          <h3>21 Jours Boost</h3>
          <p>Un accompagnement court et intense pour créer un déclic, idéal si tu te sens bloquée et que tu as besoin d&apos;une impulsion rapide pour te remettre en mouvement.</p>
          <ul className="checklist">
            <li><span className="tick"><Check aria-hidden="true" /></span>Bilan de ta situation actuelle</li>
            <li><span className="tick"><Check aria-hidden="true" /></span>Identification de tes blocages immédiats</li>
            <li><span className="tick"><Check aria-hidden="true" /></span>Plan d&apos;action sur 3 semaines</li>
            <li><span className="tick"><Check aria-hidden="true" /></span>Suivi quotidien via WhatsApp</li>
          </ul>
          <a className="btn btn-solid" href="/contact">Réserver mon Boost</a>
        </article>

        <article className="icon-card">
          <div className="ico"><Crown aria-hidden="true" /></div>
          <h3>Reset 360</h3>
          <p>Mon programme signature sur 3 mois. Un travail en profondeur pour déconstruire tes croyances limitantes, guérir tes blessures et rebâtir une confiance inébranlable.</p>
          <ul className="checklist">
            <li><span className="tick"><Check aria-hidden="true" /></span>Séances bi-mensuelles d&apos;1h30</li>
            <li><span className="tick"><Check aria-hidden="true" /></span>Travail sur l&apos;enfant intérieur et les traumas</li>
            <li><span className="tick"><Check aria-hidden="true" /></span>Outils concrets d&apos;affirmation de soi</li>
            <li><span className="tick"><Check aria-hidden="true" /></span>Accès direct entre les séances</li>
          </ul>
          <a className="btn btn-solid" href="/contact">Postuler pour Reset 360</a>
        </article>
      </section>

        <section className="band band-dark2 inner-detail">
        <div className="section-head left">
          <h2>Programmes &amp; Événements</h2>
        </div>
        <div className="program-row">
          <div className="p-img">
            <div className="hero-img-bg"><img src="/images/photo_yoga.avif" alt="Clara M." />
            </div></div>
          <div className="p-copy">
            <h3>Yoga-brunch des audacieuses</h3>
            <p>Une matinée dédiée à la reconnexion au corps et à l&apos;esprit. Allier le mouvement doux du yoga à des échanges puissants autour d&apos;un brunch gourmand.</p>
            <div className="tag-row">
              <span className="tag">Trimestriel</span>
              <span className="tag">Gabon</span>
            </div>
            <a className="btn btn-solid" href="/reset-event">Rejoindre le programme</a>
          </div>
        </div>

        <div className="program-row">
            <div className="p-img"><div className="hero-img-bg"><img src="/images/photo_randonnée.avif" alt="Clara M." />
            </div></div>
          <div className="p-copy">
            <h3>Randonnées des audacieuses</h3>
            <p>Sortir de son cadre habituel, se dépasser physiquement en douceur et créer des liens authentiques en pleine nature. La marche comme outil de libération.</p>
            <div className="tag-row">
              <span className="tag">Trimestriel</span>
              <span className="tag">Gabon</span>
            </div>
            <a className="btn btn-solid" href="/contact">Rejoindre le programme</a>
          </div>
        </div>

        <div className="program-row">
          <div className="p-img">
            <img src="/images/photo_atelier.avif" alt="Atelier EK Motiv'action" />
          </div>
          <div className="p-copy">
            <h3>Ateliers EK Motiv&apos;action</h3>
            <p>Des ateliers thématiques en petit groupe pour travailler sur des sujets précis : syndrome de l&apos;imposteur, poser ses limites, prise de parole.</p>
            <div className="tag-row">
              <span className="tag">Collectif</span>
              <span className="tag">Gabon</span>
            </div>
            <a className="btn btn-solid" href="/contact">Rejoindre le programme</a>
          </div>
        </div>
        </section>

        <section className="services-promise">
          <div className="services-promise-mark">EK</div>
          <div>
            <h2>Votre transformation entre de bonnes mains</h2>
            <p>Un accompagnement par une experte qui comprend vos défis. En tant que coach certifiée, je mets à votre disposition des outils concrets et une écoute bienveillante pour vous aider à révéler votre plein potentiel.</p>
            <p className="services-quote">« Mon objectif : que vous n&apos;ayez plus jamais besoin de moi. »</p>
          </div>
        </section>

        <section className="services-final-cta">
          <h2>Tu ne sais pas par où commencer ?</h2>
          <p>Faisons le point ensemble lors d&apos;un appel découverte gratuit. C&apos;est sans engagement et cela te permettra d&apos;y voir plus clair.</p>
          <a className="btn btn-solid" href="/contact">Réserver mon appel diagnostic</a>
        </section>
      </main>

      <Footer />
    </>
  );
}
