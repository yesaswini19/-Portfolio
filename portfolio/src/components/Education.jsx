import SectionHeading from "./SectionHeading.jsx";
import { education } from "../data/experience.js";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="px-5 md:px-8 py-20 md:py-28 max-w-6xl mx-auto">
      <SectionHeading path="~/education" title="Education" />

      <div className="grid md:grid-cols-3 gap-6">
        {education.map((e) => (
          <div
            key={e.degree}
            className="rounded-xl border border-hairline bg-surface p-6"
          >
            <GraduationCap size={20} className="text-accent-soft mb-4" />
            <p className="font-display text-lg font-semibold text-ink leading-snug">
              {e.degree}
            </p>
            <p className="mt-1 text-sm text-muted">{e.school}</p>
            <p className="text-sm text-muted">
              {[e.location, e.period].filter(Boolean).join(" · ")}
            </p>
            <p className="mt-4 inline-block rounded-md bg-amber/10 border border-amber/30 px-3 py-1 font-mono text-sm text-amber">
              {e.score}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
