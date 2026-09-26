"use client";

import { Check, Sparkles } from "lucide-react";
import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="fcard" id="message">
        <div style={{ textAlign: "center", padding: "20px 0" }}>
          <span
            aria-hidden="true"
            style={{
              width: 60,
              height: 60,
              margin: "0 auto 20px",
              display: "grid",
              placeItems: "center",
              borderRadius: "50%",
              background: "linear-gradient(135deg, var(--gold-500), var(--gold-600))",
              color: "var(--violet-900)",
            }}
          >
            <Check size={26} />
          </span>
          <h3 style={{ fontSize: 22, marginBottom: 10 }}>Message bien reçu.</h3>
          <p style={{ maxWidth: 380, margin: "0 auto", fontSize: 15 }}>
            Je te réponds personnellement, généralement sous 48 heures.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fcard" id="message">
      <div className="fintro">
        <h3>M&apos;envoyer un message</h3>
        <p>Une question sur un programme ? Écris-moi : je te réponds personnellement.</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="fgrid">
          <div className="fg">
            <label htmlFor="name">Nom complet <span>*</span></label>
            <input
              id="name"
              type="text"
              name="name"
              autoComplete="name"
              placeholder="Ex. Aminata Diallo"
              required
            />
          </div>
          <div className="fg">
            <label htmlFor="email">E-mail <span>*</span></label>
            <input
              id="email"
              type="email"
              name="email"
              autoComplete="email"
              placeholder="votre@email.com"
              required
            />
          </div>
          <div className="fg">
            <label htmlFor="phone">Téléphone</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              autoComplete="tel"
              placeholder="+241 00 00 00 00"
            />
          </div>
          <div className="fg">
            <label htmlFor="topic">Sujet</label>
            <select id="topic" name="topic" defaultValue="">
              <option value="" disabled>Sélectionner...</option>
              <option>Coaching individuel</option>
              <option>Programme collectif</option>
              <option>Événement RESET</option>
              <option>Autre question</option>
            </select>
          </div>
          <div className="fg full">
            <label htmlFor="message-field">Votre message <span>*</span></label>
            <textarea
              id="message-field"
              name="message"
              placeholder="Comment puis-je vous aider ?"
              required
            />
          </div>
        </div>
        <div className="fbtn">
          <button className="btn btn-p" type="submit">
            Envoyer le message
            <Sparkles size={14} aria-hidden="true" />
          </button>
        </div>
      </form>
    </div>
  );
}
