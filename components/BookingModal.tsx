"use client";

import { CalendarDays, Check, Clock3, Video, X } from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";

type BookingModalProps = {
  open: boolean;
  onClose: () => void;
};

const dates = [
  { day: "28", label: "Lun" },
  { day: "30", label: "Mer" },
  { day: "02", label: "Ven" },
  { day: "05", label: "Lun" },
  { day: "07", label: "Mer" },
];

const times = ["09:00", "11:30", "14:00", "17:30"];

export default function BookingModal({ open, onClose }: BookingModalProps) {
  const [selectedDate, setSelectedDate] = useState("28");
  const [selectedTime, setSelectedTime] = useState("14:00");
  const [submitted, setSubmitted] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    modalRef.current?.scrollTo({ top: 0, behavior: "auto" });
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSubmitted(false);
        onClose();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  function close() {
    setSubmitted(false);
    onClose();
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div
      className="book-ov"
      role="presentation"
      onMouseDown={close}
    >
      <div
        ref={modalRef}
        className="book"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button
          className="book-x"
          type="button"
          onClick={close}
          aria-label="Fermer"
        >
          <X aria-hidden="true" size={16} />
        </button>

        <div className="book-intro">
          <span className="book-index">EK · 01</span>
          <p className="book-kicker">Appel découverte</p>
          <h2 id="booking-title">
            Un premier échange pour remettre les choses en mouvement.
          </h2>
          <p className="book-copy">
            Un moment simple et confidentiel pour comprendre ta situation,
            clarifier ton besoin et voir si l&apos;accompagnement est fait pour toi.
          </p>
          <div className="book-facts">
            <span>
              <Clock3 aria-hidden="true" size={14} /> 30 minutes
            </span>
            <span>
              <Video aria-hidden="true" size={14} /> En ligne
            </span>
          </div>
          <div className="book-note">
            <Check aria-hidden="true" size={14} />
            Sans engagement, avec bienveillance.
          </div>
        </div>

        {submitted ? (
          <div className="book-ok">
            <span className="book-ok-ico">
              <Check aria-hidden="true" size={26} />
            </span>
            <h3>Demande bien reçue.</h3>
            <p>
              Je reviendrai vers toi pour confirmer le créneau du {selectedDate}{" "}
              à {selectedTime}.
            </p>
            <button className="btn btn-p" type="button" onClick={close}>
              Fermer
            </button>
          </div>
        ) : (
          <form className="book-form" onSubmit={handleSubmit}>
            <div className="book-hd">
              <span className="book-hd-ico">
                <CalendarDays aria-hidden="true" />
              </span>
              <div className="book-hd-txt">
                <span>Étape 01</span>
                <h3>Choisis ton créneau</h3>
              </div>
            </div>

            <span className="book-month">Septembre — octobre 2026</span>

            <div className="book-dates" role="radiogroup" aria-label="Choisir une date">
              {dates.map((date) => (
                <div
                  key={date.day}
                  role="radio"
                  aria-checked={selectedDate === date.day}
                  tabIndex={0}
                  className={`book-date ${selectedDate === date.day ? "sel" : ""}`}
                  onClick={() => setSelectedDate(date.day)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelectedDate(date.day);
                    }
                  }}
                >
                  <small>{date.label}</small>
                  <strong>{date.day}</strong>
                </div>
              ))}
            </div>

            <p className="book-time-label">Horaires disponibles</p>
            <div className="book-times" role="radiogroup" aria-label="Choisir un horaire">
              {times.map((time) => (
                <div
                  key={time}
                  role="radio"
                  aria-checked={selectedTime === time}
                  tabIndex={0}
                  className={`book-time ${selectedTime === time ? "sel" : ""}`}
                  onClick={() => setSelectedTime(time)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelectedTime(time);
                    }
                  }}
                >
                  {time}
                </div>
              ))}
            </div>

            <div className="book-fields">
              <label>
                Ton prénom
                <input name="firstName" placeholder="Prénom" required />
              </label>
              <label>
                Ton e-mail
                <input name="email" type="email" placeholder="ton@email.com" required />
              </label>
              <label className="full">
                Un mot sur ta situation (optionnel)
                <input name="note" placeholder="Ce que tu souhaites aborder..." />
              </label>
            </div>

            <button className="btn btn-p book-sub" type="submit">
              Réserver le {selectedDate} à {selectedTime}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
