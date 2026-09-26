import { ArrowRight, Check, Star, Clock, Users, Award, Sparkles } from "lucide-react";
import Link from "next/link";
import CtaBand from "./CtaBand";
import FaqList from "./FaqList";
import { offers, testimonials, tickerItems } from "../lib/data";

const pains = [
  {
    num: "01",
    text: "Vous portez les attentes de votre famille et de votre communauté sur vos épaules.",
  },
  {
    num: "02",
    text: "Vous avez réussi professionnellement, mais vous vous sentez vide à l'intérieur.",
  },
  {
    num: "03",
    text: "Vous n'arrivez pas à dire « non » sans culpabiliser.",
  },
  {
    num: "04",
    text: "Vous doutez de votre légitimité, malgré vos compétences évidentes.",
  },
];

const steps = [
  {
    n: "01",
    title: "Clarifier",
    text: "Un premier échange pour nommer ce qui pèse vraiment — pas ce que tu « devrais » ressentir.",
  },
  {
    n: "02",
    title: "Dénouer",
    text: "On travaille les croyances, les habitudes et les blessures qui te font t'effacer.",
  },
  {
    n: "03",
    title: "Ancrer",
    text: "Des rituels concrets, des décisions assumées, une présence qui tient dans le réel.",
  },
];

function Stars() {
  return (
    <div className="testi-stars" aria-hidden="true">
      <Star size={13} fill="currentColor" />
      <Star size={13} fill="currentColor" />
      <Star size={13} fill="currentColor" />
      <Star size={13} fill="currentColor" />
      <Star size={13} fill="currentColor" />
    </div>
  );
}

