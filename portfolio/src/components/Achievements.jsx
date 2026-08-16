import SectionHeading from "./SectionHeading.jsx";
import { achievements } from "../data/experience.js";
import { Award } from "lucide-react";

export default function Achievements() {
  return (
    <section id="achievements" className="px-5 md:px-8 py-20 md:py-28 max-w-6xl mx-auto">
      <SectionHeading path="~/achievements" title="Achievements" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {achievements.map((a) => (
          <div
            key={a.label}
            className="rounded-xl border border-hairline bg-surface p-6 text-center"
          >
            <Award size={22} className="text-amber mx-auto mb-3" />
            <p className="font-display text-xl font-semibold text-ink">
              {a.detail}
            </p>
            <p className="mt-1 font-mono text-xs text-muted">{a.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {["Creativity", "Adaptability", "Problem-Solving"].map((s) => (
          <span
            key={s}
            className="rounded-full border border-hairline bg-surface2 px-4 py-1.5 font-mono text-xs text-ink"
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}
