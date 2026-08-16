import SectionHeading from "./SectionHeading.jsx";
import { skillGroups } from "../data/skills.js";

export default function Skills() {
  return (
    <section id="skills" className="px-5 md:px-8 py-20 md:py-28 max-w-6xl mx-auto">
      <SectionHeading
        path="~/skills"
        title="Skills"
        subtitle="Languages, frameworks, and tools I work with."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="rounded-xl border border-hairline bg-surface p-6 hover:border-accent/60 transition-colors"
          >
            <p className="font-mono text-xs text-accent-soft mb-4 uppercase tracking-wide">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-hairline bg-surface2 px-2.5 py-1 font-mono text-xs text-ink hover:border-accent hover:text-accent-soft transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
