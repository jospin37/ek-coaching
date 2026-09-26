"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import { faqs } from "../lib/data";

export default function FaqList() {
  const [open, setOpen] = useState(0);

  return (
    <div className="faq-acc">
      {faqs.map((item, index) => {
        const isOpen = open === index;
        const num = String(index + 1).padStart(2, "0");
        return (
          <article
            className={isOpen ? "faq-item open" : "faq-item"}
            key={item.q}
          >
            <button
              type="button"
              className="faq-q"
              onClick={() => setOpen(isOpen ? -1 : index)}
              aria-expanded={isOpen}
            >
              <span className="faq-qn">{num}</span>
              <span className="faq-qt">{item.q}</span>
              <span className="faq-qi">
                <Plus aria-hidden="true" size={14} />
              </span>
            </button>
            <div className="faq-a">
              <div className="faq-a-inner">
                <p>{item.a}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
