import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ResetEventPage() {
  return (
    <>
      <Navbar />

      <main className="light-page">
        <section className="page-hero">
          <div className="eyebrow"><span></span></div>
          <h1>RESET - Reviens à toi et à ton pouvoir</h1>
          <p>Une expérience immersive pour ralentir, te reconnecter et reprendre le contrôle de ta vie.</p>
        </section>

      <section className="band inner-event">
        <div className="section-head">
          <h2>Tu te reconnais ?</h2>
          <div className="rule"></div>
          <p>Tu cours toute la journée. Entre le travail, la famille et les responsabilités, tu as l&apos;impression de ne jamais t&apos;arrêter.</p>
          <p>Tu donnes tout aux autres, mais à la fin de la journée, tu te sens vidée, fatiguée et parfois même perdue.</p>
          <p>Tu sais que tu as du potentiel, tu sais que tu mérites mieux, mais tu n&apos;arrives plus à trouver l&apos;énergie ou la clarté pour avancer vers ce qui compte vraiment pour toi.</p>
        </div>

          <div className="event-message">
            <h3>Pourquoi tu dois t&apos;arrêter maintenant</h3>
            <p>Continuer sans clarté mène inévitablement à l&apos;épuisement. Faire une pause n&apos;est pas un luxe, c&apos;est une décision consciente pour revenir à soi. Il est urgent de prendre du temps pour toi, sans pression, juste pour te retrouver.</p>
          </div>

          <div className="section-head event-intro">
            <h2>RESET : l&apos;expérience créée pour toi</h2>
            <p>Un espace structuré, intentionnel et sécurisant conçu exclusivement pour les femmes. Un moment pour te reconnecter, réfléchir et te réaligner avec une véritable focalisation sur ta transformation personnelle.</p>
          </div>

        <div className="exp-grid">
          <article className="exp-card">
            <div className="x-img"><div className="hero-img-bg">
            <img src="/images/yoga.avif" alt="Clara M." />
            </div></div>
            <div className="x-body">
              <h4>Yoga &amp; introspection</h4>
              <p>Une séance de yoga douce, accessible à toutes, suivie d&apos;un moment guidé d&apos;introspection profonde.</p>
            </div>
          </article>
          <article className="exp-card">
            <div className="x-img"><div className="hero-img-bg">
                <img src="/images/foret.webp" alt="Clara M." />
            </div></div>
            <div className="x-body">
              <h4>Partage authentique</h4>
              <p>Des échanges vrais et bienveillants entre femmes qui partagent les mêmes réalités et aspirations.</p>
            </div>
          </article>
          <article className="exp-card">
            <div className="x-img"><div className="hero-img-bg">
                <img src="/images/food.webp" alt="Clara M." />
            </div></div>
            <div className="x-body">
              <h4>Brunch &amp; inspiration</h4>
              <p>Un brunch convivial accompagné d&apos;un talk inspirant par Edith Kanzie pour te redonner de l&apos;élan.</p>
            </div>
          </article>
        </div>

        <div className="event-takeaways">
          <h3>Ce que tu repartiras avec</h3>
          <ul className="checklist">
            <li><span className="tick">01</span>Une clarté absolue sur tes priorités</li>
            <li><span className="tick">02</span>Une énergie renouvelée et vibrante</li>
            <li><span className="tick">03</span>Une connexion plus forte à toi-même</li>
            <li><span className="tick">04</span>Une meilleure capacité à prendre des décisions</li>
            <li><span className="tick">05</span>Un nouveau mindset orienté vers l&apos;action</li>
          </ul>
        </div>
        </section>

      <section className="band band-dark2 inner-detail">
        <div className="info-card">
          <h3>Informations pratiques</h3>
          <div className="row"><strong>Date :</strong> Samedi 25 avril 2026</div>
          <div className="row"><strong>Lieu :</strong> Akanda, Libreville (Derrière complexe le ministre)</div>
          <div className="row"><strong>Tarif :</strong> 25 000 FCFA par personne</div>
          <div className="row"><strong>Inclus :</strong> Tapis de yoga fourni, brunch et matériel d&apos;introspection</div>
          <div className="warn">Attention : limité à 20 participantes uniquement.</div>
        </div>
        </section>

        <section className="event-about">
          <p>Cet événement s&apos;inscrit dans la mission d&apos;Edith Kanzie Coaching : propulser les femmes africaines grâce à un développement personnel structuré, pour renforcer leur confiance, leur alignement et leur capacité à se transformer.</p>
          <h2>À propos d&apos;Edith Kanzie</h2>
          <p>Coach motivationnelle dédiée à aider les femmes africaines à retrouver leur confiance, clarifier leur vision et passer à l&apos;action. Mon approche va au-delà de la simple motivation : je t&apos;accompagne vers une véritable transformation durable, avec chaleur, professionnalisme et une profonde humanité.</p>
        </section>

        <section className="event-final-cta">
          <h2>Réserve ta place dès maintenant</h2>
          <p>Sécurise ta participation à cet événement exclusif. Le paiement est rapide et sécurisé.</p>
          <a className="btn btn-solid" href="/contact">Je réserve ma place</a>
        </section>
      </main>

      <Footer />
    </>
  );
}
