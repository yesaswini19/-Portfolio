import SectionHeading from "./SectionHeading.jsx";
import { projects } from "../data/projects.js";
import { Github, ExternalLink } from "lucide-react";

function TechBadge({ children }) {
  return (
    <span className="rounded-md border border-hairline bg-surface2 px-2 py-0.5 font-mono text-[11px] text-muted">
      {children}
    </span>
  );
}

function ProjectLinks({ github, demo }) {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      <a
        href={github}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-lg border border-hairline px-4 py-2 text-sm text-ink hover:border-accent hover:text-accent-soft transition-colors"
      >
        <Github size={16} />
        GitHub
      </a>
      <a
        href={demo}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-[#0B0F19] hover:bg-accent-soft transition-colors"
      >
        <ExternalLink size={16} />
        Live Demo
      </a>
    </div>
  );
}

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="px-5 md:px-8 py-20 md:py-28 max-w-6xl mx-auto">
      <SectionHeading
        path="~/projects"
        title="Projects"
        subtitle="A selection of things I've built, from frontend prototypes to a full-stack platform."
      />

      {featured && (
        <div className="rounded-2xl border border-accent/40 bg-surface p-7 md:p-9 mb-8">
          <p className="font-mono text-xs text-amber mb-3 uppercase tracking-wide">
            Featured Project
          </p>
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink">
              {featured.title}
            </h3>
            <span className="font-mono text-sm text-muted">
              {featured.tagline}
            </span>
          </div>
          <p className="mt-4 text-muted leading-relaxed max-w-2xl">
            {featured.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {featured.stack.map((s) => (
              <TechBadge key={s}>{s}</TechBadge>
            ))}
          </div>

          <ul className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-2">
            {featured.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-ink">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                {f}
              </li>
            ))}
          </ul>

          <ProjectLinks github={featured.github} demo={featured.demo} />
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {rest.map((p) => (
          <div
            key={p.id}
            className="rounded-xl border border-hairline bg-surface p-6 hover:border-accent/60 transition-colors flex flex-col"
          >
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="font-display text-xl font-semibold text-ink">
                {p.title}
              </h3>
              <span className="font-mono text-xs text-muted">{p.tagline}</span>
            </div>
            <p className="mt-3 text-muted text-sm leading-relaxed">
              {p.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <TechBadge key={s}>{s}</TechBadge>
              ))}
            </div>

            <ul className="mt-5 space-y-1.5">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-ink">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <ProjectLinks github={p.github} demo={p.demo} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
