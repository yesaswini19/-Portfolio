export default function SectionHeading({ path, title, subtitle }) {
  return (
    <div className="mb-10 md:mb-14">
      <p className="font-mono text-sm text-accent-soft mb-3">{path}</p>
      <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-muted leading-relaxed">{subtitle}</p>
      )}
      <div className="mt-6 h-px w-full bg-hairline" />
    </div>
  );
}