export default function CoachingLandingPage() {
  return (
    <main>
      {/* HERO — Asymmetric editorial */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-side">
            <span className="hero-vlabel">EK · Coaching depuis 2021</span>

            <div className="rise">
              <span className="hero-tag">Leadership · Confiance · Présence</span>
            </div>

            <h1 className="rise-d1">
              <span>Deviens la femme</span>
              <span>qui ne s&apos;<em>efface</em> plus.</span>
            </h1>

            <p className="hero-lede rise-d2">
              Tu gères, tu assumes, tu avances. Mais au fond, tu te sens parfois invisible.
              Il est temps de te choisir, enfin.
            </p>

            <div className="hero-cta rise-d3">
              <Link className="btn btn-g" href="/contact">
                Réserver un appel gratuit
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link className="btn btn-w" href="/services">
                Voir les accompagnements
              </Link>
            </div>

            <div className="hero-proof rise-d4">
              <div className="hero-proof-item">
                <span className="hero-proof-num">150+</span>
                <span>femmes accompagnées</span>
              </div>
              <div className="hero-proof-item">
                <Clock size={14} aria-hidden="true" />
                <span>30 min · sans engagement</span>
              </div>
              <div className="hero-proof-item">
                <Stars />
              </div>
            </div>
          </div>

          <div className="hero-visual rise-slow">
            <div className="hero-portrait float-slow">
              <img src="/images/coach.png" alt="Edith Kanzie, coach certifiée" />
            </div>

            <div className="hero-hud-top float-slower">
              <small>Impact</small>
              <strong>150+</strong>
              <span>transformations</span>
            </div>

            <div className="hero-hud-mid float-slow">
              <span className="hero-hud-mid-ico">
                <Award size={16} />
              </span>
              <span>
                <strong>Edith Kanzie</strong>
                <span>Coach certifiée · depuis 2021</span>
              </span>
            </div>

            <div className="hero-hud-cert float-slower">
              <span className="hero-hud-cert-ico">
                <Sparkles size={12} />
              </span>
              <span>
                <strong>Certifiée</strong>
                <span> · John C. Maxwell</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* RULER — Elegant keyword marquee */}
      <div className="ruler" aria-hidden="true">
        <div className="ruler-track">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
            <span className="ruler-item" key={`${item}-${i}`}>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* REALITY — Editorial asymmetric with bento cards */}
      <section className="blk">
        <div className="wrap reality">
          <div className="reality-copy reveal">
            <span className="kicker">Le constat</span>
            <h2>
              La réalité de la <em>femme forte</em> que personne ne nomme.
            </h2>
            <p className="lede">
              En tant que femme, et particulièrement dans nos cultures africaines,
              on nous apprend très tôt à être le pilier. Mais à quel prix&nbsp;?
            </p>
            <blockquote className="reality-pull">
              <p>
                Ce que tu ressens n&apos;est pas un défaut.
                C&apos;est un signal qu&apos;il est temps de changer.
              </p>
            </blockquote>
          </div>

          <div className="reality-grid">
            <article className="reality-card n1 reveal">
              <div>
                <span className="reality-num">{pains[0].num}</span>
                <p>{pains[0].text}</p>
              </div>
              <div className="reality-big">
                <strong>70%</strong>
                <span>des femmes leaders se sentent seules</span>
              </div>
            </article>

            <article className="reality-card reveal d1">
              <span className="reality-num">{pains[1].num}</span>
              <p>{pains[1].text}</p>
            </article>

            <article className="reality-card reveal d2">
              <span className="reality-num">{pains[2].num}</span>
              <p>{pains[2].text}</p>
            </article>

            <article className="reality-card reveal d3">
              <span className="reality-num">{pains[3].num}</span>
              <p>{pains[3].text}</p>
            </article>
          </div>
        </div>
      </section>

      {/* MANIFESTO — Dark full-bleed asymmetric */}
      <section className="manifesto">
        <div className="wrap manifesto-grid">
          <div className="manifesto-text reveal">
            <div className="manifesto-line">Manifeste EK</div>
            <h2 style={{ marginTop: 20 }}>
              Je ne suis pas là pour te <em>motiver</em>.
              <br />
              Je suis là pour te <em>transformer</em>.
            </h2>
            <p>
              Mon approche va au-delà des simples conseils.
              Nous travaillons en profondeur pour déconstruire ce qui te freine
              et bâtir des fondations solides qui tiennent dans la durée.
            </p>
            <Link className="btn btn-wg" href="/contact">
              Commencer ma transformation
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="manifesto-stats reveal d2">
            <div className="manifesto-stat">
              <strong>3</strong>
              <span>années d&apos;accompagnement certifié</span>
            </div>
            <div className="manifesto-stat">
              <strong>1:1</strong>
              <span>suivi individuel bienveillant</span>
            </div>
            <div className="manifesto-stat">
              <strong>98%</strong>
              <span>de satisfaction client</span>
            </div>
            <div className="manifesto-stat">
              <strong>∞</strong>
              <span>décisions prises, vies changées</span>
            </div>
          </div>
        </div>
      </section>

      {/* STORY — Asymmetric portrait with offset chip */}
      <section className="blk">
        <div className="wrap story">
          <div className="story-port reveal">
            <div className="story-port-frame">
              <img src="/images/coach2.png" alt="Portrait d&rsquo;Edith Kanzie" />
            </div>
            <div className="story-port-chip">
              <strong>Libreville · en ligne</strong>
              <span>En exercice depuis 2021</span>
            </div>
          </div>

          <div className="story-copy reveal d1">
            <span className="kicker violet">Votre coach</span>
            <h2>Rencontrez Edith Kanzie</h2>
            <p className="lede">
              J&apos;ai été cette femme forte, disponible et toujours joviale.
              Mais intérieurement, j&apos;étais épuisée, perdue,
              avec l&apos;impression de ne jamais être assez comprise.
            </p>
            <p className="lede">
              Aujourd&apos;hui, j&apos;accompagne des femmes fortes et ambitieuses,
              mais fatiguées de s&apos;oublier. Ma mission&nbsp;:
              vous aider à vous retrouver et à devenir pleinement vous-même.
            </p>
            <Link className="linkt" href="/a-propos">
              Découvrir mon histoire
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* METHOD — Horizontal step line */}
      <section className="blk method">
        <div className="wrap">
          <div className="hdk left reveal">
            <span className="kicker">Méthode</span>
            <h2>Trois mouvements, une même exigence</h2>
            <p>
              Une progression simple et exigeante,
              pensée pour que chaque étape tienne dans la vie réelle.
            </p>
          </div>

          <div className="method-line" aria-hidden="true" />

          <div className="method-steps">
            {steps.map((step, i) => (
              <article className={`mstep reveal d${i + 1}`} key={step.n}>
                <span className="mstep-num">{step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OFFERS — Two cards with very different treatment */}
      <section className="blk" id="accompagnements">
        <div className="wrap">
          <div className="hdk reveal">
            <span className="kicker">Offres</span>
            <h2>Mes accompagnements</h2>
            <p>
              Deux formats clairs, selon l&apos;intensité dont tu as besoin aujourd&apos;hui.
            </p>
          </div>

          <div className="offer-grid">
            {offers.map((offer, i) => (
              <article
                className={offer.featured ? "offer feat reveal d2" : "offer reveal"}
                key={offer.slug}
              >
                {offer.featured && <span className="offer-flag">Signature</span>}
                <span className="offer-tag">{offer.tag}</span>
                <h3>{offer.title}</h3>
                <p>{offer.summary}</p>
                <ul className="offer-list">
                  {offer.points.slice(0, 4).map((point) => (
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

      {/* TESTIMONIALS — Asymmetric big + small */}
      <section className="blk" style={{ background: "var(--bg-alt)" }}>
        <div className="wrap">
          <div className="hdk reveal">
            <span className="kicker">Témoignages</span>
            <h2>Elles ont franchi le pas</h2>
            <p>Des femmes qui ont osé reprendre leur vie en main.</p>
          </div>

          <div className="testi-block">
            <article className="testi-main reveal">
              <span className="testi-mark" aria-hidden="true">“</span>
              <div className="testi-main-body">
                <Stars />
                <q>{testimonials[0].quote}</q>
              </div>
              <div className="testi-main-foot">
                <div className="testi-author">
                  <div className="testi-avatar">
                    <img src={testimonials[0].img} alt="" />
                  </div>
                  <span>
                    <strong>{testimonials[0].name}</strong>
                    <span>{testimonials[0].focus}</span>
                  </span>
                </div>
                <div className="testi-transform">
                  <small>Transformation</small>
                  <p>{testimonials[0].transform}</p>
                </div>
              </div>
            </article>

            <div className="testi-side">
              {testimonials.slice(1, 3).map((t, i) => (
                <article className={`testi-card reveal d${i + 1}`} key={t.name}>
                  <Stars />
                  <q>{t.quote}</q>
                  <strong>{t.name}</strong>
                  <span>{t.focus}</span>
                </article>
              ))}
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: 56 }} className="reveal">
            <Link className="linkt" href="/temoignages">
              Lire tous les témoignages
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ — Numbered left column + accordion right */}
      <section className="blk">
        <div className="wrap faq-grid">
          <div className="faq-side reveal">
            <span className="kicker">Questions</span>
            <h2>Ce que les femmes me demandent souvent</h2>
            <p className="lede">
              Si tu hésites encore, commence par l&apos;appel.
              Le reste se clarifie ensuite.
            </p>
            <div className="faq-note">
              <strong>À retenir</strong>
              <p>
                L&apos;appel découverte est gratuit, sans engagement.
                C&apos;est juste 30 minutes pour faire le point — et voir si on se sent bien ensemble.
              </p>
            </div>
          </div>
          <div className="reveal d1">
            <FaqList />
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <CtaBand
        title="Tu veux continuer comme ça ?"
        copy="Le premier pas est souvent le plus difficile. Faisons-le ensemble."
        label="Réserver mon appel diagnostique"
      />
    </main>
  );
}
