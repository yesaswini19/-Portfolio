import { useEffect, useState } from "react";
import { Github, Linkedin, Download, Mail} from "lucide-react";

const FULL_TEXT = "Hi, I'm Pamidi Yesaswini";

export default function Hero() {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setTyped(FULL_TEXT);
      return;
    }
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTyped(FULL_TEXT.slice(0, i));
      if (i >= FULL_TEXT.length) clearInterval(id);
    }, 45);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      className="relative pt-36 pb-24 md:pt-44 md:pb-32 px-5 md:px-8 max-w-6xl mx-auto"
    >
      <div className="max-w-3xl animate-fadeUp">
        <div className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface px-3 py-1 font-mono text-xs text-muted mb-8">
          <span className="h-2 w-2 rounded-full bg-accent" />
          available for internships &amp; SDE roles
        </div>

        

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-ink leading-tight">
          {typed}
          <span className="inline-block w-[3px] h-[0.9em] bg-accent ml-1 animate-blink align-middle" />
        </h1>

        <p className="mt-5 font-mono text-lg md:text-xl text-accent-soft">
          Computer Science Engineering Student | Full-Stack Developer
        </p>

        <p className="mt-6 text-muted text-lg leading-relaxed max-w-2xl">
          Building responsive web applications, solving real-world problems,
          and continuously exploring emerging technologies.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-accent px-5 py-3 font-medium text-[#0B0F19] hover:bg-accent-soft transition-colors"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-lg border border-hairline px-5 py-3 font-medium text-ink hover:border-accent hover:text-accent-soft transition-colors"
          >
            <Download size={18} />
            Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-hairline px-5 py-3 font-medium text-ink hover:border-accent hover:text-accent-soft transition-colors"
          >
            <Mail size={18} />
            Contact Me
          </a>
        </div>

        <div className="mt-10 flex items-center gap-5">
          <a
            href="https://github.com/yesaswini19"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted hover:text-ink transition-colors"
          >
            <Github size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/pamidi-yesaswini-5298a6361/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted hover:text-ink transition-colors"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="https://www.codechef.com/users/vvit23bq1a4763"
            target="_blank"
            rel="noreferrer"
            aria-label="CodeChef"
            className="font-mono text-sm text-muted hover:text-ink transition-colors border border-hairline rounded px-2 py-1"
          >
            CodeChef
          </a>
        </div>
      </div>
    </section>
  );
}
