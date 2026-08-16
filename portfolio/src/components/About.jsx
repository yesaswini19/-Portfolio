import SectionHeading from "./SectionHeading.jsx";

const HIGHLIGHTS = [
  "CSE undergraduate, CGPA 8.64/10",
  "Full-stack development",
  "React.js · Node.js · Express.js",
  "MongoDB · MySQL",
  "Responsive web applications",
  "Cloud fundamentals",
  "Cybersecurity",
  "System administration",
];

export default function About() {
  return (
    <section id="about" className="px-5 md:px-8 py-20 md:py-28 max-w-6xl mx-auto">
      <SectionHeading path="~/about" title="About Me" />

      <div className="grid md:grid-cols-5 gap-10">
        <div className="md:col-span-3 space-y-5 text-muted leading-relaxed text-lg">
          <p>
            I'm a Computer Science &amp; Engineering undergraduate with a CGPA
            of 8.64/10 and hands-on experience in full-stack development
            using React.js, Node.js, Express.js, MongoDB, and MySQL.
          </p>
          <p>
            I have experience designing and building responsive,
            user-centric web applications with clean UI and reliable backend
            integration.
          </p>
          <p>
            I'm currently strengthening my expertise in cloud fundamentals,
            cybersecurity, and system administration through
            industry-recognized certifications — approaching full-stack
            development and emerging technologies as a fast learner with a
            detail-oriented mindset.
          </p>
        </div>

        <div className="md:col-span-2">
          <div className="rounded-xl border border-hairline bg-surface p-6">
            <p className="font-mono text-xs text-accent-soft mb-4">
              profile
            </p>
            <ul className="space-y-3">
              {HIGHLIGHTS.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm text-ink">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
