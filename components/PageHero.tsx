import { Check, Calendar, MapPin, Clock, Heart } from "lucide-react";

type Variant = "centered" | "split" | "dark" | "event";

type EventMeta = {
  date?: string;
  place?: string;
  time?: string;
  price?: string;
};

type PageHeroProps = {
  variant?: Variant;
  kicker: string;
  title: string;
  lead: string;
  image?: string;
  imageAlt?: string;
  tagText?: string;
  cardPoints?: string[];
  eventMeta?: EventMeta;
  portraitAvatar?: string;
  portraitName?: string;
  portraitRole?: string;
};

export default function PageHero({
  variant = "centered",
  kicker,
  title,
  lead,
  image,
  imageAlt,
  tagText,
  cardPoints,
  eventMeta,
  portraitAvatar,
  portraitName,
  portraitRole,
}: PageHeroProps) {
  const titleHtml = (
    <h1 dangerouslySetInnerHTML={{ __html: title }} />
  );

  if (variant === "event") {
    return (
      <section className="evh">
        <div className="wrap evh-grid">
          <div className="evh-copy">
            <div className="evh-badge">
              <span className="evh-ico">
                <Heart size={16} />
              </span>
              <span className="evh-btxt">
                <strong>{kicker}</strong>
                <span>Expérience immersive · places limitées</span>
              </span>
            </div>
            {titleHtml}
            <p className="evh-lede">{lead}</p>
            {eventMeta && (
              <div className="evh-meta">
                {eventMeta.date && (
                  <span className="evchip">
                    <span className="evchip-ico">
                      <Calendar size={14} />
                    </span>
                    <span className="evchip-txt">
                      <strong>Date</strong>
                      <span>{eventMeta.date}</span>
                    </span>
                  </span>
                )}
                {eventMeta.place && (
                  <span className="evchip">
                    <span className="evchip-ico">
                      <MapPin size={14} />
                    </span>
                    <span className="evchip-txt">
                      <strong>Lieu</strong>
                      <span>{eventMeta.place}</span>
                    </span>
                  </span>
                )}
                {eventMeta.time && (
                  <span className="evchip">
                    <span className="evchip-ico">
                      <Clock size={14} />
                    </span>
                    <span className="evchip-txt">
                      <strong>Horaire</strong>
                      <span>{eventMeta.time}</span>
                    </span>
                  </span>
                )}
              </div>
            )}
          </div>

          <div className="evh-vis">
            {image && (
              <div className="evh-img">
                <img src={image} alt={imageAlt ?? ""} />
              </div>
            )}
            {eventMeta?.price && (
              <div className="evh-price">
                <small>Tarif</small>
                <strong>{eventMeta.price}</strong>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  if (variant === "split") {
    return (
      <section className="ph">
        <div className="wrap">
          <div className="ph-grid">
            <div className="ph-copy">
              <span className="kicker">{kicker}</span>
              <div style={{ marginTop: 18 }}>{titleHtml}</div>
              <p className="ph-lede" style={{ marginTop: 22 }}>
                {lead}
              </p>
              {cardPoints && cardPoints.length > 0 && (
                <div style={{ marginTop: 28 }}>
                  <div style={{
                    display: "flex", flexDirection: "column", gap: 10,
                  }}>
                    {cardPoints.map((point) => (
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
              )}
            </div>
            {image && (
              <div className="ph-media">
                <div className="ph-img-frame">
                  <img src={image} alt={imageAlt ?? ""} />
                </div>
                {tagText && (
                  <span
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      padding: "8px 16px 8px 12px",
                      background: "var(--gold-500)",
                      color: "var(--violet-900)",
                      borderRadius: "0 var(--r-lg) var(--r-lg) var(--r-lg)",
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      boxShadow: "var(--sh-2)",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "var(--violet-900)",
                      }}
                    />
                    {tagText}
                  </span>
                )}
                {portraitAvatar && (
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
                    {portraitAvatar && (
                      <img
                        src={portraitAvatar}
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
                    )}
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
                        {portraitName ?? "Edith Kanzie"}
                      </strong>
                      <span
                        style={{
                          display: "block",
                          fontSize: 11,
                          color: "var(--muted)",
                          marginTop: 2,
                        }}
                      >
                        {portraitRole ?? "Coach certifiée"}
                      </span>
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  if (variant === "dark") {
    return (
      <section className="ph dark">
        <div className="ph-inner">
          <span className="kicker gold-dark">{kicker}</span>
          <div style={{ marginTop: 18 }}>{titleHtml}</div>
          <p className="ph-lede" style={{ marginTop: 22 }}>
            {lead}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="ph">
      <div className="ph-inner">
        <span className="kicker">{kicker}</span>
        <div style={{ marginTop: 18 }}>{titleHtml}</div>
        <p className="ph-lede" style={{ marginTop: 22 }}>
          {lead}
        </p>
      </div>
    </section>
  );
}
