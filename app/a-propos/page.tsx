import { Heart, PenLine, Sparkles } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function AProposPage() {
  return (
    <>
      <Navbar />

      <main className="about-page">
        <section className="about-hero">
          <div className="about-hero__shade"></div>
          <div className="about-hero__content">
            <span className="about-eyebrow">À propos</span>
            <h1>Mon Histoire</h1>
            <p>De la petite fille introvertie à la femme qui prend sa place.</p>
          </div>
        </section>

        <section className="about-story">
          <div className="about-story__copy">
            <div className="about-story__mark" aria-hidden="true">EK</div>
            <h2>J’étais cette femme qui faisait tout.</h2>
            <p>Forte. Disponible. Présente. Mais intérieurement... fatiguée, perdue, frustrée. J&apos;ai longtemps été cette petite fille introvertie qui pensait que pour être aimée et acceptée, il fallait s&apos;effacer et répondre aux attentes des autres.</p>
            <p>J&apos;ai grandi avec cette croyance. J&apos;ai construit ma vie d&apos;adulte sur ces fondations fragiles. Je disais « oui » quand mon corps hurlait « non ». Je portais les problèmes de tout le monde, pensant que c&apos;était ça, être une femme forte.</p>
            <div className="about-story__quote">
              Jusqu&apos;au jour où j&apos;ai compris : Personne ne viendra changer ma vie à ma place. Si je continuais ainsi, j&apos;allais m&apos;éteindre à petit feu.
            </div>
            <p>J&apos;ai alors entamé un profond travail de transformation personnelle. J&apos;ai dû réapprendre à m&apos;écouter, à poser mes limites, et surtout, à m&apos;accorder la même bienveillance que j&apos;offrais aux autres. J&apos;ai investi en moi, je me suis formée, j&apos;ai déconstruit mes croyances limitantes.</p>
            <p>Aujourd&apos;hui, j&apos;accompagne des femmes comme toi. Des femmes fortes et ambitieuses... mais fatiguées de souffrir. Ma mission est de t&apos;aider à te retrouver, t&apos;affirmer et devenir pleinement toi-même.</p>
          </div>
        </section>

        <section className="about-qualifications">
          <h2>Mes Qualifications</h2>
          <div className="quali-grid reveal-stagger">
            <div className="quali-card">
              <div className="ico"><Sparkles aria-hidden="true" /></div>
              <h4>Expérience</h4>
              <p>Coach certifiée en exercice depuis 2021.</p>
            </div>
            <div className="quali-card">
              <div className="ico"><PenLine aria-hidden="true" /></div>
              <h4>Vous-vision</h4>
              <p>Formation certifiante en coaching professionnel.</p>
            </div>
            <div className="quali-card">
              <div className="ico"><Heart aria-hidden="true" /></div>
              <h4>John C Maxwell</h4>
              <p>Formation avancée en Leadership et développement personnel.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
