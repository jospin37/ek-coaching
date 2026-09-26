import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import CtaBand from "../../components/CtaBand";
import PageHero from "../../components/PageHero";
import { collectivePrograms, offers } from "../../lib/data";

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        variant="split"
        kicker="Services &amp; accompagnements"
        title="Tu n'as pas besoin de rester <em>seule</em>."
        lead="Choisis l'accompagnement qui correspond à ton besoin actuel — du coaching individuel sur mesure aux événements collectifs bienveillants."
        image="/images/photo_atelier.avif"
        imageAlt="Atelier EK Coaching"
      />

      <section className="blk">
        <div className="wrap">
          <div className="hdk left reveal">
            <span className="kicker">Coaching individuel</span>
            <h2>Deux formats, une même exigence</h2>
          </div>
          <div className="offer-grid">
            {offers.map((offer) => (
              <article
                className={offer.featured ? "offer feat reveal d2" : "offer reveal"}
                key={offer.slug}
              >
                {offer.featured && <span className="offer-flag">Recommandé</span>}
                <span className="offer-tag">{offer.tag}</span>
                <h3>{offer.title}</h3>
                <p>{offer.summary}</p>
                <ul className="offer-list">
                  {offer.points.map((point) => (
                    <li key={point}>
                      <Check size={12} aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
                <Link
                  className={offer.featured ? "btn btn-g" : "btn btn-p"}
                  href={offer.href}
                >
                  {offer.cta}
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="blk" style={{ background: "var(--bg-alt)" }}>
        <div className="wrap">
          <div className="hdk reveal">
            <span className="kicker">Collectif</span>
            <h2>Programmes &amp; événements</h2>
            <p>
              Des moments en petit groupe pour se retrouver, partager et grandir ensemble,
              dans la bienveillance et la profondeur.
            </p>
          </div>
          <div className="programs">
            {collectivePrograms.map((prog, i) => (
              <article className="prog reveal" key={prog.title}>
                <div className="prog-media">
                  <div className="prog-img">
                    <img src={prog.img} alt={prog.title} />
                  </div>
                </div>
                <div className="prog-copy">
                  <span className="prog-num">0{i + 1}</span>
                  <h3>{prog.title}</h3>
                  <p>{prog.copy}</p>
                  <div className="prog-tags">
                    {prog.tags.map((tag) => (
                      <span className="prog-tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                  <Link
                    className={i === 0 ? "btn btn-p" : "btn btn-o"}
                    href={prog.href}
                  >
                    Rejoindre le programme
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="blk">
        <div className="wrap">
          <div className="promise reveal">
            <div className="promise-monogram">EK</div>
            <div>
              <h3>Votre transformation entre de bonnes mains</h3>
              <p style={{ marginTop: 12 }}>
                Un accompagnement par une experte qui comprend vos défis.
                En tant que coach certifiée, je mets à votre disposition des outils concrets
                et une écoute bienveillante.
              </p>
              <p>
                « Mon objectif : que vous n&rsquo;ayez plus jamais besoin de moi. »
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Tu ne sais pas par où commencer ?"
        copy="Faisons le point ensemble lors d'un appel découverte gratuit. Sans engagement."
        label="Réserver mon appel diagnostic"
      />
    </main>
  );
}
