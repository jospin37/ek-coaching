import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function TemoignagesPage() {
  return (
    <>
      <Navbar />

      <main className="light-page">
        <section className="page-hero">
          <div className="eyebrow"><span></span></div>
          <h1>Elles ont révélé leur valeur</h1>
          <p>Des histoires vraies de femmes qui ont décidé de ne plus s&apos;oublier. Leur transformation est la preuve que c&apos;est possible pour toi aussi.</p>
        </section>

        <section className="band inner-testimonials">
          <div className="section-label"><span>La preuve</span></div>
        <div className="testi-grid">
          <article className="testi-card">
            <div className="testi-top">
              <div className="testi-photo">
                <img src="/images/clara.webp" alt="Clara M." />
              </div>
              <h4>Clara M.</h4>
            </div>
            <div className="testi-quote">« J&apos;ai enfin compris ma valeur. L&apos;accompagnement d&apos;Edith a été un véritable déclic dans ma vie professionnelle et personnelle. Je ne m&apos;excuse plus d&apos;exister. »</div>
            <div className="testi-transform"><strong>Sa transformation :</strong> passée d&apos;une manager effacée qui n&apos;osait pas demander d&apos;augmentation à une leader respectée qui assume ses ambitions et pose ses limites.</div>
          </article>

          <article className="testi-card">
            <div className="testi-top">
              <div className="testi-photo">
                <img src="/images/jenny.webp" alt="Jenny K." />
              </div>
              <h4>Jenny K.</h4>
            </div>
            <div className="testi-quote">« Un voyage intérieur puissant. Je ne subis plus ma vie, je la choisis chaque jour avec sérénité. Merci Edith pour ta bienveillance et ta justesse. »</div>
            <div className="testi-transform"><strong>Sa transformation :</strong> a réussi à se libérer du poids des attentes familiales sans créer de rupture, trouver enfin son propre chemin.</div>
          </article>

          <article className="testi-card">
            <div className="testi-top">
              <div className="testi-photo">
                <img src="/images/Kysha.webp" alt="Kysha T." />
              </div>
              <h4>Kysha T.</h4>
            </div>
            <div className="testi-quote">« Je m&apos;affirme sans peur aujourd&apos;hui. J&apos;ai appris à prendre la place que je mérite. Le programme Reset 360 a littéralement changé ma perception de moi-même. »</div>
            <div className="testi-transform"><strong>Sa transformation :</strong> a vaincu son syndrome de l&apos;imposteur et a osé lancer son entreprise après des années d&apos;hésitation.</div>
          </article>

          <article className="testi-card">
            <div className="testi-top">
              <div className="testi-photo">
                <img src="/images/marie.webp" alt="Marie D." />
              </div>
              <h4>Marie D.</h4>
            </div>
            <div className="testi-quote">« Le programme m&apos;a permis de structurer mes pensées et de passer à l&apos;action. Je me sens enfin alignée avec mes valeurs profondes, libérée de la culpabilité. »</div>
            <div className="testi-transform"><strong>Sa transformation :</strong> a retrouvé un équilibre vie pro/vie perso sain après un burn-out, en apprenant à dire non.</div>
          </article>
        </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
