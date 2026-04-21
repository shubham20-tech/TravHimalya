interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  stats?: string[];
}

const PageHero = ({ eyebrow, title, description, stats = [] }: PageHeroProps) => {
  return (
    <section className="relative overflow-hidden border-b border-[var(--border-soft)] bg-[var(--surface)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,116,144,0.12),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.10),_transparent_28%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          {eyebrow && (
            <span className="mb-5 inline-flex rounded-full border border-[var(--border-soft)] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand-strong)] shadow-sm">
              {eyebrow}
            </span>
          )}
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-[var(--text-strong)] sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--text-muted)]">
            {description}
          </p>

          {stats.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-3">
              {stats.map((stat) => (
                <div
                  key={stat}
                  className="rounded-full border border-[var(--border-soft)] bg-white px-4 py-2 text-sm font-medium text-[var(--text-muted)] shadow-sm"
                >
                  {stat}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
