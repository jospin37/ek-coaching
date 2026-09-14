"use client";

import { CalendarDays, Check, Clock3, Video, X } from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";

type BookingModalProps = {
  open: boolean;
  onClose: () => void;
};

const dates = [
  { day: "15", label: "Lun" },
  { day: "17", label: "Mer" },
  { day: "22", label: "Lun" },
  { day: "24", label: "Mer" },
  { day: "29", label: "Lun" },
];

const times = ["09:00", "11:30", "14:00", "17:30"];

export default function BookingModal({ open, onClose }: BookingModalProps) {
  const [selectedDate, setSelectedDate] = useState("15");
  const [selectedTime, setSelectedTime] = useState("14:00");
  const [submitted, setSubmitted] = useState(false);
  const modalRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;

    modalRef.current?.scrollTo({ top: 0, behavior: "auto" });
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="booking-overlay" role="presentation" onMouseDown={onClose}>
      <section ref={modalRef} className="booking-modal" role="dialog" aria-modal="true" aria-labelledby="booking-title" onMouseDown={(event) => event.stopPropagation()}>
        <button className="booking-close" type="button" onClick={onClose} aria-label="Fermer la réservation">
          <X aria-hidden="true" />
        </button>

        <div className="booking-intro">
          <span className="booking-index">EK / 01</span>
          <p className="booking-kicker">Appel découverte</p>
          <h2 id="booking-title">Un premier échange pour remettre les choses en mouvement.</h2>
          <p className="booking-copy">Un moment simple et confidentiel pour comprendre ta situation, clarifier ton besoin et voir si l&apos;accompagnement est fait pour toi.</p>
          <div className="booking-facts">
            <span><Clock3 aria-hidden="true" /> 30 minutes</span>
            <span><Video aria-hidden="true" /> En ligne</span>
          </div>
          <div className="booking-note"><Check aria-hidden="true" /> Sans engagement, avec bienveillance.</div>
        </div>

        <div className="booking-details">
          {submitted ? (
            <div className="booking-success">
              <span className="booking-success-icon"><Check aria-hidden="true" /></span>
              <h3>Demande bien reçue.</h3>
              <p>Je reviendrai vers toi pour confirmer le créneau du {selectedDate} à {selectedTime}.</p>
              <button className="btn btn-solid" type="button" onClick={onClose}>Fermer</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="booking-heading">
                <CalendarDays aria-hidden="true" />
                <div><span>Étape 01</span><h3>Choisis ton créneau</h3></div>
              </div>
              <div className="booking-month">Septembre 2026</div>
              <div className="booking-dates" aria-label="Choisir une date">
                {dates.map((date) => (
                  <button className={selectedDate === date.day ? "booking-date is-selected" : "booking-date"} key={date.day} type="button" onClick={() => setSelectedDate(date.day)}>
                    <small>{date.label}</small><strong>{date.day}</strong>
                  </button>
                ))}
              </div>
              <div className="booking-time-label">Horaires disponibles</div>
              <div className="booking-times">
                {times.map((time) => (
                  <button className={selectedTime === time ? "booking-time is-selected" : "booking-time"} key={time} type="button" onClick={() => setSelectedTime(time)}>{time}</button>
                ))}
              </div>
              <div className="booking-fields">
                <label>Ton prénom<input name="firstName" placeholder="Prénom" required /></label>
                <label>Ton e-mail<input name="email" type="email" placeholder="ton@email.com" required /></label>
              </div>
              <button className="btn btn-solid booking-submit" type="submit">Réserver le {selectedDate} à {selectedTime}</button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
