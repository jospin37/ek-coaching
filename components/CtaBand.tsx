import Link from "next/link";
import { ArrowRight } from "lucide-react";

type CtaBandProps = {
  title: string;
  copy: string;
  href?: string;
  label?: string;
};

export default function CtaBand({
  title,
  copy,
  href = "/contact",
  label = "Réserver un appel",
}: CtaBandProps) {
  return (
    <section className="cta-final">
      <div className="wrap">
        <div className="cta-card">
          <div className="cta-inner">
            <div className="cta-text">
              <span className="kicker gold-dark">Premier pas</span>
              <h2>{title}</h2>
              <p>{copy}</p>
            </div>
            <div className="cta-actions">
              <Link className="btn btn-g" href={href}>
                {label}
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <span className="cta-sub">
                30 minutes · sans engagement · 100% confidentiel
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
