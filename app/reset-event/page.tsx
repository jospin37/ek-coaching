import { Check, ArrowRight, Leaf, Users, HeartHandshake } from "lucide-react";
import Link from "next/link";
import CtaBand from "../../components/CtaBand";
import PageHero from "../../components/PageHero";

const takeaways = [
  "Une clarté absolue sur tes priorités",
  "Une énergie renouvelée",
  "Une connexion plus forte à toi-même",
  "Une meilleure capacité à décider",
  "Un mindset orienté vers l'action",
];

const activities = [
  {
    icon: Leaf,
    img: "/images/yoga.avif",
    title: "Yoga & introspection",
    text: "Une séance douce, accessible à toutes, suivie d'un moment guidé d'introspection pour te reconnecter à ton corps.",
  },
  {
    icon: Users,
    img: "/images/foret.webp",
    title: "Partage authentique",
    text: "Des échanges vrais et bienveillants entre femmes qui partagent les mêmes réalités, sans jugement.",
  },
  {
    icon: HeartHandshake,
    img: "/images/food.webp",
    title: "Brunch & inspiration",
    text: "Un brunch convivial accompagné d'un talk inspirant pour te redonner de l'élan et repartir avec des outils concrets.",
  },
];

export default function ResetEventPage() {
  return (
    <main>
      <PageHero
        variant="event"
        kicker="Événement RESET"
        title="Reviens à <em>toi</em> et à ton pouvoir"
        lead="Une expérience immersive d'une journée pour ralentir, te reconnecter à toi-même et reprendre le contrôle de ta vie. Entre yoga, introspection et partage authentique."
        image="/images/photo_yoga.avif"
        imageAlt="Yoga-brunch RESET"
        eventMeta={{
          date: "Samedi 25 avril 2026",
          place: "Akanda, Libreville",
          time: "9h00 – 17h00",
          price: "25 000 FCFA",
        }}
      />

      <section className="blk">
        <div className="wrap-md">
          <div className="reveal">
            <span className="kicker violet">Tu te reconnais ?</span>
            <h2 style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.6rem)", marginTop: 18, marginBottom: 20, maxWidth: 18 }}>
              Tu cours toute la journée.
            </h2>
            <p className="lede">
              Entre le travail, la famille et les responsabilités, tu as l&rsquo;impression de ne jamais t&rsquo;arrêter.
              Tu donnes tout aux autres, mais à la fin de la journée, tu te sens vidée.
            </p>
            <p className="lede" style={{ marginTop: 14 }}>
              Tu sais que tu as du potentiel, tu sais que tu mérites mieux,
              mais tu n&rsquo;arrives plus à trouver l&rsquo;énergie ou la clarté pour avancer
              vers ce qui compte vraiment pour toi.
            </p>
          </div>
          <div
            className="reveal d2"
            style={{
              marginTop: 40,
              padding: "28px 32px",
              background: "var(--surface)",
              border: "1px solid var(--line)",
              borderLeft: "2px solid var(--gold-500)",
              borderRadius: "0 var(--r-md) var(--r-md) 0",
            }}
          >
            <p style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontStyle: "italic",
              fontSize: 18,
              color: "var(--violet-900)",
              lineHeight: 1.55,
            }}>
              Faire une pause n&rsquo;est pas un luxe. C&rsquo;est une décision consciente pour revenir à soi.
            </p>
          </div>
        </div>
      </section>

      <section className="blk" style={{ background: "var(--bg-alt)" }}>
        <div className="wrap">
          <div className="hdk reveal">
            <span className="kicker">L&rsquo;expérience</span>
            <h2>RESET : créée pour toi</h2>
            <p>
              Un espace structuré, intentionnel et sécurisant, conçu exclusivement pour les femmes
              qui veulent se retrouver.
            </p>
          </div>
          <div className="acts">
            {activities.map((card, i) => (
              <article className={`act reveal d${i + 1}`} key={card.title}>
                <span className="act-ico">
                  <card.icon aria-hidden="true" size={22} />
                </span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="blk">
        <div className="wrap" style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.05fr) minmax(0, 0.95fr)",
          gap: 56,
          alignItems: "start",
        }}>
          <div className="reveal">
            <span className="kicker violet">Au départ</span>
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", marginTop: 18, marginBottom: 24, maxWidth: 18 }}>
              Ce que tu repartiras avec
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {takeaways.map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 14,
                    padding: "14px 18px",
                    background: "var(--surface)",
                    border: "1px solid var(--line)",
                    borderRadius: "var(--r-md)",
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      flexShrink: 0,
                      width: 22,
                      height: 22,
                      display: "grid",
                      placeItems: "center",
                      borderRadius: "50%",
                      background: "rgba(244, 217, 122, 0.18)",
                      color: "var(--gold-700)",
                      marginTop: 1,
                    }}
                  >
                    <Check size={13} />
                  </span>
                  <span style={{ fontSize: 15, color: "var(--ink-2)", lineHeight: 1.55 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <aside
            className="reveal d1"
            style={{
              padding: "40px 36px",
              background: "linear-gradient(160deg, var(--violet-900) 0%, #34103B 100%)",
              borderRadius: "var(--r-xl)",
              color: "#fff",
              position: "sticky",
              top: "calc(var(--nav-h) + 20px)",
            }}
          >
            <h3 style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: 24,
              color: "#fff",
              fontWeight: 500,
              marginBottom: 20,
            }}>
              Informations pratiques
            </h3>
            <dl style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 24 }}>
              {[
                ["Date", "Samedi 25 avril 2026"],
                ["Lieu", "Akanda, Libreville"],
                ["Tarif", "25 000 FCFA"],
                ["Inclus", "Tapis de yoga, brunch, matériel"],
              ].map(([k, v]) => (
                <div key={k} style={{
                  paddingBottom: 14,
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}>
                  <dt style={{
                    fontSize: 10.5,
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--gold-400)",
                    marginBottom: 4,
                  }}>
                    {k}
                  </dt>
                  <dd style={{ fontSize: 15, color: "rgba(255,255,255,0.84)" }}>
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
            <p style={{
              padding: "12px 16px",
              background: "rgba(244, 217, 122, 0.10)",
              border: "1px solid rgba(244, 217, 122, 0.18)",
              borderRadius: "var(--r-md)",
              fontSize: 13,
              color: "var(--gold-400)",
              fontWeight: 600,
              marginBottom: 22,
            }}>
              ⚠ Places limitées à 20 participantes.
            </p>
            <Link className="btn btn-g" href="/contact" style={{ width: "100%" }}>
              Je réserve ma place
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </aside>
        </div>
      </section>

      <CtaBand
        title="Réserve ta place dès maintenant"
        copy="Sécurise ta participation à cet événement exclusif."
        href="/contact"
        label="Je réserve ma place"
      />
    </main>
  );
}
