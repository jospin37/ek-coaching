import { Star } from "lucide-react";
import CtaBand from "../../components/CtaBand";
import PageHero from "../../components/PageHero";
import { testimonials } from "../../lib/data";

function Stars() {
  return (
    <div className="testi-stars" aria-hidden="true" style={{ marginBottom: 14 }}>
      <Star size={13} fill="currentColor" />
      <Star size={13} fill="currentColor" />
      <Star size={13} fill="currentColor" />
      <Star size={13} fill="currentColor" />
      <Star size={13} fill="currentColor" />
    </div>
  );
}

export default function TemoignagesPage() {
  return (
    <main>
      <PageHero
        variant="centered"
        kicker="Témoignages authentiques"
        title="Elles ont <em>osé</em> révéler leur valeur"
        lead="Des histoires vraies de femmes fortes, fatiguées de s'oublier, qui ont décidé de reprendre leur vie en main. Leurs mots, leurs transformations."
      />

      <section className="blk">
        <div className="wrap-md">
          <div className="stories">
            {testimonials.map((story, i) => (
              <article className="storyr reveal" key={story.name}>
                <div className="spic">
                  <img src={story.img} alt="" />
                </div>
                <div>
                  <span className="prog-num">Témoignage · 0{i + 1}</span>
                  <Stars />
                  <div className="sq-mark" aria-hidden="true">“</div>
                  <p className="sq">{story.quote}</p>
                  <div className="sxform">
                    <small>Sa transformation</small>
                    <p>{story.transform}</p>
                  </div>
                  <div className="smeta">
                    <strong>{story.name}</strong>
                    <span>{story.focus}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Prête à écrire la tienne ?"
        copy="Un appel de 30 minutes pour voir si cet accompagnement est fait pour toi."
      />
    </main>
  );
}
