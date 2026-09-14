import { Check, Crown, Sparkles } from "lucide-react";
import Navbar from "./Navbar";

export default function CoachingLandingPage() {
  return (
    <>
      <Navbar />
      <main className="site light-page home-redesign">
      <section className="hero final-hero">
        <div className="hero-copy">
          <div className="hero-ghost" aria-hidden="true">CONFIANCE</div>
          <div className="hero-kicker"><span className="hero-dot" />Coaching Leadership &amp; Confiance</div>
          <h1><span>Deviens la femme</span><span>qui ne s&apos;<em>efface</em> plus.</span></h1>
          <p>
            Tu gères, tu assumes, tu avances. Mais au fond, tu te sens parfois invisible. Il est temps de te choisir, enfin.
          </p>
          <div className="hero-btns">
            <a className="btn btn-solid" href="/contact">Réserver un appel gratuit</a>
            <span className="hero-microcopy">30 min · sans engagement</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="orbit" aria-hidden="true" />
          <div className="monogram">
            <img src="/images/coach.png" alt="Edith Kanzie" />
          </div>
          <div className="badge-float badge-one"><strong>150+</strong><small>femmes accompagnées</small></div>
          <div className="badge-float badge-two"><strong>2021</strong><small>coach certifiée depuis</small></div>
        </div>
      </section>

      <div className="scroll-cue"><span className="scroll-stick" />Découvrir</div>

      <section className="split home-section">
        <div className="split-copy">
          <div className="section-label"><span></span></div>
          <h2>La réalité de la femme forte</h2>
          <p>En tant que femme, et particulièrement dans nos cultures africaines, on nous apprend très tôt à être le pilier. Mais à quel prix ?</p>
          <div className="callout">Ce que tu ressens n&apos;est pas un défaut. C&apos;est un signal qu&apos;il est temps de changer.</div>
        </div>
        <div className="glass-card reality-card">
          <ul className="checklist">
            <li><span className="tick"><Check aria-hidden="true" /></span>Vous portez les attentes de votre famille et de votre communauté sur vos épaules.</li>
            <li><span className="tick"><Check aria-hidden="true" /></span>Vous avez réussi professionnellement, mais vous vous sentez vide à l&apos;intérieur.</li>
            <li><span className="tick"><Check aria-hidden="true" /></span>Vous n&apos;arrivez pas à dire « non » sans culpabiliser.</li>
            <li><span className="tick"><Check aria-hidden="true" /></span>Vous doutez de votre légitimité, malgré vos compétences évidentes.</li>
          </ul>
        </div>
      </section>

      <section className="mission reveal">
        <div className="mission-blob" aria-hidden="true" />
        <h2>Je ne suis pas là pour te <em>motiver</em>. Je suis là pour te <em>transformer</em>.</h2>
        <p>Mon approche va au-delà des simples conseils. Nous allons travailler en profondeur pour déconstruire ce qui te freine et bâtir des fondations solides.</p>
        <a className="btn btn-solid" href="/contact">Commencer ma transformation</a>
      </section>

      <section className="coach-row home-section reveal">
        <div className="coach-visual">
          <div className="coach-ring" aria-hidden="true" />
          <div className="coach-portrait"><img src="/images/coach.png" alt="Edith Kanzie" /></div>
          <div className="coach-seal">EST.<br />2021</div>
        </div>
        <div className="coach-copy">
          <span className="section-kicker">Votre coach</span>
          <h2>Rencontrez Edith Kanzie</h2>
          <p>J&apos;ai été cette femme forte, disponible et toujours joviale. Mais intérieurement, j&apos;étais épuisée, perdue, avec l&apos;impression de ne jamais être assez comprise.</p>
          <p>Aujourd&apos;hui, j&apos;accompagne des femmes fortes et ambitieuses, mais fatiguées de s&apos;oublier. Ma mission est de vous aider à vous retrouver et à devenir pleinement vous-même.</p>
          <a className="btn btn-solid" href="/contact">Découvrir mon histoire</a>
        </div>
      </section>

      <section className="band home-section" id="accompagnements">
        <div className="section-head">
          <div className="section-label"><span></span></div>
          <h2>Mes Accompagnements</h2>
          <p>Des programmes clés en main pour retrouver une vraie transformation de vie.</p>
        </div>
        <div className="programs-grid">
          <article className="icon-card">
            <div className="ico"><Sparkles aria-hidden="true" /></div>
            <h3>21 Jours Boost</h3>
            <p>Un programme intense pour vous remettre en forme et ouvrir des habitudes durables.</p>
            <ul className="checklist">
              <li><span className="tick"><Check aria-hidden="true" /></span>Reset énergétique</li>
              <li><span className="tick"><Check aria-hidden="true" /></span>Routine claire</li>
            </ul>
            <a className="btn btn-solid" href="/contact">Réserver</a>
          </article>
          <article className="icon-card">
            <div className="ico"><Crown aria-hidden="true" /></div>
            <h3>Reset 360</h3>
            <p>Un accompagnement complet pour transformer votre énergie, votre corps et votre façon de vivre.</p>
            <ul className="checklist">
              <li><span className="tick"><Check aria-hidden="true" /></span>Plan de transformation</li>
              <li><span className="tick"><Check aria-hidden="true" /></span>Besoins prioritaires</li>
            </ul>
            <a className="btn btn-solid" href="/contact">Réserver</a>
          </article>
        </div>
      </section>

      <section className="band band-dark2">
        <div className="section-head">
          <h2>Elles ont franchi le pas</h2>
          <p>Découvrez les histoires de celles qui ont osé reprendre leur vie en main.</p>
        </div>
        <div className="testi-grid">
          <article className="testi-card">
            <div className="testi-top">
              <div className="testi-photo">
                <img src="/images/clara.M.jpg" alt="Clara M." />
              </div>
              <h4>Clara M.</h4>
            </div>
            <div className="testi-quote">« J&apos;ai enfin compris ma valeur. L&apos;accompagnement m&apos;a donné la force de faire un vrai changement. »</div>
            <div className="testi-transform"><strong>Sa transformation :</strong> discipline, énergie, confiance et paix intérieure.</div>
          </article>
          <article className="testi-card">
            <div className="testi-top">
              <div className="testi-photo">
                <img src="/images/jenny m.jpg" alt="Jenny K." />
              </div>
              <h4>Jenny K.</h4>
            </div>
            <div className="testi-quote">« Mon équilibre est revenu. Je suis plus claire, plus calme et plus alignée dans mes choix. »</div>
            <div className="testi-transform"><strong>Sa transformation :</strong> clarté, confiance, équilibre et routine durable.</div>
          </article>
        </div>
      </section>

      <section className="band band-accent">
        <h2>Tu veux continuer comme ça ? Non, n’est-ce pas ?</h2>
        <p>Le premier pas est souvent le plus difficile. Faisons-le ensemble.</p>
        <a className="btn btn-dark" href="/contact">Réserver mon appel diagnostique gratuit</a>
      </section>
      </main>
    </>
  );
}
