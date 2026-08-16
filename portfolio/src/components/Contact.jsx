import { useState } from "react";
import SectionHeading from "./SectionHeading.jsx";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // null | "sent"

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function validate() {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) next.email = "Please enter your email.";
    else if (!EMAIL_RE.test(form.email)) next.email = "Enter a valid email address.";
    if (!form.message.trim()) next.message = "Please enter a message.";
    return next;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length === 0) {
      // No backend/email service is connected. Replace this with a real
      // submission handler (e.g. Formspree, EmailJS, or a serverless
      // function) before relying on this form in production.
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    }
  }

  return (
    <section id="contact" className="px-5 md:px-8 py-20 md:py-28 max-w-6xl mx-auto">
      <SectionHeading
        path="~/contact"
        title="Contact"
        subtitle="Open to internship and full-stack developer opportunities — feel free to reach out."
      />

      <div className="grid md:grid-cols-5 gap-10">
        <div className="md:col-span-2 space-y-5">
          <a
            href="mailto:yesaswinipamidi19@gmail.com"
            className="flex items-center gap-3 text-ink hover:text-accent-soft transition-colors"
          >
            <Mail size={18} className="text-accent-soft" />
            yesaswinipamidi19@gmail.com
          </a>
          <a
            href="tel:+919133845039"
            className="flex items-center gap-3 text-ink hover:text-accent-soft transition-colors"
          >
            <Phone size={18} className="text-accent-soft" />
            +91-9133845039
          </a>
          <div className="flex items-center gap-3 text-ink">
            <MapPin size={18} className="text-accent-soft" />
            Guntur, Andhra Pradesh, India
          </div>

          <div className="flex items-center gap-4 pt-2">
            <a
              href="https://github.com/yesaswini19"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-muted hover:text-ink transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/pamidi-yesaswini-5298a6361/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-muted hover:text-ink transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://www.codechef.com/users/vvit23bq1a4763"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs text-muted hover:text-ink transition-colors border border-hairline rounded px-2 py-1"
            >
              CodeChef
            </a>
          </div>

          <p className="font-mono text-xs text-muted pt-4">
            Languages: Telugu, English, Hindi
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="md:col-span-3 rounded-xl border border-hairline bg-surface p-6 space-y-4"
        >
          <div>
            <label htmlFor="name" className="block font-mono text-xs text-muted mb-1.5">
              Name
            </label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-lg bg-surface2 border border-hairline px-3.5 py-2.5 text-ink focus:outline-none focus:border-accent"
            />
            {errors.name && (
              <p className="mt-1 text-xs text-amber">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block font-mono text-xs text-muted mb-1.5">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-lg bg-surface2 border border-hairline px-3.5 py-2.5 text-ink focus:outline-none focus:border-accent"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-amber">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block font-mono text-xs text-muted mb-1.5">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-lg bg-surface2 border border-hairline px-3.5 py-2.5 text-ink focus:outline-none focus:border-accent resize-none"
            />
            {errors.message && (
              <p className="mt-1 text-xs text-amber">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="rounded-lg bg-accent px-5 py-2.5 font-medium text-[#0B0F19] hover:bg-accent-soft transition-colors"
          >
            Send Message
          </button>

          {status === "sent" && (
            <p className="text-sm text-accent-soft">
              Message validated locally. Connect a form backend (Formspree,
              EmailJS, etc.) to actually deliver this.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
