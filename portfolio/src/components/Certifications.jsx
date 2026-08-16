import SectionHeading from "./SectionHeading.jsx";
import { certifications } from "../data/certifications.js";
import { BadgeCheck } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="px-5 md:px-8 py-20 md:py-28 max-w-6xl mx-auto">
      <SectionHeading
        path="~/certifications"
        title="Certifications"
        subtitle="Add certificate links any time — placeholders are marked below."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certifications.map((c) => (
          <div
            key={c.name}
            className="rounded-xl border border-hairline bg-surface p-5 hover:border-accent/60 transition-colors"
          >
            <BadgeCheck size={20} className="text-amber mb-3" />
            <p className="font-medium text-ink leading-snug">{c.name}</p>
            <p className="mt-1 font-mono text-xs text-muted">{c.org}</p>
            <a
              href="#"
              className="mt-3 inline-block font-mono text-xs text-accent-soft hover:underline"
            >
              add certificate link →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
