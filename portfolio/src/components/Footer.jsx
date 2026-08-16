import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-hairline px-5 md:px-8 py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted">
          ©Pamidi Yesaswini
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/yesaswini19"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted hover:text-ink transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/pamidi-yesaswini-5298a6361/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted hover:text-ink transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://www.codechef.com/users/vvit23bq1a4763"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs text-muted hover:text-ink transition-colors"
          >
            CodeChef
          </a>
        </div>
      </div>
    </footer>
  );
}
