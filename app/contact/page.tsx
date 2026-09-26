"use client";

import { CalendarDays, Camera, Check, Mail, MapPin, Phone, Star, ArrowRight } from "lucide-react";
import { useState } from "react";
import BookingModal from "../../components/BookingModal";
import ContactForm from "../../components/ContactForm";
import PageHero from "../../components/PageHero";
import { siteInfo } from "../../lib/data";

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

export default function ContactPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  return (
    <main>
      <section className="ph">
        <div className="wrap">
          <div className="ph-grid">
            <div className="ph-copy">
              <span className="kicker">Contact &amp; prise de RDV</span>
              <h1 dangerouslySetInnerHTML={{ __html: "Et si tu prenais enfin du <em>temps</em> pour toi ?" }} />
              <p className="ph-lede" style={{ marginTop: 22 }}>
                Réserver un appel découverte, poser une question, ou simplement échanger — tu es au bon endroit. Je te réponds sous 48h.
              </p>
              <div style={{ marginTop: 32, display: "flex", flexWrap: "wrap", gap: 12 }}>
                <button
                  type="button"
                  className="btn btn-g"
                  onClick={() => setBookingOpen(true)}
                >
                  <CalendarDays aria-hidden="true" size={16} />
                  Réserver un appel
                  <ArrowRight size={16} aria-hidden="true" />
                </button>
                <a className="btn btn-ghost" href="#form">
                  Poser une question
                </a>
              </div>
              <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  "Appel découverte gratuit de 30 min",
                  "100% confidentiel & sans engagement",
                  "Échange en visio ou appel téléphonique",
                ].map((point) => (
                  <span
                    key={point}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "10px 16px",
                      background: "var(--violet-50)",
                      borderRadius: "var(--r-md)",
                      fontSize: 14,
                      color: "var(--violet-900)",
                      fontWeight: 500,
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        width: 18,
                        height: 18,
                        display: "grid",
                        placeItems: "center",
                        borderRadius: "50%",
                        background: "var(--violet-900)",
                        color: "var(--gold-500)",
                        flexShrink: 0,
                      }}
                    >
                      <Check size={11} />
                    </span>
                    {point}
                  </span>
                ))}
              </div>
            </div>
            <div className="ph-media">
              <div className="ph-img-frame">
                <img src="/images/coach2.png" alt="Edith Kanzie en appel" />
              </div>
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  padding: "14px 18px 14px 14px",
                  background: "#fff",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--r-lg) var(--r-lg) var(--r-lg) 0",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  boxShadow: "var(--sh-2)",
                }}
              >
                <img
                  src="/images/coach.png"
                  alt=""
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "2px solid var(--gold-500)",
                    padding: 2,
                    background: "var(--violet-50)",
                  }}
                />
                <span>
                  <strong
                    style={{
                      display: "block",
                      fontFamily: "var(--font-display), Georgia, serif",
                      fontSize: 14,
                      color: "var(--violet-900)",
                      fontWeight: 600,
                    }}
                  >
                    Edith Kanzie
                  </strong>
                  <span
                    style={{
                      display: "block",
                      fontSize: 11,
                      color: "var(--muted)",
                      marginTop: 2,
                    }}
                  >
                    Coach certifiée · Libreville & en ligne
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blk">
        <div className="wrap cg">
          <aside className="cside reveal">
            <div className="cside-head">
              <img src="/images/coach.png" alt="Edith Kanzie" />
              <span>
                <strong>Edith Kanzie</strong>
                <span>Coach certifiée · Leadership &amp; Confiance</span>
              </span>
            </div>

            <div className="cside-sec">
              <h4>Appel découverte — 30 min</h4>
              <Stars />
              <p style={{
                fontSize: 14,
                color: "rgba(255,255,255,0.78)",
                marginBottom: 14,
                lineHeight: 1.65,
              }}>
                Cet échange est fait pour toi si&nbsp;:
              </p>
              <ul className="ccheck">
                {[
                  "Tu te sens bloquée dans ta vie perso ou pro",
                  "Tu veux évoluer mais tu ne sais pas comment",
                  "Tu veux comprendre ce qui te freine vraiment",
                ].map((item) => (
                  <li key={item}>
                    <span className="ccheck-tick">
                      <Check size={11} aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className="btn btn-g"
                style={{ marginTop: 18, width: "100%" }}
                onClick={() => setBookingOpen(true)}
              >
                <CalendarDays aria-hidden="true" size={16} />
                Réserver mon appel
              </button>
            </div>

            <div className="cside-sec">
              <h4>Coordonnées</h4>
              <div className="cside-list">
                <a href={`mailto:${siteInfo.email}`}>
                  <Mail aria-hidden="true" size={15} />
                  {siteInfo.email}
                </a>
                <a href={siteInfo.phoneHref}>
                  <Phone aria-hidden="true" size={15} />
                  {siteInfo.phone}
                </a>
                <p>
                  <MapPin aria-hidden="true" size={15} />
                  {siteInfo.location}
                </p>
                <p>
                  <Camera aria-hidden="true" size={15} />
                  {siteInfo.instagram}
                </p>
              </div>
            </div>
          </aside>

          <div id="form" className="reveal d1">
            <ContactForm />
          </div>
        </div>
      </section>
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </main>
  );
}
