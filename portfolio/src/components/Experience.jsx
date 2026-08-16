import { useEffect, useRef, useState } from "react";
import SectionHeading from "./SectionHeading.jsx";
import { experience } from "../data/experience.js";

function TimelineItem({ item, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative pl-10 pb-10 last:pb-0 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-accent ring-4 ring-accent/20" />
      {index !== 0 && (
        <span className="absolute left-[5px] -top-10 h-10 w-px bg-hairline" />
      )}
      <p className="font-display text-lg font-semibold text-ink">
        {item.role}
      </p>
      <p className="font-mono text-sm text-accent-soft mt-1">{item.org}</p>
      <p className="mt-2 text-muted text-sm leading-relaxed max-w-xl">
        {item.description}
      </p>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="px-5 md:px-8 py-20 md:py-28 max-w-6xl mx-auto">
      <SectionHeading path="~/experience" title="Experience" />
      <div className="max-w-2xl">
        {experience.map((item, i) => (
          <TimelineItem key={item.role + item.org} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
