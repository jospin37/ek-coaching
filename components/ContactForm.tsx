"use client";

export default function ContactForm() {
  return (
    <div className="form-card" id="message">
      <h3>M&apos;envoyer un message</h3>
      <p>
        Une question spécifique sur un programme ? Remplissez le formulaire ci-dessous et je prendrai plaisir à
        vous répondre personnellement dans les plus brefs délais.
      </p>
      <form onSubmit={(event) => event.preventDefault()}>
        <div className="row2">
          <div>
            <label>Nom complet</label>
            <input type="text" name="name" autoComplete="name" placeholder="Ex. Aminata Diallo" required />
          </div>
        </div>
        <div className="row2">
          <div>
            <label>E-mail</label>
            <input type="email" name="email" autoComplete="email" placeholder="votre@email.com" required />
          </div>
          <div>
            <label>Téléphone</label>
            <input type="tel" name="phone" autoComplete="tel" placeholder="+33 6 00 00 00 00" />
          </div>
        </div>
        <div>
          <label>Votre message</label>
          <textarea name="message" placeholder="Comment puis-je vous aider dans votre transformation ?" required></textarea>
        </div>
        <button className="btn btn-solid" type="submit">Envoyer le message</button>
      </form>
    </div>
  );
}
