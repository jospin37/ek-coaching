import { Heart, PenLine, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import CtaBand from "../../components/CtaBand";
import PageHero from "../../components/PageHero";

const timeline = [
  {
    year: "Avant",
    title: "S'effacer pour être aimée",
    text: "Petite fille introvertie, j'ai cru longtemps que l'amour se gagnait en se rendant utile, disponible, silencieuse.",
  },
  {
    year: "Le basculement",
    title: "Porter tout le monde",
    text: "Adulte, je disais oui quand mon corps criait non. Forte à l'extérieur, épuisée à l'intérieur.",
  },
  {
    year: "2021",
    title: "Se former, se choisir",
    text: "Certification en coaching professionnel, puis formation avancée John C. Maxwell. Le métier est devenu une mission.",
  },
  {
    year: "Aujourd'hui",
    title: "Accompagner sans te remplacer",
    text: "J'aide des femmes fortes et ambitieuses à se retrouver — pour qu'elles n'aient plus jamais besoin de moi.",
  },
];

export default function AProposPage() {
  return (
    <main>
      <PageHero
        variant="dark"
        kicker="Parcours &amp; mission"
        title="De la petite fille qui s'effaçait à la <em>femme</em> qui prend sa place."
        lead="Un chemin fait de remises en question, de rencontres et de renaissances. Aujourd'hui, je mets tout ce que j'ai appris au service de femmes comme toi."
      />

      <section className="blk">
        <div className="wrap story">
          <div className="story-port reveal">
            <div className="story-port-frame">
              <img src="/images/coach2.png" alt="Edith Kanzie" />
            </div>
            <div className="story-port-chip">
              <strong>Depuis 2021</strong>
              <span>Coach certifiée</span>
            </div>
          </div>

          <div className="story-copy reveal d1">
            <span className="kicker violet">Mon histoire</span>
            <h2>J&rsquo;étais cette femme qui faisait tout.</h2>
            <p className="lede">
              Forte. Disponible. Présente. Mais intérieurement… fatiguée, perdue, frustrée.
              J&rsquo;ai longtemps été cette petite fille introvertie qui pensait que pour être aimée
              et acceptée, il fallait s&rsquo;effacer et répondre aux attentes des autres.
            </p>
            <p className="lede">
              J&rsquo;ai grandi avec cette croyance. J&rsquo;ai construit ma vie d&rsquo;adulte sur ces fondations fragiles.
              Je disais « oui » quand mon corps hurlait « non ». Je portais les problèmes de tout le monde,
              pensant que c&rsquo;était ça, être une femme forte.
            </p>
            <div style={{
              margin: "28px 0",
              padding: "22px 26px",
              background: "var(--surface)",
              border: "1px solid var(--line)",
              borderLeft: "2px solid var(--gold-500)",
              borderRadius: "0 var(--r-md) var(--r-md) 0",
            }}>
              <p style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontStyle: "italic",
                fontSize: 16,
                color: "var(--violet-900)",
                lineHeight: 1.55,
              }}>
                Jusqu&rsquo;au jour où j&rsquo;ai compris&nbsp;: personne ne viendra changer ma vie à ma place.
                Si je continuais ainsi, j&rsquo;allais m&rsquo;éteindre à petit feu.
              </p>
            </div>
            <p className="lede">
              J&rsquo;ai alors entamé un profond travail de transformation personnelle.
              J&rsquo;ai dû réapprendre à m&rsquo;écouter, à poser mes limites,
              et surtout, à m&rsquo;accorder la même bienveillance que j&rsquo;offrais aux autres.
            </p>
            <p className="lede">
              Aujourd&rsquo;hui, j&rsquo;accompagne des femmes comme toi.
              Des femmes fortes et ambitieuses… mais fatiguées de souffrir.
              Ma mission est de t&rsquo;aider à te retrouver, t&rsquo;affirmer et devenir pleinement toi-même.
            </p>
          </div>
        </div>
      </section>

      <section className="blk" style={{ background: "var(--bg-alt)" }}>
        <div className="wrap">
          <div className="hdk left reveal">
            <span className="kicker">Parcours</span>
            <h2>Le chemin, en quatre temps</h2>
          </div>
          <ol className="tline">
            {timeline.map((item, i) => (
              <li className={`tline-item reveal d${Math.min(i + 1, 4)}`} key={item.year}>
                <span className="tline-dot" aria-hidden="true" />
                <span className="tline-y">{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="blk">
        <div className="wrap">
          <div className="hdk reveal">
            <span className="kicker">Ancrage</span>
            <h2>Mes qualifications</h2>
          </div>
          <div className="qs">
            {[
              { icon: Sparkles, title: "Expérience", text: "Coach certifiée en exercice depuis 2021." },
              { icon: PenLine, title: "Coaching professionnel", text: "Formation certifiante en coaching professionnel." },
              { icon: Heart, title: "John C. Maxwell", text: "Formation avancée en leadership et développement personnel." },
            ].map((card, i) => (
              <article className={`qc reveal d${i + 1}`} key={card.title}>
                <span className="qc-ico">
                  <card.icon aria-hidden="true" size={24} />
                </span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 52 }} className="reveal">
            <Link className="linkt" href="/services">
              Voir comment on travaille ensemble
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        title="Prête à te choisir, toi aussi ?"
        copy="Un premier échange pour voir si nous sommes faites pour travailler ensemble."
      />
    </main>
  );
}
